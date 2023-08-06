import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 18;
  job: string = 'Programador';
  hobbies = ['academia', 'tocar instrumentos', 'escutar música', 'jogar', 'estudar'];
  pc = {
    brand: 'Lenovo',
    model: 'T480'
  }

}
