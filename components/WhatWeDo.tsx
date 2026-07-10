export default function WhatWeDo() {
  return (
    <div className="relative">
      <img
        src="../images/WhatWeDo.png"
        className="w-full object-cover h-135 opacity-70"
      ></img>
      <div className="absolute inset-0 flex flex-col items-center">
        <h1 className="text-white text-5xl font-semibold pt-15 tracking-[3px]">
          What We Do
        </h1>
        <div className="flex justify-center w-full">
          <div className="bg-white text-center w-1/4 h-90 m-7 mt-6 border-2 border-[#DEE2E6]">
            <h2 className="text-[#003366] text-xl m-5">Events</h2>
            <p className="text-sm ml-5 mr-5 text-black opacity-70 font-[400]">
              ​We host mobile pop-up clinics come directly to the spaces communities already know and trust: churches, campuses, etc. We offer basic physical and mental health screenings in a welcoming, judgement-free environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
