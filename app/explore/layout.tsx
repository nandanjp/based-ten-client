"use client";

import { GridBackground } from "@/components/GridBackground";
import { HeroHighlight } from "@/components/HeroHighlight";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDownIcon } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-center w-full">
      <header className="sticky top-0 z-40 border-b w-full">
        <div className="container flex h-16 items-center justify-between py-4">
          <Navbar />
        </div>
      </header>
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-10 items-start p-6 md:px-8 py-10 md:py-14">
        <div className="flex flex-col gap-6">
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Filters</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="category">
                <AccordionTrigger className="text-base font-medium">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-electronics" /> Electronics
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-clothing" /> Clothing
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-home" /> Home
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-beauty" /> Beauty
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price">
                <AccordionTrigger className="text-base font-medium">
                  Price
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="price-min"
                        className="text-sm font-medium"
                      >
                        Min Price
                      </Label>
                      <Input
                        id="price-min"
                        type="number"
                        placeholder="0"
                        className="w-full"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="price-max"
                        className="text-sm font-medium"
                      >
                        Max Price
                      </Label>
                      <Input
                        id="price-max"
                        type="number"
                        placeholder="1000"
                        className="w-full"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="brand">
                <AccordionTrigger className="text-base font-medium">
                  Brand
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="brand-apple" /> Apple
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="brand-nike" /> Nike
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="brand-ikea" /> IKEA
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="brand-sephora" /> Sephora
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Sort</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span>Sort by</span>
                  <ChevronDownIcon className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-full">
                <DropdownMenuRadioGroup value="featured">
                  <DropdownMenuRadioItem value="featured">
                    Featured
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">
                    Newest
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-asc">
                    Price: Low to High
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-desc">
                    Price: High to Low
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <HeroHighlight className="p-6 rounded-md">{children}</HeroHighlight>
      </section>
    </div>
  );
}
