import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4">404 Error</p>
      <h1 className="font-syne font-bold text-[clamp(48px,8vw,96px)] leading-none text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-white/50 max-w-md mb-10 leading-relaxed">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full bg-[#6c63ff] text-white font-medium hover:bg-[#5a52e0] transition-all"
      >
        Back to Home
      </Link>
    </div>
  )
}
