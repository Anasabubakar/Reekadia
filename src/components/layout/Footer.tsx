import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center py-6 z-20">
      <div className="flex items-center gap-6 text-xs text-gray-500 font-medium tracking-wide">
        <span>© {currentYear} Reekadia Records</span>
        <span className="size-1 bg-gray-600 rounded-full"></span>
        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
        <span className="size-1 bg-gray-600 rounded-full"></span>
        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
      </div>
    </footer>
  );
}