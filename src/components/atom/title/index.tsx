"use client";
import React, { HTMLAttributes, useMemo } from "react";
type TextProp = HTMLAttributes<HTMLHeadingElement>;
type Props = TextProp & {
  variant?: "xs" | "sm" | "md" | "lg" | "xl" | "1xl" | "2xl" | "3xl" | "4xl";
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Title = ({ variant, className, type, ...props }: Props) => {
  const textSize = useMemo(() => {
    switch (variant) {
      case "xs":
        return "text-[1.8rem]";
      case "sm":
        return "text-[2.4rem]";
      case "md":
        return "text-[2.8rem]";
      case "lg":
        return "text-[3.2rem]";
      case "xl":
        return "text-[3.6rem]";
      case "1xl":
        return "text-[4rem]";
      case "2xl":
        return "text-[4.4rem]";
      case "3xl":
        return "text-[4.8rem]";
      case "4xl":
        return "text-[5rem]";
      default:
        return "text-[1.6rem]";
    }
  }, [variant]);
  const HeaderType = useMemo(() => {
    switch (type) {
      case "h1":
        return <h1 className={`${textSize} ${className} `} {...props} />;
      case "h2":
        return <h2 className={`${textSize} ${className} `} {...props} />;
      case "h3":
        return <h3 className={`${textSize} ${className} `} {...props} />;
      case "h4":
        return <h4 className={`${textSize} ${className} `} {...props} />;
      case "h5":
        return <h5 className={`${textSize} ${className} `} {...props} />;
      case "h6":
        return <h6 className={`${textSize} ${className} `} {...props} />;
      default:
        return <h1 className={`${textSize} ${className} `} {...props} />;
    }
  }, [textSize, type, props, className]);
  return HeaderType;
};

export default Title;
