// Sumary Router
import { Route, Routes } from "react-router"
import HomeFage from "./pages/users/homeFage"
import { ROUTER } from "./ultis/router"
import Layout from "./pages/users/theme/layout"

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME, // Ứng vs đường dẫn HOME thì render ra compunent HomePage
            compunent: <HomeFage />
        },
    ]

    return (
        //Children
        <Layout>
            <Routes>
                {
                    userRouter.map((item, key) => (
                        <Route key={key} path={item.path} element={item.compunent}/>
                    ))
                }
            </Routes>
        </Layout>
    )
}

const RouterCustom = () => {
    return renderUserRouter()
}

export default RouterCustom