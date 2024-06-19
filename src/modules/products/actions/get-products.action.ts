import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/Product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductsAction = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get<Product[]>(`/products?limit=${limit}&offset=${page}`);

    return data.map((product) => ({
      ...product,
      images: product.images.map(getProductImageAction),
    }));
  } catch (error) {
    throw new Error('Error getting products');
  }
};
