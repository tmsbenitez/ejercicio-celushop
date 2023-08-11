import { createContext, useContext, useState } from 'react'
import { initialProducts } from '../helpers/constants'

const AppContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export default function AppProvider({ children }) {
  const [products, setProducts] = useState(initialProducts)
  const [movements, setMovements] = useState([])

  const movementType = {
    sell: (id, value) => {
      setProducts(prevState => {
        return prevState.map(item => {
          if (item.id === id) {
            return { ...item, stock: item.stock - value }
          }
          return item
        })
      })
    },
    addStock: (id, value) => {
      setProducts(prevState => {
        return prevState.map(item => {
          if (item.id === id) {
            return { ...item, stock: item.stock + value }
          }
          return item
        })
      })
    },
    adjust: (id, value) => {
      setProducts(prevState => {
        return prevState.map(item => {
          if (item.id === id) {
            return { ...item, stock: item.stock + value }
          }
          return item
        })
      })
    },
    addMovement: movement => {
      setMovements(prevMovements => [...prevMovements, movement])
    }
  }

  const contextValue = {
    products,
    setProducts,
    movements,
    setMovements,
    movementType
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
