import type {CategoryPageProps} from "@/app/types/index"
import { getCategoryBySlug } from "@/app/lib/categories"

export default async function CategoriesPage( { params }: CategoryPageProps ) {
  const { categoryName } = await params
  const category = getCategoryBySlug(categoryName)
  return <>{categoryName}</>
}