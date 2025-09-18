import type { RootLayoutProps, Category, CategoriesData } from "@/app/types"
import type { ReactElement } from "react"
import { getAllCategories } from "@/app/lib/categories"
import Link from "next/link"

export default function ModelsLayout( { children }: RootLayoutProps ): ReactElement {
  const categories: Category[] = getAllCategories()
  const categoriesLinks: ReactElement[] = categories.map( (cat: Category): ReactElement =>  {
    return (
              <Link href={`/3d-models/categories/${cat.slug}`} key={cat.slug}>
                {cat.displayName}
              </Link>
            )
  })
  return (
    <div>
      <nav>{categoriesLinks}</nav>
      <main>{children}</main>
    </div>
  )
}