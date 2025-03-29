import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from './pet';
import { PETS } from './mock-pets';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor( private http: HttpClient) { }

   private petsUrl = 'api/pets';

    httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };

  //constructor(private messageService: MessageService) { }

  getPets(): Observable<Pet[]> {

      const pets = of(PETS);
      //this.messageService.add('PetService: fetched pets');
      return pets;
  }

   /** POST: add a new hero to the server */
   addPet(pet: Pet): Observable<Pet> {
     return this.http.post<Pet>(this.petsUrl, pet, this.httpOptions)/*.pipe(
       tap((newPet: Pet) => this.log(`added pet w/ id=${newPet.id}`)),
       catchError(this.handleError<Pet>('addPet'))
     )*/;
   }

   savePets(pets: Pet[]): void {
     localStorage.setItem('pets', JSON.stringify(pets));
   }

 /*private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

       // TODO: send the error to remote logging infrastructure
       console.error(error); // log to console instead

       // TODO: better job of transforming error for user consumption
       this.log(`${operation} failed: ${error.message}`);

       // Let the app keep running by returning an empty result.
       return of(result as T);
     };
   }*/
}
