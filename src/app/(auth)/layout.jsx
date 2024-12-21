"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({ children }) {
  const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "forgot-password", href: "/forgot-password" },
  ];
  const pathname = usePathname();
  const [name, setName] = useState("")
  return (
    <div>
      {navLinks.map(({ name, href }) => {
        const isActive = pathname.startsWith(href);
        
        return (
      
            <Link href={href} className={isActive?"font-bold mr-4": "text-blue-500 mr-4"}>{name}</Link>
    
        );
      })}
      <br />

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      {name}
      {children}
    </div>
  );
}
