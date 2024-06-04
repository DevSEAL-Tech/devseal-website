import { Button, Card, Column, Title } from "@/components/atom";
import { SealAgentLarge } from "@/public/index";
import React from "react";

type Props = {
  title?: string;
  buttonText?: string;
  onClickButton?: () => void;
  href?: string | {};
};

const BecomeASealCard = ({
  onClickButton,
  title = "",
  buttonText = "",
  href = "*",
  ...props
}: Props) => {
  return (
    <Card
      variant="primary"
      className="px-[2.7rem] py-[3.3rem] w-full"
      rounded="lg"
    >
      <Column className="justify-between items-start h-full">
        <span>
          <SealAgentLarge />
          <Title className="mt-[1rem] text-white max-w-[30rem]" variant="sm">
            {title}
          </Title>
        </span>
        <Button
          variant="secondary"
          href={href}
          className="mt-[2.5rem]"
          onClick={onClickButton}
        >
          {buttonText}
        </Button>
      </Column>
    </Card>
  );
};

export default BecomeASealCard;
