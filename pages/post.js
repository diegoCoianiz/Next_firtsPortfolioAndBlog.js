import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { post } from "../profile"

const Post = () => {
    const router = useRouter()
    let currentPost = post.filter(data => data.id_url === router.query.title)[0]

    console.log(currentPost)
    return (
        <Layout>
            <div className="row">
                <div className="col px-5">
                    <h1>{currentPost.title}</h1>
                    <img className="card-img-top" src={currentPost.img}  />
                    <div className="text-center">
                    <h4>{currentPost.content}</h4>
                    <br/>
                    <h5>{currentPost.lorem_def}</h5>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Post