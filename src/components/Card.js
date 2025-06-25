import {Col} from "react-bootstrap"

export const Card = ({title, description, imgURL, link}) => {
    return (
        <Col sm={12} md={12} xl={12}>
            <a href={link} target="_blank" rel="noreferrer" className="proj-imgbx d-flex justify-content-center align-items-center w-100">
                <img src={imgURL} alt="Card Img"></img>
                <div className="proj-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </a>
        </Col>
    )
}