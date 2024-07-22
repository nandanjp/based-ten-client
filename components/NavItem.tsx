import { PenIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface NavigationItemProps {
  text: string;
  link: string;
  icon: ReactNode;
}

export function NavigationItem({ link, icon, text }: NavigationItemProps) {
  return (
    <Link
      href={link}
      className="group flex items-center justify-between rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
      prefetch={false}
    >
      <div className="flex items-center gap-3">
        <PenIcon className="h-5 w-5" />
        <span className="font-medium">{text}</span>
      </div>
      {icon}
    </Link>
  );
}
