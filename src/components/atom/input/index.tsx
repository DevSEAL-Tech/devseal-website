import React, { HTMLAttributes } from "react";
import Column from "../column";
type InputType = HTMLAttributes<HTMLInputElement>;
type Props = InputType & {
  label?: string;
  labelClass?: string;
  containerClassName?: string;
};

const CustomInput = ({
  label = "",
  className = "",
  labelClass = "",
  containerClassName,
  ...props
}: Props) => {
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
        className={` ${containerClassName} border space-y-[.5rem] border-seal-secondary-100 rounded-[.5rem] min-h-[5rem] w-full bg-gray-50`}
      >
        <input
          className={`${className} w-full h-full border-none outline-none bg-transparent`}
          {...props}
        />
      </div>
    </Column>
  );
};

export default CustomInput;
