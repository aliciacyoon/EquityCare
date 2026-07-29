export default function WhatWeDo() {
  return (
    <>

      {/* Statistics: Why We Started */}
      <div className="bg-[#0f3b63] py-16 px-6">
        <h2 className="text-white text-4xl md:text-5xl font-semibold text-center tracking-wide mb-12">
          Why We Started
        </h2>

        {/* Big stat */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <p className="text-[#f26f07] text-[clamp(4rem,14vw,8rem)] font-bold leading-none">
            52.5%
          </p>
          <p className="text-white text-xl md:text-2xl font-medium mt-2">
            of U.S. adults ages 40–59 have high blood pressure.
          </p>
          <p className="text-white/70 text-lg md:text-xl mt-3 italic">
            Many don't know it.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto w-16 h-1 rounded-full bg-[#f26f07] mb-10 opacity-60" />

        {/* Warning info */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            High blood pressure often has no warning signs until serious health problems develop.
          </p>
        </div>

        {/* Small steps card */}
        <div className="mx-auto max-w-2xl bg-white/10 rounded-2xl p-8 text-center mb-10 ring-1 ring-white/20">
          <p className="text-[#f26f07] text-2xl md:text-3xl font-bold mb-4">
            Small steps. Big Impact.
          </p>
          <p className="text-white/85 text-base md:text-lg leading-relaxed">
            Early screenings, health education, and healthy lifestyle changes can help people
            live healthier, longer lives.
          </p>
        </div>

        {/* Mission close */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-white text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-[#f26f07]">That's why EquityCare exists.</span>{" "}
            Helping communities live healthier through prevention, education, and access.
          </p>
        </div>
      </div>
    </>
  );
}
