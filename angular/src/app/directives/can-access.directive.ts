//

import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RolesService } from '../services/roles/roles.service';

@Directive({
  selector: '[appCanAccess]',
  providers: [],
})
export class CanAccessDirective implements OnInit, OnDestroy {
  @Input('appCanAccess') appCanAccess: string | string[];
  private permission$: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private rolesService: RolesService,
  ) {}

  ngOnInit(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    this.permission$ = this.rolesService
      .checkAuthorization(this.appCanAccess)
      .then(authorized => {
        if (authorized) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }
}
