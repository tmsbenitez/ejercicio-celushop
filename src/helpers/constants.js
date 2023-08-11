export const initialProducts = [
  {
    id: 1,
    name: 'Apple iPhone 13',
    description: 'Smartphone',
    stock: 90,
    price: 699
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22',
    description: 'Smartphone',
    stock: 20,
    price: 799
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    description: 'Smartphone',
    stock: 25,
    price: 599
  },
  {
    id: 4,
    name: 'Apple iPad Pro',
    description: 'Tablet',
    stock: 25,
    price: 999
  },
  {
    id: 5,
    name: 'Amazon Echo Dot',
    description: 'Altavoz',
    stock: 60,
    price: 49
  }
]

export const initialMovements = [
  {
    id: 1,
    date: '1/7/2023',
    name: 'Apple iPhone 13',
    type: 'Venta',
    quantity: 10,
    newStock: 70
  },
  {
    id: 2,
    date: '2/7/2023',
    name: 'Samsung Galaxy S22',
    type: 'Venta',
    quantity: 5,
    newStock: 25
  },
  {
    id: 3,
    date: '5/7/2023',
    name: 'Google Pixel 6',
    type: 'Venta',
    quantity: 5,
    newStock: 15
  },
  {
    id: 4,
    date: '7/7/2023',
    name: 'Apple iPhone 13',
    type: 'Ingreso Stock',
    quantity: 20,
    newStock: 90
  },
  {
    id: 5,
    date: '10/7/2023',
    name: 'Apple iPad Pro',
    type: 'Venta',
    quantity: 5,
    newStock: 30
  },
  {
    id: 6,
    date: '12/7/2023',
    name: 'Samsung Galaxy S22',
    type: 'Corrección',
    quantity: -5,
    newStock: 20
  },
  {
    id: 7,
    date: '15/7/2023',
    name: 'Amazon Echo Dot',
    type: 'Venta',
    quantity: 10,
    newStock: 50
  },
  {
    id: 8,
    date: '18/7/2023',
    name: 'Google Pixel 6',
    type: 'Ingreso Stock',
    quantity: 10,
    newStock: 25
  },
  {
    id: 9,
    date: '20/7/2023',
    name: 'Apple iPad Pro',
    type: 'Modificación',
    quantity: -5,
    newStock: 25
  },
  {
    id: 10,
    date: '25/7/2023',
    name: 'Amazon Echo Dot',
    type: 'Ingreso Stock',
    quantity: 10,
    newStock: 60
  }
]
