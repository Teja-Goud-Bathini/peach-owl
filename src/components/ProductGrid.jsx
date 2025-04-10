import { products } from "../data/products";
import ProductCard from "./Products";

export default function ProductGrid() {
  return (
    <section id="shop" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-rose-900">
        Our Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}