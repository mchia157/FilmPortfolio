import {Row, Col} from "react-bootstrap"
import bioImage from '../images/bioImage.jpeg'
import resume from '../documents/Resume.pdf'
import {ArrowDownCircle} from "react-bootstrap-icons"

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                    <h1>DANE PALSIS</h1>
                    <p>Graduate from the University of North Carolina at Wilmington with a B.A. in Film Production.
                        I am passionate about bringing stories to life through creative collaboration
                        and a deep understanding of the filmmaking process. I am eager to continue my career in the film
                        industry and connect with audiences.
                    </p>
                    <a href={resume} download>
                        <button className="download-button">
                            <span>Download My Resume<ArrowDownCircle/></span>
                        </button>

                    </a>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <img className="my-picture" src={bioImage} alt="Header Img"></img>
                </Col>
            </Row>

        </section>

    )
}