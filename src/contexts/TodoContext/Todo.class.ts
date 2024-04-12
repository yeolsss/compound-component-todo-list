import { ITodo } from "@/contexts/TodoContext/index";

export class Todo implements ITodo {
  id: number;
  todo: string;
  done: boolean;

  constructor(id: number, todo: string, done: boolean) {
    this.id = id;
    this.todo = todo;
    this.done = done;
  }
}
