import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-20 border-t border-white/10 bg-obsidian-gradient backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-2">
            {/* ... inside the component */}
            <div className="flex items-center gap-3">
              <div className="relative size-10 flex items-center justify-center">
                <Image
                  src="/images/logo/reekadia-transparent.png"
                  alt="Reekadia Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase">Reekadia</h2>
            </div>
            <p className="text-gray-500 text-sm">Official Artist Platform</p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <Link href="/music" className="hover:text-white hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Music</Link>
            <Link href="/tour" className="hover:text-white hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Tour</Link>
            <Link href="/merch" className="hover:text-white hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Merch</Link>
            <Link href="/contact" className="hover:text-white hover:underline decoration-primary decoration-2 underline-offset-4 transition-all">Contact</Link>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <span className="text-xs font-bold">IG</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <span className="text-xs font-bold">X</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <span className="text-xs font-bold">YT</span>
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium tracking-wide">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Reekadia Records</span>
            <span className="size-1 bg-gray-700 rounded-full"></span>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <span className="size-1 bg-gray-700 rounded-full"></span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
          <div className="flex items-center gap-2">
            <span>Developed by</span>
            <span className="text-gray-300 font-bold tracking-wider">KorvuTech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
