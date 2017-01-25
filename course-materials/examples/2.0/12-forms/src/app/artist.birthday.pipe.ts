import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'artistBirthdate' })
export class ArtistBirthdayPipe implements PipeTransform {
  transform( birthdate: string ) {
    return ( birthdate ) ? birthdate : 'N/A';
  }
}
