"use client"

import NavLink from "@/app/components/NavLink"
import { usePathname } from "next/navigation"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types"

export default function CategoriesNav() {
  const pathname = usePathname()
  const categories: Category[] = getAllCategories()
  return (
    <aside>
      <div>
        <nav>
          <ul>
            <NavLink
              href="/3d-models"
              isActive={pathname === "/3d-models"}
            >
              All
            </NavLink>
            {categories.map(item => (
              <NavLink
                href={`/3d-models/categories/${item.slug}`}
                key={item.slug}
                isActive={pathname === `/3d-models/categories/${item.slug}`}
              >
                {item.displayName}
              </NavLink>
            ))}
          </ul>
        </nav>
        {/* Fading edge/gradient for horizontal scroll hint on mobile */}
        <div/>
      </div>
    </aside >
  )
}