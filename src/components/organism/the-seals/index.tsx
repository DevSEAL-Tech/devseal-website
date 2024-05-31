"use client";
import { BodyText, Center, Container, Title } from "@/components/atom";
import {
  BecomeASealCard,
  DetailedProfileCard,
  ProfileCard,
} from "@/components/molecule";
import { SEAL_ENGINEERS } from "@/constants";
import { useMediaQuery } from "@/hooks";
import { Outfit } from "next/font/google";
import { useState } from "react";

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
  const seals = SEAL_ENGINEERS.map((items, index) => {
    return (
      <li key={items.id} className="">
       {/* {isAboveMediumScreens && (
         <DetailedProfileCard
         onMouseEnter={(e) => {
           setIsHovered({
             index: index,
             state: true,
           });
           setPositions({
             x: Math.floor(e.clientX / e.currentTarget.clientWidth),
             y: Math.floor(e.clientY / e.currentTarget.clientHeight),
           });
         }}
         onMouseLeave={() => {
           setIsHovered({
             index: index,
             state: false,
           });
           setPositions({
             x: 0,
             y: 0,
           });
         }}
         className={`absolute transition-all w-full h-full duration-500 top-[${
           positions.y
         }] left-[${positions.x}] ${
           isHovered.index === index && isHovered.state ? "block" : "hidden"
         } `}
         position={items.position}
         name={items.name}
         src={items.image}
         about={items.about}
       />
       )} */}
        <ProfileCard
          onMouseEnter={(e) => {
            setIsHovered({
              index: index,
              state: true,
            });
            console.log("entered");
            setPositions({
                x: Math.floor(e.clientX / e.currentTarget.clientWidth),
                y: Math.floor(e.clientY / e.currentTarget.clientHeight),
              });
          }}
          onMouseLeave={() => {
            setIsHovered({
              index: index,
              state: false,
            });
            setPositions({
              x: 0,
              y: 0,
            });
          }}
          src={items.image}
          name={items.name}
          position={items.position}
        />
      </li>
    );
  });
  return (
    <Container>
      <Title
        variant="4xl"
        type="h1"
        className={`${outfit.className} text-seal-primary-100 mb-[5rem]`}
      >
        the SEALS
      </Title>
      <Center>
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-[2rem] w-full">
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg-:grid-cols-4 lg:col-span-3 gap-[1.8rem]">
            {seals}
          </ul>
          <BecomeASealCard />
        </section>
      </Center>
      <BodyText
        variant="lg"
        className="text-seal-primary-100 leading-[3rem] mt-[4.4rem] mb-[28.7rem]"
      >
        devSEAL is passionate about innovation. We harness the power of
        cutting-edge technology to develop groundbreaking solutions that empower
        our clients and drive global progress. By investing in our people and
        fostering a culture of purpose, we create a fulfilling work environment
        where passion thrives.
      </BodyText>
    </Container>
  );
};

export default TheSeals;
