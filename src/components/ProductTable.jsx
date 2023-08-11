export default function ProductTable({ products }) {
  return (
    <div className='w-full shadow p-4 border rounded-md text-sm'>
      <p className='text-3xl font-bold mb-6'>Productos</p>
      <div className="overflow-auto">
        <table className='w-full'>
          <thead>
            <tr className='text-left'>
              <th className='px-2 whitespace-nowrap'>ID</th>
              <th className='px-2 whitespace-nowrap'>Nombre del Producto</th>
              <th className='px-2 whitespace-nowrap'>Descripción</th>
              <th className='px-2 whitespace-nowrap'>Cantidad de Stock</th>
              <th className='px-2 whitespace-nowrap'>Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr
                key={product.id}
                className='border rounded-md border-zinc-300 text-left even:bg-zinc-100'
              >
                {Object.values(product).map((value, index) => (
                  <td key={index} className='p-2 whitespace-nowrap'>
                    {index === 4
                      ? Number(value).toLocaleString('es-AR', {
                          style: 'currency',
                          currency: 'ARS'
                        })
                      : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
