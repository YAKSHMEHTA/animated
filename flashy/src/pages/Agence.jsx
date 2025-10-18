import React, { useRef } from "react";
import  { useGSAP } from "@gsap/react";

const Agence = () => {

  const imgDivRef = useRef(null)

    useGSAP(function(){
      


    })

  return (
<div>
  <div className="section1">
        <div className="absolute h-[20vw] rounded-3xl overflow-hidden w-[15vw] top-46 left-[30vw] " >
          <img className="h-full w-full object-cover" src="https://i.pinimg.com/474x/88/38/4f/88384f3c7267ec1c0ac3755e485d2cb3.jpg" alt="" />
        </div>
      <div className="font-[font2] relative">
        <div className="mt-[55vh] ">
          <div>
            <h2 className="text-[19vw] text-center uppercase leading-[17vw]" >midnight<br/><h2 className="pl-39" >sparks</h2></h2>
          </div>
        
        </div>
        <div className="pl-[40%] mt-20">
          <p className="text-5xl w-2/3" >
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unleash the fizz, feel the buzz! Dive into the world where crisp
            refreshment meets unstoppable energy. Our soft drink awakens your
            taste buds with every sip, while our energy drink ignites your inner
            spark, powering you through the day with a burst of vitality{" "}
          </p>
        </div>
      </div>
  </div>
  <div className="section2 h-screen">
        <div className="absolute h-[20vw] rounded-3xl overflow-hidden w-[15vw] top-46 left-[30vw] " >
          <img className="h-full w-full object-cover" src="https://i.pinimg.com/474x/88/38/4f/88384f3c7267ec1c0ac3755e485d2cb3.jpg" alt="" />
        </div>
      <div className="font-[font2] relative">
        <div className="mt-[55vh] ">
          <div>
            <h2 className="text-[19vw] text-center uppercase leading-[17vw]" >midnight<br/><h2 className="pl-39" >sparks</h2></h2>
          </div>
        
        </div>
        <div className="pl-[40%] mt-20">
          <p className="text-5xl w-2/3" >
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unleash the fizz, feel the buzz! Dive into the world where crisp
            refreshment meets unstoppable energy. Our soft drink awakens your
            taste buds with every sip, while our energy drink ignites your inner
            spark, powering you through the day with a burst of vitality{" "}
          </p>
        </div>
      </div>
  </div>
</div>
  );
};


export default Agence;
