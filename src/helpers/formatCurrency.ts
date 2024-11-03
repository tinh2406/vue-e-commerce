export const formatCurrency = (price: number | string | undefined) => {
  if (price)
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
      parseFloat(price.toString())
    )
  else return ''
}
