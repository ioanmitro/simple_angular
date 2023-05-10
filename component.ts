import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello, {{name}}!</h1>'
})
export class HelloComponent {
  name = 'John';
}

// This code defines an Angular component that displays a greeting with the 'name' property