import { Center, Column, Container, Row, Title } from "@/components/atom";
import { Tied } from "@/public/index";

type Props = {};

const TiedExplained = (props: Props) => {
  return (
    <Container>
      <Title
        type="h2"
        className="font-[600] leading-[3.8rem] max-w-[35rem] text-seal-primary-100"
        variant="lg"
      >
        ...our SEALs are T.I.E.D to the mission
      </Title>
      <Center className="gap-[2.5rem] flex-col">
        <Row className="gap-[2.5rem] items-center">
          <Tied  />
        </Row>
      </Center>
    </Container>
  );
};

export default TiedExplained;
