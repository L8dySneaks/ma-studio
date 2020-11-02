import { Component } from '@angular/core';
import { Todo } from '@ma-studio/data';

@Component({
  selector: 'ma-studio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  todos: Todo[] = [{ title: 'Todo 1'}, { title: 'Todo 2'}];
  title = 'ma-studio';
}
