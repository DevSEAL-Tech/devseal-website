"use client"
import React, { HTMLAttributes } from "react";
import Column from "../column";
type InputType = HTMLAttributes<HTMLInputElement>;
type Props = InputType & {
  label?: string;
  labelClass?: string;
  containerClassName?: string;
  error?: any;
  placeholder?: string;
  disabled?: boolean;
};

const CustomInput = React.forwardRef<HTMLInputElement, Props>(
  (textInputProps: Props, ref) => {
    const {
      error,
      label = "",
      className = "",
      labelClass = "",
      containerClassName = "",
      placeholder = "",
      disabled = false,
      ...props
    } = textInputProps;

    return (
      <Column className="gap-1">
        {label && (
          <label
            htmlFor={label}
            className={`leading-[2.854rem] font-medium ${labelClass}`}
          >
            {label}
          </label>
        )}
        <div
          className={` ${containerClassName} py-[1.2rem] px-[1.6rem] border space-y-[.5rem] border-seal-secondary-100 rounded-[.5rem] min-h-[5rem] w-full`}
        >
          <input
            className={`${className} w-full h-full border-none outline-none bg-transparent`}
            placeholder={placeholder}
            ref={ref}
            disabled={disabled}
            {...props}
          />
        </div>
          {error && (
            <small className="text-red-600 text-[12px]">{error}</small>
          ) }
      </Column>
    );
  }
);

export default CustomInput;
