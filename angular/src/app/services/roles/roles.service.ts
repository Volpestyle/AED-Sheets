import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { Observable, of, from } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private readonly PERMISSIONS = environment['permissions'];
  userRoles: Set<string> = new Set();
  auths: Map<String, Boolean> = new Map();

  constructor(private userService: UserService) {}

  // Gets the roles of the current user
  public getRoles() {
    return new Promise((resolve, reject) => {
      this.userService.getUser().subscribe(
        user => {
          this.userRoles = new Set(user.roles);
          resolve();
        },
        err => {
          reject(err);
        },
      );
    });
  }

  // helper function
  makeAuthMap(roles) {
    let map = new Map();
    for (let key of Object.keys(this.PERMISSIONS)) {
      map.set(key, this.doCheckAuthorization([key], roles));
    }
    return map;
  }

  // Creates a Map of all actions the user has permissions to do
  public async getAuthorizations() {
    if (!this.auths.size) {
      if (!this.userRoles.size) await this.getRoles();
      for (let key of Object.keys(this.PERMISSIONS)) {
        this.checkAuthorization([key]).then(authorized => {
          this.auths.set(key, authorized);
        });
      }
    }
  }

  // Checks the authorization of a single action
  public async checkAuthorization(path: any) {
    if (!this.userRoles.size) await this.getRoles();
    return this.doCheckAuthorization(path, this.userRoles);
  }

  public doCheckAuthorization(path: string[], roles: Set<string>) {
    if (path.length) {
      const entry = this.findEntry(this.PERMISSIONS, path);
      if (entry && entry['permittedRoles'] && roles.size) {
        return entry.permittedRoles.some(permittedRole => {
          return roles.has(permittedRole);
        });
      }
      return false;
    }
    return false;
  }

  /**
   * Recursively find workflow-map entry based on the path strings
   */
  private findEntry(currentObject: any, keys: string[], index = 0) {
    const key = keys[index];
    if (currentObject[key] && index < keys.length - 1) {
      return this.findEntry(currentObject[key], keys, index + 1);
    } else if (currentObject[key] && index === keys.length - 1) {
      return currentObject[key];
    } else {
      return false;
    }
  }
}
