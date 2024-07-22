"use client";

import { HoverEffect } from "@/components/HoverCard";
import { LoadingSpinner } from "@/components/Spinner";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useMedia } from "@/hooks/useQuery";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const { data, status } = useMedia(debouncedSearch);

  return (
    <div className="grid gap-6 md:gap-8 min-w-full min-h-full">
      <div className="flex items-center justify-between min-w-full min-h-full">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold">Search Results</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Showing {status !== "success" ? 0 : data.response.length} Results
          </p>
        </div>
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
            value={search}
            type="search"
            placeholder="Search products..."
            className="pl-12 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      {status !== "success" ? (
        <LoadingSpinner className="h-6 w-6" />
      ) : (
        <HoverEffect
          className="min-w-full min-h-full"
          items={data.response.slice(0, 30).map((item, i) => ({
            title: item.title!,
            description: item.type as string,
            link: i.toString(),
          }))}
        />
      )}
    </div>
  );
}
