import WhatWeDo from "@/components/WhatWeDo";
import PageHero from "@/components/PageHero";
import News from "@/components/News";
import LogoAnimation from "@/components/LogoAnimation";
import Animation from "@/components/Animation";


export default function HomePage() {
  return (
    <main className="bg-[#f7f2df] text-slate-900">
      <section className="bg-[#f7f2df] py-16 md:py-20">
      <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold px-4 py-6 leading-tight">Equity<span style={{ color:"#f26f07" }}>Care</span></h1>
      <h1 className="text-[clamp(2rem,10vw,6rem)] font-bold px-4 py-6 leading-tight">Mobile Health Care</h1>
      <h3 className="text-[clamp(1rem,10vw,2rem)] italic font-bold px-4 py-6 leading-tight">Prevention • Education • Access</h3>
      <a
        href="https://forms.gle/2ThFqAEhWFUmxiCA7"
        target="_blank" 
        className="text-white inline-flex rounded-md bg-[#0A26A0] px-10 py-3 text-sm font-semibold shadow-lg transition hover:bg-[#0A26A0] hover:shadow-xl"
      >
        Become a Volunteer!
      </a>
      <Animation></Animation>
      </section>
      
      {/* About */}
      <section className="bg-[#f7f2df] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl bg-[#f26f07] py-5 text-center rounded-[40px] max-w-292  mx-auto">
            About Us
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
            Affiliated with the Dragon Kim Foundation. Founded by Cecilia Yoon.
          </p>
          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex rounded-md bg-[#f28b1e] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#b91f24] hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <WhatWeDo />
      <img
        src="/images/flow-chart.png"
        className="max-w-150 mx-auto pt-10 pb-20"
      ></img>
      <News />
    </main>
  );
}
