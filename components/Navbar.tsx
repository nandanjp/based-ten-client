import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRightIcon, MountainIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { NavigationItem } from "./NavItem";
import { ModeToggle } from "./ModeToggleButton";

export default function Navbar() {
  const links = [
    {
      parent: "Explore",
      children: ["Lists", "Groups", "Users"],
    },
    {
      parent: "Create",
      children: ["Group", "List"],
    },
    {
      parent: "User",
      children: ["Settings", "Logout"],
    },
  ];
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <SunIcon className="h-6 w-6" />
          <span className="font-bold">Based10</span>
        </Link>
        <div className="flex items-center justify-evenly gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuTrigger>
                    <span className="font-medium">{link.parent}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-4">
                      {link.children.map((child, j) => (
                        <NavigationMenuLink
                          asChild
                          key={`${link.parent}/${child}`}
                        >
                          <NavigationItem
                            text={child}
                            link={`${link.parent}/${child}`.toLowerCase()}
                            icon={
                              <ChevronRightIcon className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                            }
                          />
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
