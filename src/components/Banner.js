import {Row, Col} from "react-bootstrap"
import bioImage from '../images/bioImage.jpeg'
import resume from '../documents/Resume.pdf'
import {ArrowDownCircle} from "react-bootstrap-icons"

export const Banner = () => {
    return(
        <section className="Banner" id="home">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1>DANE PALSIS</h1>
                    <p>Graduated from the University of North Carolina at Wilmington.</p>
                    <a href={resume} download>
                        <button className="download-button">
                            <span>Download My Resume<ArrowDownCircle/></span>
                        </button>

                    </a>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <img className="my-picture" src={bioImage} alt="Header Img"></img>
                </Col>
            </Row>

        </section>

    )
}