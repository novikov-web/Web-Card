import { motion } from "motion/react";
import Image from "next/image";

type ButtonThemeProps = {
  onClickSun?: React.MouseEventHandler;
  onClickMoon?: React.MouseEventHandler;
};

export default function ButtonTheme({
  onClickSun,
  onClickMoon,
}: ButtonThemeProps) {
  return (
    <div className="fixed w-25 h-auto bg-neutral-50 top-[5%] right-[5%] flex rounded-xl shadowCustom z-50">
      <div
        className="relative w-13.5 rounded-l-xl
      hover:bg-yellow-300 bg-yellow-300
      dark:hover:bg-yellow-200 dark:bg-white"
      >
        <motion.button whileHover={{ rotate: 15 }} onClick={onClickSun}>
          <Image
            src="./svg/sun.svg"
            alt="Light mode icon"
            width={50}
            height={50}
            className="invert dark:invert-0"
          />
        </motion.button>
      </div>
      <div
        className="relative w-13.5 rounded-r-xl
      hover:bg-blue-200 bg-white
      dark:hover:bg-blue-300 dark:bg-blue-300"
      >
        <motion.button whileHover={{ rotate: 15 }} onClick={onClickMoon}>
          <Image
            src="./svg/moon.svg"
            alt="Dark mode icon"
            width={50}
            height={50}
            className="dark:invert"
          />
        </motion.button>
      </div>
    </div>
  );
}
