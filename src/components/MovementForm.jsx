import { useState } from 'react'
import processForm from '../helpers/processForm.js'
import validateForm from '../helpers/validateForm.js'

const initialMovement = {
  id: 1,
  date: new Date().toLocaleDateString('es-AR'),
  name: '',
  type: '',
  quantity: 0,
  newStock: 0
}

export default function MovementForm({ products, setProducts, movementType }) {
  const [movement, setMovement] = useState(initialMovement)
  const [errors, setErrors] = useState({})
  const [nextId, setNextId] = useState(11)

  const handleInputChange = event => {
    const { name, value } = event.target
    setMovement(prevMovement => ({ ...prevMovement, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    const newErrors = validateForm(movement, products)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const product = products.find(product => product.name === movement.name)

    processForm(
      movement,
      product,
      nextId,
      movementType,
      setProducts,
      setNextId,
      setErrors,
      setMovement,
      initialMovement
    )
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 w-full'>
      <h2 className='font-bold text-xl'>Nuevo Movimiento</h2>
      <div className='flex flex-col gap-6'>
        <label className='flex flex-col gap-4'>
          <span className='text-gray-700'>Nombre:</span>
          <select
            name='name'
            value={movement.name}
            onChange={handleInputChange}
            className='block w-full px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500'
          >
            <option value=''>Seleccione un producto</option>
            {products.map(product => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </label>
        <label className='flex flex-col gap-4'>
          <span className='text-gray-700'>Tipo de Movimiento:</span>
          <select
            name='type'
            value={movement.type}
            onChange={handleInputChange}
            className='block w-full px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500'
          >
            <option value=''>Seleccione un tipo de movimiento</option>
            <option value='sell'>Venta</option>
            <option value='addStock'>Ingreso Stock</option>
            <option value='adjust'>Ajuste</option>
          </select>
        </label>
        <label className='flex flex-col gap-4'>
          <span className='text-gray-700'>Cantidad:</span>
          <input
            type='number'
            name='quantity'
            value={movement.quantity}
            onChange={handleInputChange}
            className='block w-full px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500'
          />
          {errors.quantity && <p className='text-red-500'>{errors.quantity}</p>}
        </label>
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
      >
        Agregar movimiento
      </button>
    </form>
  )
}
