export class RawQuery {
  constructor(
    from,
    size,
    fromDate,
    toDate,
    techNames,
    location,
    show,
    classification,
    heardOnAir,
    actionTaken,
    duration,
    onAir,
    funder,
    serviceTicket,
    eTag,
    entry,
  ) {
    this.from = from;
    this.size = size;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.techNames = techNames;
    this.location = location;
    this.show = show;
    this.classification = classification;
    this.heardOnAir = heardOnAir;
    this.actionTaken = actionTaken;
    this.duration = duration;
    this.onAir = onAir;
    this.funder = funder;
    this.serviceTicket = serviceTicket;
    this.eTag = eTag;
    this.entry = entry;
  }
  from: number;
  size: number;
  fromDate: string;
  toDate: string;
  techNames: string[];
  location: string[];
  show: string[];
  classification: string[];
  heardOnAir: string[];
  actionTaken: string[];
  duration: any;
  onAir: boolean;
  funder: boolean;
  serviceTicket: boolean;
  eTag: string;
  entry: string;

  public static getDefaults() {
    return new RawQuery(
      0,
      5,
      null,
      null,
      [],
      [],
      [],
      [],
      [],
      [],
      { gte: undefined, lte: undefined },
      null,
      null,
      null,
      null,
      null,
    );
  }
}
