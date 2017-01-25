export class Artist {
  artistName: string;
  birthdate: Date;

  constructor( artistName = 'Empty Artist', birthdate?: Date ) {
    this.artistName = artistName;
    this.birthdate = birthdate;
  }
}
