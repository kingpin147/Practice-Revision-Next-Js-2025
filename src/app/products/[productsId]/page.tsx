import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const metadata = async ({ params }: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Product {productId}</h1>;
}