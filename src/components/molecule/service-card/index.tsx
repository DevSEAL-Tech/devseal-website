import { BodyText, Card, Column, Row, Title } from "@/components/atom";

type Props = {
  body?: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  className?:string
};

const ServiceCard = ({ body, footer, title = "", className="", ...props }: Props) => {
  return (
    <Card
      variant="secondary"
      className={`${className}`}
      rounded="lg"
    >
      <Column className="justify-between h-full">
        <article className="text-seal-primary-100">
          <Title variant="sm" className="font-[700] leading-[3.3rem] mb-[2rem]">
            {title}
          </Title>
          <span className="leading-[2.3rem] mb-[2rem]">{body && body}</span>
        </article>
        <div className="mt-auto  w-full">{footer && footer}</div>
      </Column>
    </Card>
  );
};

export default ServiceCard;
