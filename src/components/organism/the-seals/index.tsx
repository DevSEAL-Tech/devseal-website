"use client";
import { BodyText, Container, Title } from "@/components/atom";
import {
  BecomeASealCard,
  DetailedProfileCard,
  ProfileCard,
} from "@/components/molecule";
import { THE_SEALS_DATA } from "@/constants";
import { useMediaQuery } from "@/hooks";
import { Outfit } from "next/font/google";
import { useCallback, useState } from "react";

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });
type Props = {};

const TheSeals = (props: Props) => {
  const [isHovered, setIsHovered] = useState({
    index: 0,
    state: false,
  });

  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [positions, setPositions] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement>,
      isBigCard: boolean = true,
      index: number
    ) => {
      setIsHovered({
        index: index,
        state: true,
      });
      if (!isBigCard) {
        setPositions({
          x: Math.floor(e.clientX / e.currentTarget.clientWidth + 6),
          y: Math.floor((e.clientY / e.currentTarget.clientHeight) * 10),
        });
      }
    },
    []
  );

  const handleMouseLeave = useCallback((index: number) => {
    setIsHovered({
      index: index,
      state: false,
    });
  }, []);

  const seals = THE_SEALS_DATA.sealsEngineer.map((items, index) => {
    return (
      <li key={items.id} className="relative cursor-pointer">
        {isAboveMediumScreens && (
          <DetailedProfileCard
            onMouseEnter={(e) => handleMouseEnter(e, true, index)}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            className={`absolute transition-all duration-500  ${
              isHovered.index === index && isHovered.state
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
            } `}
            style={{
              top: "-" + positions.y + "rem",
              left: positions.x + "rem",
            }}
            position={items.position}
            name={items.name}
            src={items.image}
            about={items.about}
          />
        )}
        <ProfileCard
          onMouseEnter={(e) => handleMouseEnter(e, false, index)}
          onMouseLeave={() => {
            handleMouseLeave(index);
          }}
          src={items.image}
          name={items.name}
          position={items.position}
        />
      </li>
    );
  });

  return (
    <Container className="relative">
      <Title
        variant="4xl"
        type="h1"
        className={`${outfit.className} text-seal-primary-100 mb-[5rem]`}
      >
        {THE_SEALS_DATA.heading}
      </Title>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-[2rem] w-full">
        <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg-:grid-cols-4 lg:col-span-3 gap-[1.8rem] ">
          {seals}
        </ul>
        <BecomeASealCard
          title={THE_SEALS_DATA.callToAction.title}
          buttonText={THE_SEALS_DATA.callToAction.button.text}
          href={THE_SEALS_DATA.callToAction.button.link}
        />
      </section>
      <BodyText
        variant="lg"
        className="text-seal-primary-100 leading-[3rem] mt-[4.4rem] mb-[28.7rem]"
      >
        {THE_SEALS_DATA.content}
      </BodyText>
    </Container>
  );
};

export default TheSeals;
