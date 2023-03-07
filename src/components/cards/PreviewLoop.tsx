import { reverse } from "dns";
import React from "react";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "SVG",
  "animation",
  "webdev",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 7;

interface ScrollProps {
  children: JSX.Element | JSX.Element[];
  duration: number;
  reverse?: boolean;
}

const Scroller: React.FC<ScrollProps> = ({
  children,
  duration,
  reverse = false,
}) => {
  return (
    <div
      className="scroll flex w-fit"
      style={
        {
          "--duration": `${duration}ms`,
          "--direction": `${reverse ? "reverse" : "normal"}`,
        } as React.CSSProperties
      }
    >
      {children}
      {children}
    </div>
  );
};

const PreviewLoop = () => {
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());
  return (
    <div className="flex w-full items-center justify-center border-b-2 border-gray-500 py-10">
      <div className="relative flex w-[30rem] max-w-[90vw] flex-shrink-0 flex-col gap-4 overflow-hidden py-5">
        {[...Array<string>(ROWS)].map((_, i) => {
          return (
            <Scroller
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={!!(i % 2)}
              key={i}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <div
                    className="mr-4 flex rounded-lg bg-gray-600 p-2 text-2xl font-medium text-white"
                    key={i}
                  >
                    <span>#</span> {tag}
                  </div>
                ))}
            </Scroller>
          );
        })}
        <div className="fade-gr pointer-events-none absolute inset-0" />
      </div>
    </div>
  );
};

export default PreviewLoop;

// import React from "react";

// const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
//   return (
//     <div className="loop-slider">
//       <div className="inner">
//         {children}
//         {children}
//       </div>
//     </div>
//   );
// };

// const Tag = ({ text }) => (
//   <div className="tag">
//     <span>#</span> {text}
//   </div>
// );

// const App = () => (
//   <div className="app">
//     <header>
//       <h1>Infinite Scroll Animation</h1>
//       <p>CSS only, content independent, bi-directional, customizable</p>
//     </header>
//     <div className="tag-list">
//       {[...new Array(ROWS)].map((_, i) => (
//         <InfiniteLoopSlider
//           key={i}
//           duration={random(DURATION - 5000, DURATION + 5000)}
//           reverse={i % 2}
//         >
//           {shuffle(TAGS)
//             .slice(0, TAGS_PER_ROW)
//             .map((tag) => (
//               <Tag text={tag} key={tag} />
//             ))}
//         </InfiniteLoopSlider>
//       ))}
//       <div className="fade" />
//     </div>
//   </div>
// );

// ReactDOM.render(<App />, document.body);
