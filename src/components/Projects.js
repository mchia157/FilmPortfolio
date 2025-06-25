import {Container, Row, Col} from 'react-bootstrap';
import {Card} from './Card';
import distopian from '../images/distopian.png';
import tiktok from '../images/tiktok.png';

export const Projects = () => {
    const projects = [
        {
            title: "Distopian Short Film",
            description: "Media Producer",
            imgURL: distopian,
            link: "https://www.instagram.com/p/B_dJzcejii8mgA7ge8bSaTqVEZqdHlxMGEnF7M0/?hl=en",
        },
        {
            title: "Toy Review TikTok Channel",
            description: "Content Creator",
            imgURL: tiktok,
            link: "https://www.tiktok.com/@thecalfsculptor",
        },
    ]
    return(
        <section className="projects" id="projects">
            <Container>
                <h2>Personal Projects</h2>
                <Row className="justify-content-center">
                    {projects.map((project, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card {...project}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}