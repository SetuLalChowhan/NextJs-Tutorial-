"use client";

import React from "react";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  console.log(pathname);
  const productId = pathname?.split("/")[2];
  const reviewId = pathname?.split("/")[4];
  console.log(productId, reviewId);
  return (
    <div>
      <div>
        Review {reviewId} not found for product {productId}
      </div>
    </div>
  );
};

export default NotFound;
