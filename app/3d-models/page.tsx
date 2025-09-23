import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"
import Form from "next/form"


export default async function Page({ searchParams }: ModelsPageProps) {
    const models = await getModels()
    const query = (await searchParams)?.q?.toLowerCase() || ""

    const filteredModels = query
        ? models.filter(model =>
            model.name.toLowerCase().includes(query) ||
            model.description.toLowerCase().includes(query)
        )
        : models

    return (
        <>
            <Form action="/3d-models">
                <input
                    type="text"
                    name="query"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                    defaultValue={query}
                />
            </Form>
            <ModelsGrid title="3D Models" models={filteredModels} />
        </>
    )
}