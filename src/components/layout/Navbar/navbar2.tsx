"use client";

import type { NavbarProps } from "@heroui/react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { cn } from "@heroui/react";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const aboutItems = [
  { name: "Who we are", description: "Wir stellen uns vor", icon: "lucide:chart-bar" },
  { name: "What we do", description: "Einige Projekte", icon: "lucide:shield" },
  { name: "Curriculum", description: "CV Fernanda Perreira", icon: "lucide:settings" },
  { name: "Frei", description: "zur Verfügung", icon: "lucide:puzzle" },
];

const rechtlichesItems = [
  { name: "Impressum", icon: "lucide:book-open" },
  { name: "Datenschutz", icon: "lucide:code" },
  { name: "Cookies", icon: "lucide:newspaper" },
  { name: "AGB", icon: "lucide:git-branch" },
];

const companyItems = [
  "About",
  "Customers",
  "Careers",
  "Contact Us",
];

export default function Component(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full h-full text-stone-200 bg-amber-600 justify-center uppercase py-2",
        item: "hidden md:flex",
      }}
      height="66px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>

      </NavbarBrand>

      <NavbarContent className="hidden md:flex" justify="center">
        <NavbarItem>
          <Link className="text-default-500 bg-amber-500/50 hover:border-b-2 hover:transform hover:scale-110 px-3 py-1 rounded-md" href="/" size="sm">
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="uppercase bg-amber-500/50 px-3 rounded-md data-[hover=true]:transform hover:scale-110 hover:border-stone-600"
                endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
                radius="sm"
              >
                über uns
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="About"
            className="w-[340px] bg-orange-200"    
            itemClasses={{
              base: "gap-4",
            }}
          >
            {aboutItems.map((item) => (
              <DropdownItem
                key={item.name}
                description={item.description}
                startContent={<Icon icon={item.icon} className="text-xl" />}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
        <Link className="text-default-500 bg-amber-500/50 hover:border-b-2 hover:transform hover:scale-110 px-3 py-1 rounded-md" href="/galleria" size="sm">
            Gallerie
          </Link>
        </NavbarItem><NavbarItem>
        <Link className="text-default-500 bg-amber-500/50 hover:border-b-2 hover:transform hover:scale-110 px-3 py-1 rounded-md" href="/services" size="sm"> 
           Service
          </Link>
        </NavbarItem><NavbarItem>
        <Link className="text-default-500 bg-amber-500/50 hover:border-b-2 hover:transform hover:scale-110 px-3 py-1 rounded-md" href="/contact" size="sm">
            Kontakt
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="uppercase text-default-500 bg-amber-500/50 hover:border-b-2 hover:transform hover:scale-110 px-3 py-1 rounded-md"
                endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
                radius="sm"
                variant="light"
              >
                Rechtliches
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Resources"
            className="w-[240px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {rechtlichesItems.map((item) => (
              <DropdownItem
                key={item.name}
                startContent={<Icon icon={item.icon} className="text-xl" />}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
                radius="sm"
                variant="light"
              >
                Company
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Company">
            {companyItems.map((item) => (
              <DropdownItem key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <div className="flex items-center gap-2">
          <Link className="px-3 py-1 text-default-500 bg-slate-600 hover:bg-red-800 rounded-md" href="/admin" size="sm">
            Adminboard 
          </Link>
          <p className="text-[.5rem]">Admin-Lehrer-Studenten</p>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button className="text-default-500" radius="full" variant="light">
            Login
          </Button>
          <Button
            className="bg-foreground font-medium text-background"
            color="secondary"
            endContent={<Icon icon="lucide:arrow-right" />}
            radius="full"
            variant="flat"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="h-36 text-default-400 md:hidden" />

      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        <NavbarMenuItem className="mb-4">
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-6">
          <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>

        <div className="mb-4">
          <span className="text-default-500 text-small font-medium">Products</span>
          {aboutItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link className="mb-2 w-full text-default-500 flex items-center gap-2" href="#" size="md">
                <Icon icon={item.icon} />
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>

        <Divider className="my-4" />

        <div className="mb-4">
          <span className="text-default-500 text-small font-medium">Rechtliches</span>
          {rechtlichesItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link className="mb-2 w-full text-default-500 flex items-center gap-2" href="#" size="md">
                <Icon icon={item.icon} />
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>

        <Divider className="my-4" />

        <div>
          <span className="text-default-500 text-small font-medium">Company</span>
          {companyItems.map((item) => (
            <NavbarMenuItem key={item}>
              <Link className="mb-2 w-full text-default-500" href="#" size="md">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
