import React from 'react';
import { BESTSELLER_PRODUCTS } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProductCard } from '@/components/home/ProductCard';
import { Button } from '@/components/ui/Button';

export const Bestsellers: React.FC = () => {
  return (
    <section
      id="bestsellers"
      aria-labelledby="bestsellers-heading"
      className="w-full mt-12 lg:mt-14"
    >
      <SectionTitle
        level="h3"
        id="bestsellers-heading"
        title="Bestsellers from Across the Country"
      />

      {/* Grid: 1 col on mobile, 2 cols on sm/md, 4 cols on lg/xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-9">
        {BESTSELLER_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* VIEW ALL Button */}
      <div className="flex justify-center sm:justify-end mt-6">
        <Button
          href="#all-products"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto h-12 px-9 text-[18px] font-bold rounded-pill"
        >
          VIEW ALL
        </Button>
      </div>
    </section>
  );
};
