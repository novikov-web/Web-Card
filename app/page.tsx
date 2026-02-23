"use client";

import ButtonLink from "./_components/buttonLink";
import BgWave from "./_components/bgWave";
import BgWaveMirrored from "./_components/bgWaveMirrored";
import DraggableWindow from "./_components/draggableWindow";
import ButtonOpenWindow from "./_components/buttonOpenWindow";
import ButtonTheme from "./_components/buttonTheme";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("");
  const [visibility, setVisibility] = useState("");

  function visibilityInvert() {
    return visibility ? setVisibility("") : setVisibility("hidden");
  }

  return (
    <div className={`${theme ? "dark" : ""} select-none dark:text-sky-100 `}>
      <main
        className="h-screen flex items-center justify-center
        bg-sky-100 dark:bg-slate-900 -z-1"
      >
        <motion.div
          initial={{
            scale: 0,
            rotate: -45,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 1,
              ease: [0, 0.65, 0.25, 1.1],
            },
            rotate: 0,
            opacity: 1,
          }}
          className="shadowCustom rounded-lg py-16 p-0 sm:px-14 flex flex-col flex-wrap z-2
          sm:bg-neutral-50 sm:dark:bg-slate-700"
        >
          <div className="">
            <div className="sm:flex-row flex flex-col">
              <Image
                width={180}
                height={180}
                src="/images/pfp.webp"
                alt="Picture"
                className="object-cover rounded-lg mx-auto "
              />
              <div className="pl-4 text-6xl w-full text-center sm:text-start">
                <p>Oleksander</p>
                <p>Novikov</p>
                <p className="text-4xl">Aspiring Web-Developer</p>
              </div>
            </div>
            <div className="h-[5vw]"></div>
            <div className="grid grid-flow-col gap-2 grid-rows-2 sm:grid-rows-1">
              <ButtonLink
                src="/svg/github.svg"
                alt="github logo"
                text="Github"
                href="https://github.com/novikov-web"
              />
              <ButtonLink
                src="/svg/gmail.svg"
                alt="gmail logo"
                text="Gmail"
                href="mailto:novikov.alexander55@gmail.com"
              />
              <ButtonLink
                src="/svg/linkedin.svg"
                alt="linkedin logo"
                text="LinkedIn"
                href="https://linkedin.com/in/novikov-web"
              />
              <ButtonOpenWindow
                src="/svg/star.svg"
                alt="star icon"
                text="Skills"
                onClick={visibilityInvert}
              />
            </div>
          </div>
        </motion.div>
      </main>
      <div className="hidden sm:block">
        <BgWave />
        <BgWaveMirrored />
      </div>
      <div className={`${visibility ? "" : "hidden"}`}>
        <DraggableWindow onClick={visibilityInvert} />
      </div>
      <ButtonTheme
        onClickSun={() => {
          setTheme("");
        }}
        onClickMoon={() => {
          setTheme("dark");
        }}
      />
    </div>
  );
}
