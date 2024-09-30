export type Product = {
  id: number;
  name: string;
  price: number;
  isPromoted: boolean;
  promotion: number;
  expirationPromo: Date | null;
}