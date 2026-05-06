export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  imageUrl: string;
  categoryId: string;
}