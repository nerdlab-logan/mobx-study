import {observable, action, computed} from 'mobx'

import TodoRepository from './todo.repository'
import TodoItem, { TodoItemInitData } from './todo-item.model'

class TodoStore {
  @observable todoItemList: TodoItem[] = []

  @action
  async fetchTodo() {
    this.todoItemList = await TodoRepository.fetchTodoItemList()
  }

  @action
  addTodo(newTodoItem: TodoItemInitData) {
    this.todoItemList.push(new TodoItem(newTodoItem))
  }

  @computed
  get doneTodoList() {
    return this.todoItemList.filter(todo => todo.isDone)
  }
}

export default TodoStore
