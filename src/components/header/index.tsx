"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";

import { Menu } from "lucide-react";

const MenuLink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Prodotti",
    href: "/prodotti",
  },
  {
    name: "Brevetti",
    href: "/brevetti",
  },
  {
    name: "Chi siamo",
    href: "/about",
  },
  {
    name: "Contatti",
    href: "/contact",
  },
];

export default function Header() {
  const {
    isOpen: isOpenDrawerMenu,
    onOpen: onOpenDrawerMenu,
    onOpenChange: onOpenChangeDrawerMenu,
  } = useDisclosure();

  return (
    <header className="h-20 flex items-center justify-center px-8 fixed w-full backdrop-blur-lg bg-white/30 z-50">
      <div className="h-full max-w-[1000px] w-full flex justify-between items-center">
        {/* Menu pt.1 */}
        <ul className="hidden md:flex items-center justify-between gap-8">
          {MenuLink.slice(1, 3).map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* Logo */}
        <Link href={"/"} className="p-2">
          <Image
            width={231}
            height={40}
            alt="Logo"
            src={"/img/logo-black.png"}
            className="w-[200px] md:w-[231px]"
          />
        </Link>

        {/* Menu pt.2 */}
        <ul className="hidden md:flex items-center justify-between gap-8">
          {MenuLink.slice(3, 5).map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* Bottone Menu Mobile */}
        <Button
          isIconOnly
          radius="none"
          className="bg-transparent md:hidden"
          aria-label="Menu"
          onPress={onOpenDrawerMenu}
        >
          <Menu />
        </Button>

        {/* Drawer Menu Mobile */}
        <Drawer
          isOpen={isOpenDrawerMenu}
          onOpenChange={onOpenChangeDrawerMenu}
          radius="none"
        >
          <DrawerContent>
            <DrawerHeader className="flex justify-center my-4">
              <Link href={"/"}>
                <Image
                  width={200}
                  height={40}
                  alt="Logo"
                  src={"/img/logo-black.png"}
                  className="w-[200px]"
                />
              </Link>
            </DrawerHeader>
            <DrawerBody className="px-2">
              <ul className="flex flex-col gap-2">
                {MenuLink.map((link, index) => {
                  return (
                    <li key={index} className="w-full font-light">
                      <Link
                        href={link.href}
                        className="bg-transparent hover:bg-[var(--marsilii-background-secondary)] transition-all duration-200 w-full block px-4 py-2"
                        onClick={() => onOpenChangeDrawerMenu()}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
