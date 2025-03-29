import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
      const heroes = [
        { id: 12, name: 'Dr. Nice' , pet: { name: 'Cao'} },
        { id: 13, name: 'Bombasto' , pet: { name: 'Boi'} },
        { id: 14, name: 'Celeritas' , pet: { name: 'Cavalo'} },
        { id: 15, name: 'Magneta' , pet: { name: 'Mantis'} },
        { id: 16, name: 'RubberMan' , pet: { name: 'Ruidor'} },
        { id: 17, name: 'Dynama' , pet: { name: 'Docil'} },
        { id: 18, name: 'Dr. IQ' , pet: { name: 'Dinossauro'} },
        { id: 19, name: 'Magma' , pet: { name: 'Manta'} },
        { id: 20, name: 'Tornado' , pet: { name: 'Tartaruga'} }
      ];


      const pets = [
        {name: 'Cao' },
        {name: 'Boi' },
        {name: 'Cavalo' },
        {name: 'Mantis' },
        {name: 'Ruidor' },
        {name: 'Docil' },
        {name: 'Dinossauro' },
        {name: 'Manta' },
        {name: 'Tartaruga' }
      ];


      return {heroes,pets};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: Hero[]): number {
      return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
