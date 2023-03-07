import Image from "next/image";
import React, { useRef } from "react";

const ParallaxScroll = () => {
  const scroller = useRef(null);
  const skills = useRef(null);
  return (
    <div className="flex overflow-hidden">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" relative m-0 flex h-screen w-[400vw] overflow-x-hidden  bg-gray-900 text-white"
        >
          <section
            ref={skills}
            className="skill-set  z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="1st image"
              fill
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={skills}
            className="skill-set  z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              fill
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={skills}
            className="skill-set  z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              fill
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={skills}
            className="skill-set  z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              fill
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
