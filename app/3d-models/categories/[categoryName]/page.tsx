import type {CategoryPageProps} from "@/app/types/index"

export default async function CategoriesPage( { params }: CategoryPageProps ) {
  const { categoryName } = await params
  return <>{categoryName}</>
}