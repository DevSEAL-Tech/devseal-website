import React, { HTMLAttributes } from "react";
import Column from "../column";
type TextAreaType = HTMLAttributes<HTMLTextAreaElement>;
type Props = TextAreaType & {
  label?: string;
  labelClass?: string;
  containerClassName?: string;
};

const CustomTextArea = ({
  label = "",
  labelClass = "",
  containerClassName = "",
  className = "",
  ...props
}: Props) => {
  return (
    <Column className="gap-[1rem]">
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
        <textarea
          className={`${className} w-full h-full border-none outline-none bg-transparent resize-none`}
          rows={5}
          cols={5}
          {...props}
        />
      </div>
    </Column>
  );
};

export default CustomTextArea;
