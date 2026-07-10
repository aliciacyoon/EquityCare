"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import { RESOURCES, ALL_SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/resourcesData";

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 shrink-0">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ResourcesPage() {
  const [selected, setSelected] = useState<ServiceCategory[]>([]);

  function toggleCategory(cat: ServiceCategory) {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  const filtered = useMemo(() => {
    if (selected.length === 0) return RESOURCES;
    return RESOURCES.filter((r) =>
      selected.every((cat) => r.services.includes(cat))
    );
  }, [selected]);

  return (
    <main className="bg-[#f7f2df] text-slate-900">
      <PageHero
        title="Community Health Resources"
        subtitle="Free & Low-Cost Clinics in Orange County"
        imageSrc="/homepage.jpg"
        minHeightClassName="min-h-[45vh]"
      />

      <div className="pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mt-10 text-center text-base leading-relaxed text-slate-700 md:text-lg">
            Find free and sliding-scale healthcare clinics serving Orange County and the greater
            Los Angeles area. Filter by the services you need.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mx-auto mt-8 max-w-4xl px-6">
          <p className="mb-3 text-sm font-semibold text-slate-600 uppercase tracking-wide">
            Filter by service
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_SERVICE_CATEGORIES.map((cat) => {
              const active = selected.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ring-1 transition ${
                    active
                      ? "bg-[#0f3b63] text-white ring-[#0f3b63]"
                      : "bg-white text-slate-700 ring-slate-300 hover:ring-[#0f3b63]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            {selected.length > 0 && (
              <button
                onClick={() => setSelected([])}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-500 ring-1 ring-slate-300 hover:ring-red-400 hover:text-red-500 transition"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-8 max-w-4xl px-6 grid gap-5 sm:grid-cols-2">
          {filtered.map((resource) => (
            <div
              key={resource.id}
              className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-5 flex flex-col gap-3"
            >
              <div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-[#0f3b63] hover:underline"
                >
                  {resource.name}
                  <ExternalLinkIcon />
                </a>
                {resource.phone && (
                  <p className="mt-1 text-sm text-slate-600 flex items-center">
                    <PhoneIcon />
                    <a href={`tel:${resource.phone.replace(/\D/g, "")}`} className="hover:underline">
                      {resource.phone}
                    </a>
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {resource.services.map((svc) => (
                  <span
                    key={svc}
                    className="rounded-full bg-[#e8f0f8] px-3 py-0.5 text-xs font-medium text-[#0f3b63]"
                  >
                    {svc}
                  </span>
                ))}
              </div>

              {resource.notes.length > 0 && (
                <ul className="mt-1 space-y-0.5">
                  {resource.notes.map((note) => (
                    <li key={note} className="text-xs text-slate-500 flex items-start gap-1.5">
                      <span className="mt-0.5 shrink-0 w-1 h-1 rounded-full bg-[#f26f07] inline-block" />
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-2 rounded-xl bg-white p-8 text-center text-slate-600 ring-1 ring-slate-200">
              No clinics match the selected filters.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
