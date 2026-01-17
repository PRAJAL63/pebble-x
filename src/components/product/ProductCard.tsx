import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/services/product.service';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square relative bg-gray-100">
        {product.images ? (
          <img src={product.images} alt={product.name} className="object-cover w-full h-full" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <span className="text-4xl">📦</span>
          </div>
        )}
        {product.stock <= 5 && product.stock > 0 && (
          <Badge className="absolute top-2 right-2 bg-yellow-500">Low Stock</Badge>
        )}
        {product.stock === 0 && (
          <Badge className="absolute top-2 right-2 bg-red-500">Out of Stock</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">{formatCurrency(product.price)}</span>
          <span className="text-sm text-gray-500">{product.stock} in stock</span>
        </div>
      </CardContent>
    </Card>
  );
}
