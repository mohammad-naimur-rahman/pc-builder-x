import { categories } from '@/data/categories'

export const formatCategory = (param: string): string => {
  const category = categories?.find(item => item.value === param)
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

export const formatObjKey = (param: string): string => {
  const capitalized = param.charAt(0).toUpperCase() + param.slice(1)
  return capitalized
}
