import React from "react";
import type { Product } from "../../types";
import Card from "./Card";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
}

const SkeletonCard: React.FC = () => (
  <div className="bg-white rounded-lg border border-gray-100 overflow-hidden animate-pulse">
    <div className="bg-gray-200 aspect-[4/3]" />
    <div className="p-3 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (products.lenC key={prodgth === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <p className="text-lg font-medium text-gray-700">No products found</p>
        <p className="text-sm text-gray-500 mt-1">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
