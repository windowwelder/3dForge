import {getAllModels} from "@/app/lib/models"
import type { Model } from "@/app/types/index"
import { JSX } from "react"

export default async function Models() {
  const modelNames = await getAllModels()
  const newModelNames = modelNames.map( (el: Model): JSX.Element => 
  {
    return (<h1 key={el.id}>{el.name}</h1>)
    } 
)
  return  
(  <> 
      {newModelNames}
  </>)
}