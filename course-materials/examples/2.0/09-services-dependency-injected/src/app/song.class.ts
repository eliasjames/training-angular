export class Song {
  songName: string;
  songList: string[];

  constructor( songName = 'Empty Song' ) {
    this.songName = songName;
    this.songList = ['Always On My Mind', 'She Rides', 'I Only Have Eyes For You'];
  }
}
