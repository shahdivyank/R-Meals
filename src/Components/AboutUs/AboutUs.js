import React from 'react'
import Profile from './Profile'
import Shaurya from "../../images/Shaurya.jpg"
import Kavin from "../../images/Kavin.JPG"
import Divyank from "../../images/Divyank.jpg"
import { Row, Container } from "react-bootstrap"
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="about-wrapper">

            <div className="about-us">
                <Container fluid>
                    <Row style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <Profile name="Shaurya Pathak" img={Shaurya} linkedin="https://www.linkedin.com/in/shaurya-pathak-b0614a1b2/" />
                        <Profile name="Kavin Phabani" img={Kavin} linkedin="https://www.linkedin.com/in/kavin-phabiani-79b7901a0/" />
                        <Profile name="Divyank Shah" img={Divyank} linkedin="https://www.linkedin.com/in/divyank-shah/" />
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default AboutUs