import { BodyText, Circle, Column, Container, Title } from "@/components/atom";
import { SERVICE_PAGE_DATA } from "@/constants";
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });
type Props = {};

const Developer = (props: Props) => {
  const developerEl = Object.values(SERVICE_PAGE_DATA.developers).map(
    (items, index) => (
      <Circle variant={'secondary'} key={index}>
        <Column className="items-center justify-center gap-2">
          <article className={`${outfit.className} text-seal-primary-100 flex items-center flex-col justify-center`}>
            <Title variant="xl" type="h4" className="font-[700]">
              {items.amount}+
            </Title>
            <BodyText variant="md">{items.title}</BodyText>
          </article>
        </Column>
      </Circle>
    )
  );
  return (
    <Container className="mb-[9.8rem]">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-[3.9rem]">
        {developerEl}
      </div>
    </Container>
  );
};

export default Developer;
