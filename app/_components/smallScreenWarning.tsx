import { useState } from "react";

export default function SmallScreenWarning() {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  };

  return (
    <div
      className={`duration-500 sm:-bottom-250 absolute h-[45%] w-full z-50
      bg-blue-400 dark:bg-slate-600 ${isHidden ? "-bottom-250" : "bottom-0"}`}
    >
      <div className="flex bg-blue-200 dark:bg-slate-600 p-4 font-bold">
        <div className="ml-2">WARNING</div>
        <div className="m-auto"></div>
        <button
          className="cursor-pointer hover:scale-110 duration-110 mr-2"
          onClick={handleClose}
        >
          [x]
        </button>
      </div>
      <div className="bg-sky-50 dark:bg-slate-500 px-4 py-2 h-full pb-4">
        This page is best expirienced at larger screens or PC.
      </div>
    </div>
  );
}
