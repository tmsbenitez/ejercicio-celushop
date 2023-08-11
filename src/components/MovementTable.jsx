import { initialMovements } from '../helpers/constants'

export default function MovementTable({ movements }) {
  return (
    <div className='w-full shadow p-4 border rounded-md text-sm'>
      <p className='text-3xl font-bold mb-6'>Movimientos</p>
      <div className='overflow-auto'>
        <table className='w-full'>
          <thead>
            <tr className='text-left'>
              <th className='px-2 whitespace-nowrap'>ID</th>
              <th className='px-2 whitespace-nowrap'>Fecha</th>
              <th className='px-2 whitespace-nowrap'>Nombre del Producto</th>
              <th className='px-2 whitespace-nowrap'>Tipo de Movimiento</th>
              <th className='px-2 whitespace-nowrap'>Cantidad</th>
              <th className='px-2 whitespace-nowrap'>Nuevo Total en Stock</th>
            </tr>
          </thead>
          <tbody className='overflow-y-auto max-h-12'>
            {initialMovements.map(movement => (
              <tr
                key={movement.id}
                className='border rounded-md border-zinc-300 text-left even:bg-zinc-100'
              >
                <td className='p-2 whitespace-nowrap'>{movement.id}</td>
                <td className='p-2 whitespace-nowrap'>{movement.date}</td>
                <td className='p-2 whitespace-nowrap'>{movement.name}</td>
                <td className='p-2 whitespace-nowrap'>{movement.type}</td>
                <td className='p-2 whitespace-nowrap'>{movement.quantity}</td>
                <td className='p-2 whitespace-nowrap'>{movement.newStock}</td>
              </tr>
            ))}
            {movements.map(movement => (
              <tr
                key={movement.id}
                className='border rounded-md border-zinc-300 text-left even:bg-zinc-100'
              >
                <td className='p-2 whitespace-nowrap'>{movement.id}</td>
                <td className='p-2 whitespace-nowrap'>{movement.date}</td>
                <td className='p-2 whitespace-nowrap'>{movement.name}</td>
                <td className='p-2 whitespace-nowrap'>
                  {movement.type === 'sell'
                    ? 'Venta'
                    : movement.type === 'addStock'
                    ? 'Ingreso Stock'
                    : 'Ajuste'}
                </td>
                <td className='p-2 whitespace-nowrap'>{movement.quantity}</td>
                <td className='p-2 whitespace-nowrap'>{movement.newStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
