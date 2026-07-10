import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A26A0] px-8 py-14 text-[#d1d5dc]">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-16 mb-12">
          <div className="shrink-0 w-48">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/delegations" className="hover:text-white transition-colors">Get Involved</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6">
          <p className="text-sm text-center">
            © 2026 EquityCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
