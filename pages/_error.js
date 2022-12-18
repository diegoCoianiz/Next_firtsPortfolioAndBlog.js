import Layout from "../components/Layout";

const Error = ({statusCode}) => {
    return (
        <Layout dark={true} footer={false}>
            <h5 className="text-center">
                Could not load your page, error {statusCode}
            </h5>
        </Layout>
        )
}

export default Error