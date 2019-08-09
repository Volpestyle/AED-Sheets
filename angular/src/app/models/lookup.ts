export class LookupValue {
  constructor(lookup: string, val: any, title?: string) {
    this.val = val;
    this.lookup = lookup;
    this.title = title;
  }
  _id: any;
  lookup: string;
  title: string;
  val: any;
}

export class Lookup {
  constructor(
    name: string,
    displayName: string,
    vals: LookupValue[],
    type: string,
  ) {
    this.name = name;
    this.displayName = displayName;
    this.vals = vals;
    this.type = type;
  }
  type: string;
  displayName: string;
  name: string;
  vals: LookupValue[];
}
