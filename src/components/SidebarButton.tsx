"use client";
import { MdMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useState } from "react";

const SidebarButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="link flex items-center"
      >
        <MdMenu className="text-xl mr-1" />
        All
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default SidebarButton;
