import Image from "next/image";
import { motion } from "motion/react";

type ButtonOpenProps = {
  src: string;
  alt: string;
  text: string;
  onClick?: React.MouseEventHandler;
};

export default function ButtonOpenWindow({
  src,
  alt,
  text,
  onClick,
}: ButtonOpenProps) {
  return (
    <motion.button
      className="flex max-w-auto min-h-18 justify-center cursor-pointer "
      whileHover={{ scale: 1.1 }}
    >
      <a
        className="bg-blue-200 hover:bg-blue-300
        min-w-32 rounded-lg flex items-center justify-center
        dark:bg-blue-600 dark:hover:bg-blue-700 duration-0"
        onClick={onClick}
      >
        <Image
          className="dark:invert"
          width={24}
          height={24}
          src={src}
          alt={alt}
        />
        <div className="pl-2 font-bold">{text}</div>
      </a>
    </motion.button>
  );
}
