"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Gallery from "@/components/ProductDetail/Gallery";

const data = [
  {
    id: 1,
    images: [
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
    ],
    image: "/images/product2.png",
  },
  {
    id: 2,
    images: [
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
    ],
    image: "/images/product1.png",
  },
  {
    id: 3,
    images: [
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
    ],
    image: "/images/product3.png",
  },
  {
    id: 4,
    images: [
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
    ],
    image: "/images/product4.png",
  },
  {
    id: 5,
    images: [
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
    ],
    image: "/images/product.png",
  },
  {
    id: 6,
    images: [
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
    ],
    image: "/images/product6.png",
  },
  {
    id: 7,
    images: [
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
    ],
    image: "/images/product2.png",
  },
  {
    id: 8,
    images: [
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
    ],
    image: "/images/product1.png",
  },
  {
    id: 9,
    images: [
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
    ],
    image: "/images/product3.png",
  },
  {
    id: 10,
    images: [
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
    ],
    image: "/images/product4.png",
  },
  {
    id: 11,
    images: [
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
    ],
    image: "/images/product.png",
  },
  {
    id: 12,
    images: [
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
    ],
    image: "/images/product6.png",
  },
  {
    id: 13,
    images: [
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
    ],
    image: "/images/product2.png",
  },
  {
    id: 14,
    images: [
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
    ],
    image: "/images/product1.png",
  },
  {
    id: 15,
    images: [
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
    ],
    image: "/images/product3.png",
  },
  {
    id: 16,
    images: [
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
    ],
    image: "/images/product4.png",
  },
  {
    id: 17,
    images: [
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
    ],
    image: "/images/product.png",
  },
];

const id = () => {
  const [product, setProduct] = useState<any>(null);
  const productId = useParams();
  const id = productId.id;

  const filteredProduct = () => {
    const filteredItem = data.filter((item) => item.id.toString() == `${id}`);

    setProduct(filteredItem[0]);
  };

  useEffect(() => {
    filteredProduct();
  }, [id]);
  return (
    <>
      <Gallery items={product} />
    </>
  );
};

export default id;
