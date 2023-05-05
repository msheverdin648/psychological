import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { PsychotherapyPage } from "pages/PsychotherapyPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes{
    MAIN = 'main',
    FOR_BUSINESS = 'for_business',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.FOR_BUSINESS] : '/for-business',
    [AppRoutes.ABOUT] : '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN] : {
        path: RoutePath.main,
        element: <PsychotherapyPage />
    },
    [AppRoutes.FOR_BUSINESS] : {
        path: RoutePath.for_business,
        element: <MainPage />
    },
    [AppRoutes.ABOUT] : {
        path: RoutePath.about,
        element: <AboutPage />
    },
}


