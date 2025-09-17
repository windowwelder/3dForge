import type { ModelDetailPageProps } from "@/app/types"
import {getModelById} from "@/app/lib/models"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {

  const { id } = await params
  const modelDetail = await getModelById( id )
  return (<>
    <h1>The id of this model is {id}</h1>
    <h2>{modelDetail.name}</h2>
    <p>{modelDetail.description}</p>
    <img src={modelDetail.image}/>
  </>)
}