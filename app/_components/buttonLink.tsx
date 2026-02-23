import Image from "next/image";
import { motion } from "motion/react";

type ButtonLinkProps = {
  src: string;
  alt: string;
  text: string;
  href?: string;
};

export default function ButtonLink({ src, alt, text, href }: ButtonLinkProps) {
  return (
    <motion.button
      className="flex max-w-auto min-h-18 justify-center"
      whileHover={{ scale: 1.1 }}
    >
      <a
        className="bg-blue-200 hover:bg-blue-300
        min-w-32 rounded-lg flex items-center justify-center
        dark:bg-blue-600 dark:hover:bg-blue-700"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
