import React from "react";
import { CardProps, CardType } from "../../types";
import Image from "next/image";
import { UserRound } from "lucide-react";

export default function Card({ card }: CardProps) {
  if (card.course) {
    return (
      <div className="h-28 w-3/4 flex justify-center items-center flex-col gap-2 bg-[#f0eef4] shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.25)] rounded-md">
        {card.course.icon ? (
          <Image
            src={card.course?.icon}
            alt={card.course.name}
            width={40}
            height={40}
            className="rounded-full "
          />
        ) : (
          <h3 className="border border-[#9d75ef] text-[#9d75ef] px-3 py-2 rounded-lg">
            {card.course.content}
          </h3>
        )}
        <h3 className="font-[400]">{card.course.name}</h3>
        <p className="text-gray-400 text-sm font-light">
          {card.course?.courses} kurslar
        </p>
      </div>
    );
  } else if (card.comp) {
    return (
      <div className="h-28 w-3/4 flex justify-center items-center flex-col gap-2 bg-[#f0eef4] shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.25)] rounded-md">
        {card.comp.logo && (
          <Image
            src={card.comp?.logo}
            alt={card.comp.name}
            width={40}
            height={40}
            className="rounded-full "
          />
        )}
        <h3>{card.comp.name}</h3>
        <p className="text-gray-400 text-sm font-light">
          {card.comp.courses} kurslar
        </p>
      </div>
    );
  }

  return (
    <div className="w-3/4 flex justify-center items-center flex-col gap-2 bg-[#f0eef4] shadow-[0 4px 4px 0 rgba(0, 0, 0, 0.25)] rounded-md">
      <UserRound />
      <h3>{card.vacancy?.name}</h3>
      <p className="text-gray-400 font-light text-sm">
        {card.vacancy?.count} bo&apos;sh orinlar
      </p>
    </div>
  );
}
