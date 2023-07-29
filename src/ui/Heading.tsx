import React from 'react'

interface Props {
  title: string
  subtitle: string
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <>
      <h2 className='text-3xl text-center pb-3'>{title}</h2>
      <h3 className='text-xl text-center pb-10'>{subtitle}</h3>
    </>
  )
}
