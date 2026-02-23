type SkillElementProps = {
  text: string;
};

export default function SkillElement({ text }: SkillElementProps) {
  return (
    <div className="bg-sky-200 hover:bg-sky-300 dark:bg-slate-700 hover:dark:bg-slate-800  hover:scale-105 duration-50 rounded-md mx-0.5 mt-1 px-1">
      {text}
    </div>
  );
}
