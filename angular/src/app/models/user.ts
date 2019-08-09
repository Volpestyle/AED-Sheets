import { SearchSub } from './searchSub';

export class User {
  constructor(
    personId: number,
    roles?: string[],
    sharedSubs?: SearchSub[],
    name?: string,
    email?: string,
    phoneNumber?: string,
    subs?: SearchSub[],
  ) {
    this.personId = personId;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    // These are properties that will be edited before saving the user to db
    this.roles = roles ? roles : [];
    this.subs = subs ? subs : [];
    this.sharedSubs = sharedSubs ? sharedSubs : [];
  }
  personId: number;
  roles: string[];
  name: string;
  email: string;
  phoneNumber: string;
  subs: SearchSub[];
  sharedSubs: SearchSub[];
}
