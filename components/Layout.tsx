// components/Layout.tsx
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mt-5">
      <nav className="mb-4">
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/projects">Projects</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>
      {children}
    </div>
  );
}