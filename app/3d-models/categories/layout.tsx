"use client"

import type { RootLayoutProps, Category} from "@/app/types"
import type { ReactElement } from "react"
import { getAllCategories } from "@/app/lib/categories"
import NavLink from "@/app/components/NavLink"
import { usePathname } from "next/navigation"

export default function ModelsLayout( { children }: RootLayoutProps ): ReactElement {
  const path = usePathname()
  const categories: Category[] = getAllCategories()
  const categoriesLinks: ReactElement[] = categories.map( (cat: Category): ReactElement =>  {
    return (
              <NavLink href={`/3d-models/categories/${cat.slug}`} key={cat.slug} isActive={path === `/3d-models/categories`}>
                {cat.displayName}
              </NavLink>
            )
  })
  return (
    <div>
      <nav>{categoriesLinks}</nav>
      <main>{children}</main>
    </div>
  )
}