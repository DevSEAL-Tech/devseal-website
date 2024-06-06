"use client";
import {
  BodyText,
  Card,
  CustomInput,
  CustomTextArea,
  NavLink,
  Title,
} from "@/components/atom";
import { CONTACT_UUS_PAGE_CONTENTS } from "@/constants/contactUsPage";
import React from "react";

type Props = {};

const GetInTouch = (props: Props) => {
  const buttonStyle =
    "p-8 w-full bg-seal-primary-100 font-semibold leading-[3.7rem] text-[2rem] text-white hover:bg-seal-secondary-100 transition-all duration-300 hover:text-seal-primary-100";
  const TC_SPLIT =
    CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput.disclaimer.text.split(
      "'"
    );
  console.log(TC_SPLIT);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card className="px-[3.6rem] py-[3.8rem]" rounded="lg" variant="white">
        <article>
          <Title
            variant="md"
            type="h3"
            className="text-seal-primary-100 leading-[3.3rem] font-bold"
          >
            {CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].title}
          </Title>
          <BodyText variant="sm" className="leading-[2.8rem]">
            {CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].subtitle}
          </BodyText>
        </article>
        <div className=" space-y-[2rem] mt-[2.7rem]">
          <div className="grid-cols-2 grid gap-[2.4rem]">
            <CustomInput
              label={
                CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput.firstName
                  .label
              }
            />
            <CustomInput
              label={
                CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput.LastName
                  .label
              }
            />
          </div>
          <CustomInput
            label={
              CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput[
                "Email address"
              ].label
            }
          />
          <CustomTextArea
            label={
              CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput.message.label
            }
          />
          <button
            type="submit"
            className={`${buttonStyle} max-h-[5rem] rounded-[.5rem] text-[2rem] font-semibold leading-[3.6rem] flex items-center justify-center`}
          >
            {CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput.CTA.text}
          </button>
        </div>

        <BodyText className="mt-[2.2rem] text-gray-400 leading-[2.4rem] text-center">
          {TC_SPLIT[0]}{" "}
          <NavLink
            href={
              CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput.disclaimer
                .termsOfServiceLinkL
            }
            className="text-seal-primary-100 font-semibold"
          >
            {TC_SPLIT[1]}{" "}
          </NavLink>{" "}
          {TC_SPLIT[2]}{" "}
          <NavLink
            href={
              CONTACT_UUS_PAGE_CONTENTS["Get In Touch"].formInput.disclaimer
                .termsOfServiceLinkL
            }
            className="text-seal-primary-100 font-semibold"
          >
            {TC_SPLIT[3]}
          </NavLink>
        </BodyText>
      </Card>
    </form>
  );
};

export default GetInTouch;
