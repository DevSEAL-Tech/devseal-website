import { BodyText, Card, Title } from "@/components/atom";
import { DevSealLogoFullOpacity } from "@/public/index";
import Image, { ImageProps } from "next/image";
import React, { HTMLAttributes } from "react";
type CardProp = HTMLAttributes<HTMLDivElement>;
type NewImageProp = Omit<ImageProps, "alt" | "placeholder">
type Props = CardProp & NewImageProp & {
  image?: string;
  about?: string;
  position?: string;
  name?: string;
};

const DetailedProfileCard = ({
  src,
  about,
  name,
  position,
  className,
  ...props
}: Props) => {
  return (
    <div className={`${className}`}>
    <Card
      {...props}
      variant="secondary"
      rounded="lg"
      className={`shadow-lg relative max-w-[40.3rem] max-[53.4rem] w-full h-full  overflow-hidden  z-10 after:absolute after:top-0 after:left-0 after:w-full afte:h-full after:z-20 after:from-black after:to-transparent`}
    >
      <article className="absolute bottom-0 left-0 w-full px-[3rem] pb-[8.3rem]">
        <span>
          <Title variant="xs" type="h3" className="font-[600]">
            {name}
          </Title>
          <BodyText>{position}</BodyText>
        </span>
      </article>
      <figure className="w-full h-full items-center justify-center flex">
        {src && (
          <Image
            src={src}
            alt={name ? name : ""}
            placeholder="blur"
            quality={100}
            className="w-full object-cover"
          />
        )}
      </figure>
      <figure className="mt-[5.6rem]  items-end justify-end absolute bottom-0 hidden sm:flex right-0">
        <DevSealLogoFullOpacity />
      </figure>
    </Card>
    </div>

  );
};

export default DetailedProfileCard;
