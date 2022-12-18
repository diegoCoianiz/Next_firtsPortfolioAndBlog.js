import Navbar from "./Navbar"
import { useEffect } from "react"
import { useRouter } from "next/router"
import nProgress from "nprogress"

const Layout = ({children, footer = true, dark = false }) => {

    const router = useRouter()
    useEffect(() => {
        const handleRouterchange = url => nProgress.start()


        router.events.on("routeChangeStart", handleRouterchange)
        router.events.on("routeChangeComplete", () => nProgress.done())

        return () => {
            router.events.off("routeChangeStart", handleRouterchange)
        }
    }, [])

    return (
        <div className={dark ? "bg-dark" : ""} >
            <Navbar />
            <main className="container py-3">
                {children}
            </main>
            {footer && (
                <footer className="bg-dark text-light text-center">
                    <div className="container my-4">
                        <h1>My Portfolio</h1>
                        <p>2021 - {new Date().getFullYear()}</p>
                        <p>&copy; all rights reserved</p>
                    </div>

                </footer>
            )}
        </div>
    )
}

export default Layout