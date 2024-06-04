import { Column, MarqueeScroll, Title } from "@/components/atom";
import { Brand_Images } from "@/constants";
import React from "react";

type Props = {
  title?: string;
  images?: any;
};

const BrandThatTrustUs = ({ title, images = [] }: Props) => {
  return (
    <Column className="gap-[4.3rem]">
      <Title
        variant="md"
        className="text-seal-primary-100 font-semibold leading-[3.6rem]"
      >
        {title}
      </Title>
      <figure>
        <MarqueeScroll>
          {images.map((Items: any, index: number) => (
            <Items key={index} className="mx-[4.1rem]" />
          ))}
        </MarqueeScroll>
      </figure>
    </Column>
  );
};

export default BrandThatTrustUs;
