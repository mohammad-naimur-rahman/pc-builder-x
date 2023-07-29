import categories from '@/data/category.json'

export const formatCategory = (param: string): string => {
  const category = categories.find(item => item.value === param)
  return category?.label || ''
}

export const formatCurrency = (param: number): string => {
  const formatValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BDT',
  }).format(param)
  const formattedValueInEnglish = formatValue.replace('BDT', '৳')
  return formattedValueInEnglish
}
