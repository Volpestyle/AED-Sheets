export class Note {
  _id: any;
  author: String;
  content: String;
  createdAt: Date;

  toString() {
    return `${this.author} at ${this.createdAt}: ${this.content}`;
  }
}

export class Entry {
  constructor(
    submittedBy: string,
    date: Date,
    location: string,
    show: string,
    classification: string,
    heardOnAir: string,
    actionTaken: string,
    onAir: boolean,
    funder: boolean,
    duration: number,
    eTag: string,
    entry: string,
    serviceTicket: boolean,
  ) {
    // Mostly when importing historical, we can't garuntee a field to be filled
    this.submittedBy = submittedBy ? submittedBy : 'N/A';
    this.date = date;
    this.location = location ? location : 'N/A';
    this.show = show ? show : 'N/A';
    this.classification = classification ? classification : 'N/A';
    this.heardOnAir = heardOnAir ? heardOnAir : 'N/A';
    this.actionTaken = actionTaken ? actionTaken : 'N/A';
    this.duration = duration;
    this.funder = funder;
    this.onAir = onAir;
    this.eTag = eTag;
    this.entry = entry ? entry : 'N/A';
    this.serviceTicket = serviceTicket;
    this.isDeleted = false;
  }
  _id: any;
  date: Date;
  submittedBy: string;
  attachment: any;
  location: string;
  show: string;
  classification: string;
  heardOnAir: string;
  actionTaken: string;
  duration: Number;
  funder: Boolean;
  onAir: Boolean;
  serviceTicket: Boolean;
  notes: Note[];
  entry: string;
  eTag: any;
  isDeleted: boolean;
  createdAt: Date;
  modifiedBy: String;
  modifiedAt: Date;
}
