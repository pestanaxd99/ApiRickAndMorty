import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Character } from '../interfaces/Character';
import { Location } from '../interfaces/Location';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query='', page=1){
    return this.http.get<Character[]>(`${environment.API_URL}/?name=${query}&page=${page}`);
  }

  getDetails(id: number){
    return this.http.get<Character>(`${environment.API_URL}/${id}`);
  }

  getLocation(id: number){
    return this.http.get<Location>(`${environment.API_URL1}/${id}`);
  }

}
