/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nmKx9CA0may
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [viewMode, setViewMode] = useState("list");
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Product Catalog</h1>
        <div className="flex items-center space-x-4">
          <Button
            variant={viewMode === "list" ? "primary" : "outline"}
            onClick={() => setViewMode("list")}
          >
            <ListIcon className="w-5 h-5 mr-2" />
            List View
          </Button>
          <Button
            variant={viewMode === "grid" ? "primary" : "outline"}
            onClick={() => setViewMode("grid")}
          >
            <LayoutGridIcon className="w-5 h-5 mr-2" />
            Grid View
          </Button>
        </div>
      </div>
      {viewMode === "list" ? (
        <div className="space-y-6">
          <div className="flex items-center space-x-6 bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold mb-2">Stylish Sunglasses</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Protect your eyes in style with our premium sunglasses.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$29.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6 bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold mb-2">Leather Crossbody Bag</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Stylish and practical bag for everyday use.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$49.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6 bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold mb-2">Wireless Headphones</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Experience high-quality sound with our wireless headphones.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$79.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Stylish Sunglasses</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Protect your eyes in style with our premium sunglasses.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$29.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Leather Crossbody Bag</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Stylish and practical bag for everyday use.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$49.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Wireless Headphones</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Experience high-quality sound with our wireless headphones.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$79.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Classic Wristwatch</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Timeless design for any occasion.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$59.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
