import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useProduct } from '@/hooks/useProducts';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function VendorProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading } = useProduct(id || '');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Product not found</p>
          <Button onClick={() => navigate('/vendor/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Button variant="ghost" onClick={() => navigate('/vendor/products')} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <Card className="overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span className="text-9xl">📦</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <Badge className="mb-4">{product.category}</Badge>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-600">Price</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatCurrency(product.price)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-medium">
                    {product.stock > 0 ? (
                      <Badge className="bg-green-100 text-green-800">
                        {product.stock} in stock
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>
                    )}
                  </span>
                </div>
              </div>

              <Button
                className="w-full py-6 text-lg"
                disabled={product.stock === 0}
                onClick={() => {
                  // TODO: Add to cart functionality
                  alert('Add to cart functionality coming soon!');
                }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.stock > 0 ? 'Add to Order' : 'Out of Stock'}
              </Button>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Product Information</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Category</dt>
                      <dd className="font-medium">{product.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Supplier ID</dt>
                      <dd className="font-medium">{product.supplierId}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Last Updated</dt>
                      <dd className="font-medium">
                        {new Date(product.updatedAt).toLocaleDateString()}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
