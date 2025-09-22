import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps, Model } from "@/app/types"
import { getModels } from "@/app/lib/models"

export default async function Page( { searchParams } ) {
    const models = await getModels()
    const { q }: ModelsPageProps = await searchParams
    const filteredModels = q ? models.filter( (mod: Model): Model => mod.description.toLowerCase().includes(q.toLowerCase()) || mod.name.toLowerCase().includes(q.toLowerCase())) : models

    return (
        <>
            <form>
                <input type="text" placeholder="search" name="q" defaultValue={q} />
            </form>
          <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}
