"use client"

import type { ReactNode } from "react"
import ModelsNavbar from "@/app/components/ModelsNavbar"

export default function ModelsLayout( { children }: { children : ReactNode } ) {
    return (
    <div>
      {/* Responsive Navigation */}
      <aside>
        <div>
          <ModelsNavbar />
          {/* Fading edge/gradient for horizontal scroll hint on mobile */}
        </div>
      </aside>
      {/* Main Content Area */}
      <main>{children}</main>
    </div>
  )
}