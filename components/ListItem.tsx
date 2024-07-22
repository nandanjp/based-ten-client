import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MediaResponseType } from "@/lib/api.types";

interface ListItemProps {
  media: MediaResponseType["response"];
}

const ListItem = ({ media }: ListItemProps) => {
  return (
    <div className="flex items-center space-x-6 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden p-4">
      <Image
        src="/jjk-3.jpeg"
        alt="Product Image"
        width={200}
        height={200}
        className="w-48 h-48 object-cover rounded-md"
      />
      <div className="flex-1 p-6">
        <h3 className="text-xl font-bold mb-2">{media.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {media.createdon ? "got back a date" : "did not get back a date....."}
        </p>
        <span className="text-lg font-bold">{media.id}</span>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{media.type}</span>
          <Button>View Media</Button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
