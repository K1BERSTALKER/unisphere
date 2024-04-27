import React from "react";
import { cardsArray } from "../../constants";
import { Card } from ".";

export default function Cards() {
  return (
    <div className="w-full flex justify-center -mt-12">
      <div className="w-[80%]  grid grid-cols-4 gap-x-4 gap-y-8 place-items-center">
        {cardsArray.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
