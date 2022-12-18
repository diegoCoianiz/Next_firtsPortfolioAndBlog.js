import "../styles/bootstrap-darkly.min.css"
import "../styles/global.css"
import Head from "next/head"

const MyApp = ({ Component, pageProps }) => {
    return (<>
        <Head>
            <title> Portfolio </title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
        </Head>
        <Component {...pageProps} />
    </>
    )
}

export default MyApp