import { observable, action } from 'mobx'

export interface TodoItemInitData {
  text: string
  isDone: boolean
}

class TodoItemModel {
  @observable text: string = ''
  @observable isDone: boolean = false

  constructor(initData: TodoItemInitData) {
    this.text = initData.text
    this.isDone = initData.isDone
  }

  @action
  toggleDone() {
    this.isDone = !this.isDone
  }
}

export default TodoItemModel
