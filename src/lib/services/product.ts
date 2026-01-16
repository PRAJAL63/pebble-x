import type { Product } from '@/mocks/products';
import { mockProducts } from '@/mocks/products';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<ProductListResponse>('/products');
  // return response.data.body.data;

  await delay(500);
  return [...mockProducts];
};

export const getProduct = async (id: string): Promise<Product> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<ProductResponse>(`/products/${id}`);
  // return response.data.body.data;

  await delay(300);
  const product = mockProducts.find(p => p.id === id);
  if (!product) throw new Error('Product not found');
  return { ...product };
};

export const createProduct = async (
  data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<Product> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.post<ProductResponse>('/products', data);
  // return response.data.body.data;

  await delay(800);
  const newProduct: Product = {
    ...data,
    id: `prod-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  mockProducts.push(newProduct);
  return newProduct;
};

export const updateProduct = async (id: string, data: Partial<Product>): Promise<Product> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.put<ProductResponse>(`/products/${id}`, data);
  // return response.data.body.data;

  await delay(600);
  const index = mockProducts.findIndex(p => p.id === id);
  if (index === -1) throw new Error('Product not found');

  const updatedProduct = {
    ...mockProducts[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  mockProducts[index] = updatedProduct;
  return updatedProduct;
};

export const deleteProduct = async (id: string): Promise<void> => {
  // TODO: Replace with real API when backend is ready
  // await axiosInstance.delete(`/products/${id}`);

  await delay(400);
  const index = mockProducts.findIndex(p => p.id === id);
  if (index === -1) throw new Error('Product not found');
  mockProducts.splice(index, 1);
};
