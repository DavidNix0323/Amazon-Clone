import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  title: string;
  one: string;
  two: string;
  three: string;
}

const SideNavContent = ({ title, one, two, three }: Props) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {one}
          <span>
            <IoIosArrowDown />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {two}
          <span>
            <IoIosArrowDown />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {three}
          <span>
            <IoIosArrowDown />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
