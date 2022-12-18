// 404.js

import Link from "next/link"
import Layout from "../components/Layout"

const Custom404 = () => (
    <Layout dark={true} footer={false}>
        <h1>404</h1>
        <h3>
            this page doesn't exists. Please return to <Link href="/"> Home </Link>
        </h3>
    </Layout>
)

export default Custom404