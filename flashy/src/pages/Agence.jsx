import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgDivRef = useRef(null);
  const imgRef = useRef(null);
  const imgarr = [
    "https://i.pinimg.com/1200x/d4/4a/75/d44a755453ff82c65cc47a320f9fdf18.jpg",
    "https://i.pinimg.com/1200x/d4/4a/75/d44a755453ff82c65cc47a320f9fdf18.jpg",
    "https://i.pinimg.com/474x/88/38/4f/88384f3c7267ec1c0ac3755e485d2cb3.jpg",
    "https://i.pinimg.com/736x/07/81/77/0781770279c78e2290aa622d01fa9541.jpg",
    "https://i.pinimg.com/736x/2a/85/13/2a8513396e5c47e57c4a7eaafb923570.jpg",
    "https://i.pinimg.com/736x/bb/4d/fe/bb4dfebf6e94b0ff16b55e7f7570a34b.jpg",
    "https://i.pinimg.com/736x/85/c2/2c/85c22c0fd92f49c58d0b69581410d0f3.jpg",
    "https://i.pinimg.com/736x/c8/a7/de/c8a7de18b04321ad1d75c14fb4386adc.jpg",
    "https://i.pinimg.com/1200x/da/34/9b/da349b7b0e447ea3d6212eaa300cfad0.jpg",
    "https://i.pinimg.com/736x/d8/c9/bf/d8c9bfe2a7da59d9166554c6f1122c2d.jpg",
    "https://i.pinimg.com/1200x/a1/96/64/a1966455798c90f4dd17a19c0c297267.jpg",
    "https://i.pinimg.com/736x/25/23/bd/2523bd8297b7a02172efcef4cacd3ab0.jpg",
    "https://i.pinimg.com/736x/f1/11/d8/f111d8aaf9cd429e79ba22e346394df6.jpg",
  ];

  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 1%",
        end: "top -190%",
        markers:true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 0.3,
        anticipatePin: 0.1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imgarr.length)
          } else {
            imageIndex = imgarr.length - 1
          }
          imgRef.current.src = imgarr[imageIndex]
        },
      },
    });
  });

  return (
    <div className="parent text-black ">
      <div id="page1" className="py-1 min-h-screen relative">
        <div
          ref={imgDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] top-0 left-[30vw] bg-gray-900"
        >
          <img
            ref={imgRef}
            className="h-full object-cover w-full"
            src={imgarr[0]}
            alt=""
          />
        </div>
        <div className="relative font-[font2] ">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              midnight <br />
              sparks
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3 text-black ">
            <p className="lg:text-6xl text-xl leading-tight text-black ">
              Unleash the fizz, feel the buzz! Dive into the world where crisp
              refreshment meets unstoppable energy. Our soft drink awakens your
              taste buds with every sip, while our energy drink ignites your inner spark,
              powering you through the day with a burst of vitality
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen w-full "></div>
    </div>
  );
};

export default Agence;