import { BodyText, Card, Title } from "@/components/atom";
import React, { HTMLAttributes } from "react";
import { Outfit } from "next/font/google";
import { DevSealLogoFullOpacity, VisionAfrica } from "@/public/index";
const outfit = Outfit({ subsets: ["latin"], weight: ["300"] });

type CardProp = HTMLAttributes<HTMLDivElement>
type Props = CardProp &{};

const MissionCard = ({className, ...props}: Props) => {
  return (
    <Card variant="primary" rounded="lg" className={`px-[4.3rem] py-[3.4rem] relative ${className}` } {...props}>
      <article className="text-white max-w-[42rem]">
        <Title variant="xl" className="font-[500] leading-[4.6rem]">
          Our Mission
        </Title>
        <BodyText variant="lg" className={`${outfit.className} leading-[3rem]`}>
        Delivering information technology excellence with military precision
        </BodyText>
      </article>
      <figure className="mt-[5.6rem]  items-end justify-end absolute bottom-0 hidden sm:flex right-0">
        <DevSealLogoFullOpacity />
      </figure>
    </Card>
  );
};

export default MissionCard;
