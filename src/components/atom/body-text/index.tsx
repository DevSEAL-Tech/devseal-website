import React, { HTMLAttributes, useMemo } from "react";
type TextProps = HTMLAttributes<HTMLParagraphElement>;
type Props = TextProps & {
  variant?: "xs" | "sm" | "md" | "lg" | "xl";
};

const BodyText = ({ className, variant, ...props }: Props) => {
  const textSize = useMemo(() => {
    switch (variant) {
      case "xs":
        return "text-[1.4rem]";
      case "sm":
        return "text-[1.6rem]";
      case "md":
        return "text-[1.8rem]";
      case "lg":
        return "text-[2rem]";
      case "xl":
        return "text-[2.2rem]";
      default:
        return "text-[1.6rem]";
    }
  }, [variant]);
  return (
    <p
      className={`${className} font-normal ${textSize} leading-[2.1rem]`}
      {...props}
    />
  );
};

export default BodyText;
