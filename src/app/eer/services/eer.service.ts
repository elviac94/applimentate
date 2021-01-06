import {Injectable} from '@angular/core';
import { GenreEnum } from '../../shared/enums/genre.enum';
import { Genre } from '../../shared/types/genre.type';


@Injectable( {
  providedIn: 'root'
} )
export class EerService {

  calcEer(height: number, weight: number, age: number, genre: Genre): number {
    let eerOperation;
    if (genre === GenreEnum.WOMAN) {
      eerOperation = (655+(9.6*weight)+(1.7*height)-(4.7*age));
    } else {
       eerOperation = (66+(13.7*weight)+(5*height)-(6.8*age));
    }
    return eerOperation;
  }
}
