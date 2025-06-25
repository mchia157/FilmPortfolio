import {Container, Row, Col} from 'react-bootstrap';
import {Card} from './Card';
import filmPromotionalVideo from '../images/promotionalVideo.png';
import studentVideo from '../images/studentPromotionalVideo.png';
import smokees from '../images/smokees 2.png';

export const Work = () => {
    const jobs = [
        {
            title: "UNCW Film Department Promotional Video",
            description: "UNCW Media Producer",
            imgURL: filmPromotionalVideo,
            link: "https://vimeo.com/646621429",
        },
        {
            title: "Student Highlights",
            description: "UNCW Media Producer",
            imgURL: studentVideo,
            link: "https://vimeo.com/499670185?turnstile=0.qP_7U2hPwER6sVgWSIhWD0-1BGuaXLtZMt3lcJuyvCary9TdNjCxbHTq771t_Akxm906qhB2ijVJzfKbrJESgG6IsDKEBez4-0NZPnTxGe_Cp2pyBP6X_AaYYC-EenQSwyVBy5RRcvdNzrrcH02ojRaNkxpPPu_evdbLWgbnbEoV8G2bZC7Ruyow_lEKVviES7Ho0lNzLe39EkKUYiDsPjOPw744xp_7bdX1mNR91teqVXVcT6Q2fKo_A3NFT-IO2Gi9y1fMRAgkW1GH6sLVKorzT38aAZcsdqXI0umXkwzho-2VWKD5G7W1Du8k5IPhimPKGoPU2-oFr7MjS7cReZ9TPVaBNNYmVYNdS--4gXdBjYiiYHutFfW-RN-PKuT74WXst9FCnu_UvK9kRnCPZ7nJHZZVvkWsAQh6fjLSfMJKUkXuXhg6KauFHz1MgK6E14vWrAv_vq9ePXnx_iIYC-XxyENDjyGrmeBZ7ijLlSh0LEfY1ANmrDJaDtTSQ0fieP99ayMKswWg3mtJBOa_Ga8Z7-IaAVJxp-qIt_OMPkn4ChItFVbERLpsBvKUSK-CUQTXDtfOoo-0u-liyuSNWXdt7YSm5RfGJF8hWeAzke5Rg1J0NeaMT_B6H_39XpQI4io7PbsqbSI2uk_qVBRaYD4HRawMActmrWBTo_POCCNAP2VhZzBw5sTJZrfjdu1d8hDwrHnN5yxthL-P7iX2eo1Dl76UvsjO_f3UIhdI3kewuNxU0pLSdUb5vib_aW5s3blpO3cwT7HyAeINSR-ArEVvfOTTyUVohk2XLqAss1rpV11w59yN98sZ5wcEikt_ul7vVrdN9rFu-OHnGIDLe8sJGFvRMPGaQFCLuVsty9fgK5XAZKW-uPrCZeJ5WUDH.NLzWBjHSzvODY0Q9Yz4mAQ.6f9f2df349a4f55f43250687c65be3ffc658a0b0d0130f74afe30d958bea04f6",
        },
        {
            title: "Smokee's Pizza Social Media Content",
            description: "Social Media Manager and Content Creator",
            imgURL: smokees,
            link: "https://www.instagram.com/smokeespizza/?hl=en",
        }
    ]
    return(
        <section className="work-experience" id="work-experience">
            <Container>
                <h2>Relevant Work Experience</h2>
                <Row className="justify-content-center">
                    {jobs.map((job, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card {...job}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}