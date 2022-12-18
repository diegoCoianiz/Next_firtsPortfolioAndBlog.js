import Link from "next/link"

const PostCard = ({note}, key) => {
    console.log("")
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card h-100 w-100 my-2" key={key}>
                <div className="card-body">
                <div className="overFlow">
                     <img src={note.img} alt="" className="card-img-top" height={300} />
                </div>
                    <h3 className="text-center">{note.title}</h3>
                    <br/>
                    <h6>{note.content}</h6>
                </div>
                <Link href={`post?title=${note.id_url}`} as={`/post/${note.id_url}`} className="btn btn-light">Read more</Link>
            </div>
        </div>
    )
}

export default PostCard