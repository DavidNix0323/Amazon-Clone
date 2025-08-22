import React, { FC } from "react";
import { motion } from "motion/react";
import SideNavContent from "./SideNavContent";
import { MdAccountCircle, MdClose } from "react-icons/md";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  const { data: session } = useSession();
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full bg-amazonLight/50 shadow-xl transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
        <div className="w-full h-full relative">
          <motion.div
            ref={sidebarRef}
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[290px] md:w-[350px] h-full bg-white border border-black"
          >
            <div className="w-full bg-amazonLight text-white py-2 px-6 flex items-center gap-4">
              {session?.user ? (
                <Image
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full"
                  src={session?.user?.image as string}
                  alt="UserImg"
                />
              ) : (
                <MdAccountCircle />
              )}
              <h3 className="font-titleFont font-bold text-lg tracking-wide">
                Hello, {session?.user ? session?.user?.name : "Sign in"}
              </h3>
            </div>
            {/* ============================ Content & Devices Start here ================ */}
            <SideNavContent
              title="Digital Content & Devices"
              one="Amazon Music"
              two="Kindle E-readers & Books"
              three="Amazon Appstore"
            />
            <SideNavContent
              title="Shop By Department"
              one="Electronics"
              two="Computers"
              three="Smart Home"
            />
            <SideNavContent
              title="Programs & Features"
              one="Gift Cards"
              two="Amazon live"
              three="International Shopping"
            />
            <SideNavContent
              title="Help & Settings"
              one="Your Account"
              two="Customer Service"
              three="Contact us"
            />
            {/* ============================ Content & Devices End here ================ */}
            <span
              onClick={onClose}
              className="cursor-pointer absolute top-0 text-xl left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-amazonBlue hover:text-white duration-300"
            >
              <MdClose />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
