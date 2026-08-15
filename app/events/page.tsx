import PageHero from "@/components/PageHero";

const events = [
  {
    src: "/images/equitycarephotoes/IMG_1077.jpeg",
    alt: "EquityCare event photo",
    title: "The HUB Resource Center",
    description: "Free health screenings, education, and resources were provided without appointment, insurance, nor barriers.",
    position: "object-bottom",
  },
  {
    src: "/images/equitycarephotoes/IMG_0951.jpeg",
    alt: "EquityCare event photo",
    title: "Equity Care + Magnolia",
    description: "Spoke with the Magnolia School District community, shared free health screenings, and connected families with resources. Health education starts with access, and access starts with partnerships like this.",
    position: "object-bottom",
  },
  
  {
    src: "/images/equitycarephotoes/IMG_0788.jpeg",
    alt: "EquityCare event photo",
    title: "EquityCare’s Mobile Health Clinic - John Marshall Park",
    description: "Offering free blood pressure checks, BMI screenings, and more to help make healthcare more accessible for everyone.",
    position: "object-center",
  },
  {
    src: "/images/equitycarephotoes/IMG_6601.jpeg",
    alt: "EquityCare event photo",
    title: "Our first Mobile Health Clinic",
    description: "150 adults received free health screenings, referrals, and resources yesterday.  ",
    position: "object-center",
  },
  
];

export default function EventsPage() {
  return (
    <main className="bg-[#f7f2df]">
      <PageHero
        title="Events"
        subtitle="EquityCare in the Community"
        imageSrc="/homepage.jpg"
        minHeightClassName="min-h-[45vh]"
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200 bg-white">
              <img
                src={event.src}
                alt={event.alt}
                className={`w-full h-96 object-cover ${event.position}`}
              />
              <div className="p-6 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-[#0f3b63]">{event.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
