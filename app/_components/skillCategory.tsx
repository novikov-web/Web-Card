type SkillCategoryProps = {
  text: string;
};

export default function SkillCategory({ text }: SkillCategoryProps) {
  return <div className="w-128 border-b-2 mt-2">{text.toUpperCase()}</div>;
}
