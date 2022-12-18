import Layout from "../components/Layout"
import Link from "next/link"
import { Skills, Experience, Projects } from "../profile"

const Index = () => (
    <Layout>
        {/* Header card */}
        <div className="row">
            <div className="container-fluid">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 my-2">
                            <img src="https://avatars.githubusercontent.com/u/95014620?v=4"
                                className="card-img-top mx-1 my-1" alt="portfolio img"
                                style={{ width: 98 + "%", borderRadius: 50 + "%" }} />
                        </div>
                        <div className="col">
                            <div className="card bg-light">
                                <ul className="list-group list-group-flush my-2">
                                    <li className="list-group-item bg-dark" key={"1"}>
                                    <h1>My Porfolio</h1>
                                    </li>
                                    <li className="list-group-item" key={"2"}><h3>Who I am</h3>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content just in case
                                            you wish to <Link href="/contact"> Contact me!</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Skilss and Experience */}
        <div className="row mt-3">
            <div className="col-md-4 my-2   ">
                <div className="card-body">
                    <div className="card bg-light text-center">
                        <h2 style={{ color: "#222" }}>Skills</h2>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" key={"7"}>
                                {Skills.map((skill, id) => (
                                    <>
                                        <h3>{skill.name}</h3>
                                        <div className="progress" key={skill.id}>
                                            <div className="progress-bar" role="progressbar" style={{ width: skill.percentage + "%" }}></div>
                                        </div>
                                    </>
                                ))}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="col my-2">
                <div className="card-body">
                    <div className="card bg-light">
                        <h2 className="text-center" style={{ color: "#222" }}>Experience</h2>
                        {
                            Experience.map((exp, id) => (
                                <>
                                    <ul className="list-group list-group-flush bg-dark">
                                        <li className="list-group-item" key={id}>
                                            <h3 className="text-center">{exp.title}</h3>
                                            <p>
                                                {exp.description}
                                            </p>
                                            <h5 className="text-end">{exp.date}</h5>
                                        </li>
                                    </ul>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio */}
        <div className="row my-2">
            <div className="col-md col-sm-12">
                <div className="card bg-light">
                    <ul className="list-group list-group-flush my-2">
                        <li className="list-group-item bg-dark text-center" key={"10"}>
                            <h1>Projects</h1>
                        </li>
                        <div className="row mx-1">
                            {
                                Projects.map((project, id) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-2 " key={id}>
                                        <div className="card h-100 w-100">
                                            <div className="overFlow">
                                                <img src={project.linkImg}
                                                    alt={project.name}
                                                    height="250rem"
                                                    className="card-img-top" />
                                            </div>
                                            <div className="text-center px-2">
                                                <h3>{project.name}</h3>
                                                <p>{project.content}</p>
                                                <Link href="/">Know more!</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <li className="list-group-item bg-dark text-center" key={"8"}>
                            <div className="text-center">
                                <Link href="/portfolio">
                                    <div className="btn btn-outline-light">More Projects</div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index