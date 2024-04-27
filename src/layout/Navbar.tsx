import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" p-4 flex justify-between">
      <div className="w-24 flex items-center">
        <Image src="/next.svg" alt="logo" width={150} height={100} />
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/">Courses</Link>
        <Link href="/">Teachers</Link>
        <Button variant="ghost">Login</Button>
        <Button variant="default">Create Account</Button>
      </div>
    </nav>
  );
}
