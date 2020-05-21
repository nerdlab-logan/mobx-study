import React, { useEffect } from 'react';
import { useObserver } from "mobx-react-lite";
import { useStores } from '../hooks/use-stores'

const TodoView: React.FC = () => {
  const { todoStore } = useStores()

  useEffect(() => {
    console.log('useEffect mount')
    todoStore.fetchTodo()
    return () => {
      console.log('useEffect un mount')
    }
  }, [])

  return useObserver(() => {
    return <div>
      <div>
        <input type="text" />
      </div>
      <ul>
      {todoStore.todoItemList.map((todo, i) => {
        return <li key={i}>{todo.text}</li>
      })}
      </ul>
    </div>
  })
};

export default TodoView;
