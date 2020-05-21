import TodoItem from './todo-item.model'

class TodoRepository {
  fetchTodoItemList(): Promise<TodoItem[]> {
    return new Promise<TodoItem[]>(resolve => {
      resolve([
        new TodoItem({text: '테스트 1', isDone: false}),
        new TodoItem({text: '테스트 2', isDone: false}),
        new TodoItem({text: '테스트 3', isDone: false}),
      ])
    })
  }
}

export default new TodoRepository()
