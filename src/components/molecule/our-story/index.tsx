import { BodyText, Title } from "@/components/atom";
import { OUR_STORY } from "@/constants";

type Props = {};

const Story = (props: Props) => {
  return (
    <article className="space-y-[2.3rem]">
      <Title type="h3" variant="2xl" className="leading-[5.7rem] font-semibold text-seal-primary-100">
        {OUR_STORY.title}
      </Title>
      <BodyText variant="lg" className="leading-[2.6rem] text-seal-primary-100">
        {OUR_STORY.body}
      </BodyText>
    </article>
  );
};

export default Story;
