"use client";

import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { GridBackground } from "@/components/GridBackground";
import { HeroHighlight } from "@/components/HeroHighlight";
import Navbar from "@/components/Navbar";
import { Tabs } from "@/components/TabsView";
import { TracingBeam } from "@/components/TracingBeam";
import { TypewriterEffect } from "@/components/TypeWriter";
import { useMedia } from "@/hooks/useQuery";
import { SunIcon } from "lucide-react";
import Image from "next/image";
import { title } from "process";

const DummyContent = () => {
  return (
    <Image
      src="/fate-1.jpeg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-8 inset-x-0 w-[90%] rounded-lg mx-auto"
    />
  );
};

export default function Home() {
  const { data, status } = useMedia();

  if (status !== "success") {
    return "still getting data......";
  }

  const words = [
    {
      text: "Based",
    },
    {
      text: "Ten",
    },
    {
      text: "Create",
    },
    {
      text: "Your",
    },
    {
      text: "Top",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Ten",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Today",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-center w-full ">
      <header className="sticky top-0 z-40 border-b w-full">
        <div className="container flex h-16 items-center justify-between py-4">
          <Navbar />
        </div>
      </header>
      <HeroHighlight className="p-10 -my-5">
        <div className="container py-10 grid flex-1 gap-8 md:grid-cols-1">
          <TypewriterEffect words={words}></TypewriterEffect>
        </div>
        <TracingBeam>
          <BentoGrid className="w-full">
            {data.response.slice(0, 20).map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.mediaimage?.slice(0, 20)}
                header={item.type}
                icon={<SunIcon />}
              />
            ))}
          </BentoGrid>
        </TracingBeam>
      </HeroHighlight>
      <GridBackground>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
          <Tabs
            tabs={data.response.slice(0, 4).map((item, i) => ({
              title: item.title!,
              value: item.title!,
              content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-violet-900">
                  <p>Random tab</p>
                  <DummyContent />
                </div>
              ),
            }))}
          />
        </div>
      </GridBackground>
    </div>
  );
}
