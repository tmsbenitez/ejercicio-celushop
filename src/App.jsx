import { useAppContext } from './context/AppContext'
import ProductTable from './components/ProductTable'
import MovementForm from './components/MovementForm'
import MovementTable from './components/MovementTable'

export default function App() {
  const { products, setProducts, movements, setMovements, movementType } =
    useAppContext()

  return (
    <main className='flex flex-col gap-6 min-h-screen p-6 sm:p-12'>
      <div className='sm:fixed w-full top-12 bottom-12 z-10 bg-white shadow border rounded-md sm:w-72'>
        <MovementForm
          products={products}
          setProducts={setProducts}
          setMovements={setMovements}
          movements={movements}
          movementType={movementType}
        />
      </div>
      <div className='flex flex-col gap-6 w-full sm:pl-80'>
        <ProductTable products={products} />
        <MovementTable movements={movements} products={products} />
      </div>
    </main>
  )
}
