import { Todo } from '@ma-studio/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  todos: Todo[] = [{title: 'Todo 1'}, { title: 'Todo 2'}];

  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }
}
