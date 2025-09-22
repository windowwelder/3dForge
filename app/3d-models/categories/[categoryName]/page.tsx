import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import type { CategoryPageProps } from "@/types/index"

export default async function CategoryPage({ params }: CategoryPageProps) {

  const { categoryName } = await params
  const category = getCategoryBySlug(categoryName)
  const categoryModel =  await getModels({category: category.slug})

  return <section>
            <h1>{category.displayName}</h1>
            <ModelsGrid title={category.displayName} models={categoryModel} />
         </section>
}