import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import { post } from "../profile"

const Blog = () => (
    <Layout>
        <h1 className="text-center">My blog</h1>
        <div className="row">
        {
            post.map((note, id) => (
                <PostCard note={note} key={id}/>
            ))
        }
        </div>
    </Layout>
)

export default Blog