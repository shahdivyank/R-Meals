import React from 'react'
import "./Profile.css"
import { Col } from "react-bootstrap"
import { BsLinkedin } from "react-icons/bs"

const Profile = ({ name, img, linkedin }) => {
    return (
        <Col xs={6} className = "wrapper">
            <div className="profile-card">
                <img className="profile-image" src={img} />
                <p className="profile-name">
                    {name}
                </p>
                <a href= {linkedin} target="_blank" rel="noopener">
                    <BsLinkedin className="url" style={{ color: "white" }} />
                </a>
            </div>

        </Col>
    )
}

export default Profile