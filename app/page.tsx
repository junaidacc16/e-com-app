import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to E-Store</h1>
        <p className="text-xl md:text-2xl mb-8">Discover amazing products at unbeatable prices</p>
        <Link href="/products">
          <Button size="lg" variant="secondary">
            Shop Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
