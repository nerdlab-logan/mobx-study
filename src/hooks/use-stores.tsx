// src/hooks/use-stores.tsx
import React from 'react'
import { storesContext } from '../store/context'

export const useStores = () => React.useContext(storesContext)
