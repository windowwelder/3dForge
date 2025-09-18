import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children , isActive}: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={ !isActive ? "px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent" : "px-4 py-2 text-orange-accent transition-colors rounded-md cursor-pointer hover:text-orange-accent"}
      >{children}</Link>
    </li>
  )
}