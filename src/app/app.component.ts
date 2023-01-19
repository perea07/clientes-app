import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector donde se renderizan los cambios
  templateUrl: './app.component.html',  // vista html
  styleUrls: ['./app.component.css'] // estilos css
})
export class AppComponent {
  title = 'Welcome to Angular';
  course : string = 'Course the Spring boot 5 with Angular';
  teacher : string = 'Andres Guzman'; // Declaración de una variable string
}
