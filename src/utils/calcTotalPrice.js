export const calcTotalPrice = (items) => {
  return items.reduce(
    (acc, item) => (item.newPrice ? (acc += +item.newPrice * item.quantity) : (acc += +item.price * item.quantity)),
    0
  )
}

export const calcTotalDiscount = (items) => {
  return items.reduce((acc, item) => (item.newPrice ? (acc += (+item.newPrice - +item.price) * item.quantity) : 0), 0)
}
