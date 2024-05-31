import React, { HTMLAttributes } from 'react'

type BoxProp = HTMLAttributes<HTMLDivElement>
type Props = BoxProp & {}

const Center = ({className, ...props}: Props) => {
  return (
    <div className={`${className} items-center justify-center flex`} {...props}/>
  )
}

export default Center