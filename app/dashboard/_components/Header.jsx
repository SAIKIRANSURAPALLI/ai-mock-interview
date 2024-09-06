"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-black text-white font-bold shadow-sm">
      <Image src={"/logo.png"} width={80} height={50} alt="logo" />
      <ul className="hidden md:flex gap-8 text-gray-200">
        <Link href={"/dashboard"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer hover:text-purple text-white-900 hover:scale-105  duration-300 ease-in-out
            ${
              path == "/dashboard" &&
              "text-purple-400  font-bold border-b-2 border-yellow-400"
            }
            `}
          >
            Dashboard
          </li>
        </Link>

        <li
          className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer hover:text-purple text-white-900 hover:scale-105  duration-300 ease-in-out
            ${
              path == "/dashboard/questions" &&
              "text-purple-400  font-bold border-b-2 border-yellow-400"
            }
            `}
        >
          Questions
        </li>
        <Link href={"/dashboard/upgrade"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer hover:text-purple text-white-900 hover:scale-105  duration-300 ease-in-out
            ${
              path == "/dashboard/upgrade" &&
              "text-purple-400  font-bold border-b-2 border-yellow-400"
            }
            `}
          >
            Upgrade
          </li>
        </Link>
        <li
          className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer hover:text-purple text-white-900 hover:scale-105  duration-300 ease-in-out
            ${
              path == "/dashboard/how" &&
              "text-purple-400  font-bold border-b-2 border-yellow-400"
            }
            `}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
