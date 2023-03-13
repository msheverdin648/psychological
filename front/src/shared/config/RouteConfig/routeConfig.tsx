import { MainPage } from "pages/MainPage"
import { PsychotherapyPage } from "pages/PsychotherapyPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes{
    MAIN = 'main',
    PSYCHOTHERAPY = 'psychotherapy',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.PSYCHOTHERAPY] : '/psychotherapy',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN] : {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.PSYCHOTHERAPY] : {
        path: RoutePath.psychotherapy,
        element: <PsychotherapyPage />
    },
}