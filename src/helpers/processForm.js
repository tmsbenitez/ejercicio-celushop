function processForm(
  movement,
  product,
  nextId,
  movementType,
  setProducts,
  setNextId,
  setErrors,
  setMovement,
  initialMovement
) {
  let updatedStock = product.stock

  if (movement.type === 'sell') {
    updatedStock -= parseInt(movement.quantity)
  } else if (movement.type === 'addStock' || movement.type === 'adjust') {
    updatedStock += parseInt(movement.quantity)
  } else {
    console.log('Invalid movement type')
    return
  }
  
  setNextId(prevId => prevId + 1)
  
  const newMovement = {
    id: nextId,
    date: new Date().toLocaleDateString('es-AR'),
    name: movement.name,
    type: movement.type,
    quantity: parseInt(movement.quantity),
    newStock: updatedStock
  }


  movementType.addMovement(newMovement)

  setProducts(prevProducts => {
    return prevProducts.map(item => {
      if (item.id === product.id) {
        return { ...item, stock: updatedStock }
      }
      return item
    })
  })

  setMovement(initialMovement)
  setErrors({})
}

export default processForm
