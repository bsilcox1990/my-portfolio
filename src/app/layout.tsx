import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brad | Software Engineer",
  description: "Portfolio of Brad, a full-stack developer specializing in React, Next.js, TS, Node.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <nav className="border-b border-white/10 p-4">
          <div className="max-w-4xl mx-auto flex gap-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <Link href="/projects" className="hover:text-cyan-400">Projects</Link>
            <Link href="/experience" className="hover:text-cyan-400">Experience</Link>
            <Link href="/skills" className="hover:text-cyan-400">Skills</Link>
            <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto p-6 flex-grow">
          {children}
        </main>

        <footer className="text-center py-6 text-black/50 text-sm">
          © {new Date().getFullYear()} Brad
        </footer>
      </body>
    </html>
  );
}
