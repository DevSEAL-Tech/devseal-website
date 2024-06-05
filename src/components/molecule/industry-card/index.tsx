import { BodyText, Card, Title } from "@/components/atom";
import React from "react";

type Props = {
  icon?: React.ReactNode;
  title?: string;
  content?: string;
};

const IndustryCard = ({
  icon = "",
  title = "",
  content = "",
  ...props
}: Props) => {
  return (
    <Card variant="secondary" className="px-[3.3rem] pt-[8.8rem] pb-[3.3rem]" rounded="lg">
      {icon}
      <article className="text-seal-primary-100 mt-[2.1rem] space-y-[1.5rem]"> 
        <Title variant="md" type="h6" className="font-[500] leading-[3.5rem]">{title}</Title>
        <BodyText variant="lg" className="leading-[2.6rem]">{content}</BodyText>
      </article>
    </Card>
  );
};

export default IndustryCard;
