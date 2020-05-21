// src/contexts/index.tsx
import React from 'react'
import TodoStore from './todo/todo.store'

export const storesContext = React.createContext({
  todoStore: new TodoStore(),
})
