import { useRef, useEffect } from "react";
import SkillElement from "./skillElement";
import SkillCategory from "./skillCategory";

type draggableWindowProps = {
  onClick?: React.MouseEventHandler;
};

export default function draggableWindow({ onClick }: draggableWindowProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  if (typeof useRef == null) return;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let startX = 0,
      startY = 0;

    function mouseDown(e: { clientX: number; clientY: number }) {
      startX = e.clientX;
      startY = e.clientY;

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }

    function mouseMove(e: { clientX: number; clientY: number }) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      startX = e.clientX;
      startY = e.clientY;

      if (card) {
        card.style.top = card.offsetTop + dy + "px";
        card.style.left = card.offsetLeft + dx + "px";
      }
    }

    function mouseUp() {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    }

    card.addEventListener("mousedown", mouseDown);

    return () => {
      card.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="absolute w-88 sm:w-128 top-[45vw] left-[2.5vw] sm:top-50 sm:left-50 z-5"
    >
      <div className="flex items-end bg-blue-200 dark:bg-slate-600 p-2 rounded-t-xl cursor-grab shadowCustom ">
        <p className="ml-2">SKILLS</p>
        <div className="m-auto"></div>
        <button
          className="cursor-pointer hover:scale-110 duration-110 mr-2"
          onClick={onClick}
        >
          [x]
        </button>
      </div>
      <div className="flex flex-wrap bg-sky-50 dark:bg-slate-500 px-4 pb-4 shadowCustom break-all">
        <SkillCategory text="Programming" />
        <SkillElement text="HTML" />
        <SkillElement text="CSS" />
        <SkillElement text="JavaScript" />
        <SkillElement text="Typescript" />
        <SkillElement text="Tailwind" />
        <SkillElement text="Node.js" />
        <SkillElement text="React" />
        <SkillElement text="Python" />
        <SkillElement text="Lua" />
        <SkillElement text="Java" />
        <SkillElement text="SQL" />
        <SkillElement text="Git" />
        <SkillCategory text="Software" />
        <SkillElement text="VsCode" />
        <SkillElement text="Figma" />
        <SkillElement text="Blockbench" />
        <SkillElement text="IntelliJ IDEA" />
        <SkillElement text="DaVinci Resolve" />
      </div>
    </div>
  );
}
