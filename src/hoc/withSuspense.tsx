import React, { ComponentType } from "react"
import { Preloader } from "../components/common/Preloader/Preloader"



export function withSuspense(Component: ComponentType) {
    return (props: any) => {
        <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense >
    }
}