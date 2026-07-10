import Link from "next/link";
import { Instagram } from 'lucide-react';

const linkStyle = "text-white hover:text-blue-400 transition-colors flex items-center justify-center w-12 h-12 rounded-full bg-[#b91f24]";
const iconStyle = "size={48}";

export default function FollowOurJourney() {
  return (
    <div className="bg-[#003366] px-8 py-12 w-full">
    <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center text-center gap-15">
        <h2 className="flex text-3xl font-semibold text-white ">Follow Our Journey</h2>
    <nav className="flex gap-12">
      <Link href="https://www.instagram.com/equitycare.oc/"
        target="_blank"
        rel = "noopener noreferrer"
        className={linkStyle}>
          <Instagram className={iconStyle}/></Link> 
    </nav>
    </div>
    </div>
  );
}