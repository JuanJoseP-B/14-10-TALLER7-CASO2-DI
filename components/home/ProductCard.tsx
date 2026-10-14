import React from 'react';
import Image from 'next/image';
import { Heart, Plus, Star } from 'lucide-react';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="relative w-full max-w-[280px] min-h-[276px] mx-auto bg-white rounded-[24px] shadow-card p-[18px] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-soft group">
      {/* Product Image Area */}
      <div className="relative w-full h-[130px] rounded-2xl overflow-hidden bg-white/50 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1280px) 244px, (min-width: 640px) 50vw, 100vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info Area */}
      <div className="relative mt-2.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Small Heart Icon */}
          <div className="mb-1">
            <Heart
              className="w-[18px] h-[18px] fill-primary stroke-primary"
              aria-hidden="true"
            />
          </div>

          {/* Product Title */}
          <h4 className="text-[19px] xl:text-[20px] font-medium text-primary leading-[1.25] line-clamp-2">
            {product.name}
          </h4>
        </div>

        {/* Price & Rating row */}
        <div className="mt-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-text-body">
              {product.currency}{product.price}
            </span>
            <div className="flex items-center text-star gap-0.5" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-star stroke-star"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-[14px] font-medium text-text-muted">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Add to Cart Round Plus Button */}
        <button
          type="button"
          className="absolute right-0 bottom-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </article>
  );
};
