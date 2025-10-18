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
        markers: true,
        start: "top 26%",
        end: "top -120%",
        scrub: true,
        pin: true,
        onUpdate:(elem)=>{
          const imgIndex = Math.floor(elem.progress * (imgarr.length-1))
          imgRef.current.src = imgarr[imgIndex];
        }
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imgDivRef}
          className="absolute h-[18vw] rounded-3xl overflow-hidden w-[14vw] top-46 left-[30vw] bg-amber-950 "
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover"
            src=""
            alt=""
          />
        </div>
        <div className="font-[font2] relative">
          <div className="mt-[55vh] ">
            <div>
              <h2 className="text-[19vw] text-center uppercase leading-[17vw]">
                midnight
                <br />
                <h2 className="pl-39">sparks</h2>
              </h2>
            </div>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-5xl w-2/3">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unleash the
              fizz, feel the buzz! Dive into the world where crisp refreshment
              meets unstoppable energy. Our soft drink awakens your taste buds
              with every sip, while our energy drink ignites your inner spark,
              powering you through the day with a burst of vitality{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
        
      </div>
    </div>
  );
};

export default Agence;
