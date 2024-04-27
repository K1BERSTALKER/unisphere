import React from "react";
import { HeaderProps } from "../../types";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, Search } from "lucide-react";
import { searchInputs } from "../../constants";

export default function Header({ children, bgImage }: HeaderProps) {
  return (
    <header className="text-gray-300 h-[100vh] relative">
      <Image src={bgImage} alt="bgImage" fill className="absolute -z-10" />
      {children}
      <section className="flex items-center justify-center flex-col h-[90vh] text-black gap-10">
        <h1 className="text-8xl uppercase text-[#5feeee]">Unisphere</h1>
        <p className="text-[#5feeee] max-w-[800px] text-center">
          Your all-in-one education destination for every course and education
          centers Explore limitless learning opportunities today!
        </p>
        <div className="flex relative w-1/2 gap-2 h-12 items-center justify-between px-2 rounded-full bg-white">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              Filter
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Courses</DropdownMenuItem>
              <DropdownMenuItem>EDU Centers</DropdownMenuItem>
              <DropdownMenuItem>Vacancy</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="w-px h-1/2 bg-gray-500" />
          <input
            type="text"
            className="w-full h-full outline-none"
            placeholder="Search..."
          />
          <Search size={30} />
        </div>
        <div className="flex gap-2">
          {searchInputs.map((search) => (
            <div
              key={search.id}
              className="flex rounded-full backdrop-blur-lg p-2 text-white gap-3"
            >
              <search.icon color="black" /> {search.label}
            </div>
          ))}
        </div>
        <span className="flex items-center justify-center flex-col mt-10 gap-4">
          <span className="backdrop-blur-lg p-3 rounded-full">
            <ArrowDownToLine color="white" />
          </span>
          <span className="text-white text-sm">Scroll</span>
        </span>
      </section>
    </header>
  );
}
