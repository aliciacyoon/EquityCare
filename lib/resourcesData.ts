export type ServiceCategory =
  | "Primary Care"
  | "Pediatrics"
  | "Women's Health"
  | "Dental"
  | "Vision"
  | "Behavioral Health"
  | "Mental Health"
  | "Prenatal Care"
  | "Specialist Referral"
  | "HIV/STI Testing";

export type Resource = {
  id: string;
  name: string;
  url: string;
  phone: string;
  services: ServiceCategory[];
  notes: string[];
};

export const RESOURCES: Resource[] = [
  {
    id: "lestonnac",
    name: "Lestonnac Free Clinic",
    url: "https://www.lestonnacfreeclinic.org/",
    phone: "714-633-4600",
    services: ["Primary Care", "Women's Health", "Specialist Referral"],
    notes: ["Diabetes", "Hypertension"],
  },
  {
    id: "families-together-oc",
    name: "Families Together OC",
    url: "https://familiestogetheroc.org/",
    phone: "1-800-597-7977",
    services: [
      "Primary Care",
      "Pediatrics",
      "Women's Health",
      "Dental",
      "Vision",
      "Behavioral Health",
    ],
    notes: ["Sliding Fee Program", "Medi-Cal Enrollment"],
  },
  {
    id: "hurtt-family-health",
    name: "Hurtt Family Health Clinic",
    url: "https://www.hurttclinic.org/",
    phone: "714-247-0300",
    services: ["Primary Care", "Dental", "Vision"],
    notes: ["Uninsured Patients", "Mobile Clinic"],
  },
  {
    id: "kcs-health",
    name: "KCS Health Center",
    url: "https://www.kcsinc.org/",
    phone: "",
    services: ["Primary Care", "Mental Health"],
    notes: [
      "Uninsured Patients",
      "Sliding Fee Program",
      "Medi-Cal Enrollment",
      "Korean, English & Spanish",
      "No one refused due to inability to pay",
    ],
  },
  {
    id: "st-jude",
    name: "St. Jude Neighborhood Health",
    url: "https://stjudenhc.com/",
    phone: "714-446-5100",
    services: ["Primary Care", "Pediatrics", "Women's Health", "Prenatal Care"],
    notes: ["Diabetes Care"],
  },
  {
    id: "altamed",
    name: "AltaMed",
    url: "https://www.altamed.org/",
    phone: "888-499-9303",
    services: ["Primary Care"],
    notes: ["Spanish-speaking", "Uninsured Patients", "Sliding Fee", "Medi-Cal"],
  },
  {
    id: "central-city",
    name: "Central City Community Health Center",
    url: "https://centralcityhealth.org/",
    phone: "714-805-7719",
    services: ["Primary Care"],
    notes: [],
  },
  {
    id: "southland",
    name: "Southland Integrated Services",
    url: "https://www.southlandintegrated.org/",
    phone: "714-620-7001",
    services: ["Primary Care", "Dental", "Behavioral Health"],
    notes: ["Acupuncture"],
  },
  {
    id: "umma",
    name: "UMMA Community Clinic",
    url: "https://www.ummahealthca.org/",
    phone: "323-789-5610",
    services: [
      "Primary Care",
      "Women's Health",
      "Pediatrics",
      "Mental Health",
      "HIV/STI Testing",
    ],
    notes: ["Free or Sliding Fee"],
  },
  {
    id: "la-dhs",
    name: "Los Angeles County Department of Health Services",
    url: "https://dhs.lacounty.gov/",
    phone: "844-804-0055",
    services: ["Primary Care"],
    notes: [],
  },
];

export const ALL_SERVICE_CATEGORIES: ServiceCategory[] = [
  "Primary Care",
  "Pediatrics",
  "Women's Health",
  "Dental",
  "Vision",
  "Behavioral Health",
  "Mental Health",
  "Prenatal Care",
  "Specialist Referral",
  "HIV/STI Testing",
];
