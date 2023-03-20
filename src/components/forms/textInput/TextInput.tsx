import React from "react"

interface IForwardRef {
  type: string
  placeholder: string
}

export const TextInput = React.forwardRef(({
  placeholder="",
  type="",
  ...rest
}: IForwardRef, ref: any) => 
  <input 
    type={type}
    placeholder={placeholder}
    {...rest}
    ref={ref}
  />
)