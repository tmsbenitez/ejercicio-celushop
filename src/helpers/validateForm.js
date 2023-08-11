function validateForm(movement, products) {
  const errors = {}

  const product = products.find(product => product.name === movement.name)

  if (!product) {
    errors.name = 'Producto no encontrado'
  }

  if (movement.type === 'sell' && parseInt(movement.quantity) > product.stock) {
    errors.quantity =
      'La cantidad de venta no puede ser mayor al stock disponible'
  }

  if (
    movement.type === 'adjust' &&
    product.stock + parseInt(movement.quantity) < 0
  ) {
    errors.quantity = 'El ajuste no puede dejar el stock en negativo'
  }

  return errors
}

export default validateForm
