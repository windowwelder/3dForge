"use client"

import Link from "next/link";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";
import NavLink from "@/app/components/NavLink"
import {usePathname} from 'next/navigation'

export default function Navbar() {
  const path = usePathname()
  return (
    <header>
      <nav>
        <Link href="/">
          <div>
            {/* Desktop Logo */}
            <img
              src={PFLogo.src}
              alt="PrintForge Logo"
            />
            {/* Mobile Logo */}
            <img
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
            />
          </div>
        </Link>
        <ul>
          <li>
            <NavLink href="/3d-models" isActive={path === "/3d-models"}>3D Models</NavLink>
          </li>
          <li>
            <NavLink href="/about" isActive={path === "/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
