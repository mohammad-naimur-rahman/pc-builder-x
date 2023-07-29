import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  sizes: string
  className: string
}

const Img = ({ src, alt, width = 500, height = 500, sizes = '40vw', className, ...rest }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      className={`w-full h-auto block ${className}`}
      {...rest}
    />
  )
}

export default Img
