import { Avatar, BodyText, Card, Column } from "@/components/atom";
import React from "react";
import { ImageProps } from "next/image";

type NewImageProp = Omit<ImageProps, "alt" |"placeholder">
type Props = NewImageProp & {
  name?: string;
  position?: string;
};

const ProfileCard = ({ name, position, src, ...props }: Props) => {
  return (
    <Card rounded="lg" variant="secondary" className="p-[1.259rem]" {...props}>
      <Column className="items-center xs:items-start gap-[1.7rem]">
        {src && (
          <Avatar
            alt={name ? name : ""}
            src={src}
            placeholder="blur"
            size="4xl"
          />
        )}
        <article className="text-center xs:text-left text-seal-primary-100">
          <BodyText variant="xs" className="font-600">
            {name}
          </BodyText>
          <BodyText variant="xs" className="font-light">{position}</BodyText>
        </article>
      </Column>
    </Card>
  );
};

export default ProfileCard;
