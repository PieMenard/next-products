import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl">Welcome to Products Project</h1>
      <Link href={'/products'} className="text-2xl underline mt-4">
        Explore our Products
      </Link>
    </main>
  );
}
