import Layout from "../components/Layout"
import Error from "./_error"

const gitHub = ({user, status}) => {
    if (status) return <Error statusCode={status}/>
    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center">
                    <div className="card card-body">
                    <img src={user.avatar_url} alt="" width={100+"%"} style={{borderRadius:"50%"}} />
                    <h1>{"@"+user.login}</h1>
                    <p>{user.bio}</p>
                    <a href={user.blog} target="_blank" className="btn btn-outline-primary my-2" style={{color:"white"}}>My Blog</a>
                    <a href={user.html_url} target="_blank" className="btn btn-outline-primary my-2" style={{color:"white"}}>Go Github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.github.com/users/diegoCoianiz`)
    const data = await res.json()
    const status = res.status > 200 ? res.status : false

    return {
        props: {
            user:data,
            status
        }
    }
}

export default gitHub