import { Component, OnInit  } from '@angular/core';

import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pets',
  standalone: false,
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent implements OnInit {

  pets: Pet[] = [];

  //constructor(private heroService: HeroService, private messageService: MessageService) { }
  constructor(private petService: PetService) { }

  ngOnInit(): void {
      this.getPets();
  }

  getPets(): void {
      this.petService.getPets()
          .subscribe(pets => this.pets = pets);
  }

add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pets.push({name} as Pet);
  }
}
