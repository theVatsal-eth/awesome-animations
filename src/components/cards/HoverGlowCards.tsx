import React from "react";

const HoverGlowCards = () => {
  const obj = [
    {
      title: "This",
    },
    {
      title: "looks",
    },
    {
      title: "sexy",
    },
    {
      title: "as",
    },
    {
      title: "fuck",
    },
    {
      title: "!",
    },
  ];

  const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cards = document.getElementsByClassName(
      "card"
    ) as HTMLCollectionOf<HTMLElement>;
    for (const card of Array.from(cards)) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      console.log({ x, y });
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className="flex w-full items-center justify-center border-b-2 border-gray-500 py-10">
      <div
        id="cards"
        onMouseMove={(e) => handleHover(e)}
        className="flex w-[calc(100%-20px)] max-w-[916px] flex-wrap items-center justify-center gap-2"
      >
        {obj.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="flex h-full w-full flex-col items-center justify-around rounded-[10px] bg-[#171717]">
                <span className="text-2xl font-bold text-white">
                  {item.title}
                </span>
                <span className="text-xl font-medium text-white">
                  {index + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HoverGlowCards;
