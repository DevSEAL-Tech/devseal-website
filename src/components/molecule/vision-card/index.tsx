import { BodyText, Card, Title } from "@/components/atom";
import React, { HTMLAttributes } from "react";
import { Outfit } from "next/font/google";
import { VisionAfrica } from "@/public/index";
const outfit = Outfit({ subsets: ["latin"], weight: ["300"] });

type CardProp = HTMLAttributes<HTMLDivElement>;
type Props = CardProp & {
  title?: string;
  body?: string;
  image?: React.ReactNode;
};

const VisionCard = ({
  className,
  title = "",
  body = "",
  image,
  ...props
}: Props) => {
  return (
    <Card
      variant="secondary"
      rounded="lg"
      className={`px-[4.3rem] py-[3.4rem] ${className}`}
      {...props}
    >
      <article className="text-seal-primary-100 max-w-[42rem]">
        <Title variant="xl" className="font-[500] leading-[4.6rem]">
          {title}
        </Title>
        <BodyText variant="lg" className={`${outfit.className} leading-[3rem]`}>
          {body}
        </BodyText>
      </article>
      <figure className="mt-[5.6rem]">
        {image ? image : <VisionAfrica />}
      </figure>
    </Card>
  );
};

export default VisionCard;
