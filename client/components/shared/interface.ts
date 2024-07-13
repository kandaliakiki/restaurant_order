export interface FoodItem {
  name: string;
  subtitle: string;
  imageUrl: string;
  rating: number; // Decimal128 can be represented as number in TypeScript
  timeToServe: string;
  description: string;
  price: number;
}
