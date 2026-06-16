import WhatWeDo from "@/components/WhatWeDo";
import PageHero from "@/components/PageHero";
import News from "@/components/News";

export default function HomePage() {
  return (
    <main className="bg-[#f5f2f0] text-slate-900">
      <PageHero
        title={
          <>
            EquityCare 
            <span className="block">Orange County</span>
          </>
        }
        subtitle={"Access to healthcare"} //change...
        imageSrc="/homepage.jpg" //change...
        minHeightClassName="min-h-[70vh]"
      >
        <a
          href="/apply"
          className="inline-flex rounded-md bg-[#f28b1e] px-10 py-3 text-sm font-semibold shadow-lg transition hover:bg-[#b91f24] hover:shadow-xl"
        >
          Apply
        </a>
      </PageHero>

      {/* About */}
      <section className="bg-[#FFF6F6] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#183b5b] md:text-4xl lg:text-5xl">
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
