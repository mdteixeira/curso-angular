import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Matheus';

  userData = { 
    email: 'matheusdiegoteixeira@gmail.com',
    role: 'Admin',
    position: 'Leader',
  }

  title = 'curso-angular';
}
