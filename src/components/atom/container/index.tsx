import React, { HTMLAttributes } from 'react'
type DivProp = HTMLAttributes<HTMLDivElement>
type Props = DivProp & {}

const Container = ({children,className, ...props}: Props) => {
  return (
    <section {...props} className={`${className} max-w-[120rem] mx-auto px-6`}>{children}</section>
  )
}

export default Container