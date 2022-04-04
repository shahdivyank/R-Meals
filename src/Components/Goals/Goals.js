import React, { useState } from 'react'
import { Container, Col, Row } from "react-bootstrap"
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../../firebase"
import "./Goals.css"

const Goals = ({ name, email }) => {

    const [user, setUser] = useState({
        calories: "",
        protein: "",
        sugar: "",
        sodium: "",
        trans_fat: "",
        fibers: "",
        carbs: ""
    });

    const { calories, protein, sugar, sodium, trans_fat, fibers, carbs } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const submit = () => {
    //     (async () => {
    //         try {
    //             await setDoc(doc(db, "users", email), user);

    //         } catch (error){
    //             alert(error)
    //         }
    //     })
    // }

    return (
        <div className = "profile-wrapper">
            
            <Container className="input-wrapper">
                <Row>
                    <Col>
                    <p className = "hello">Hello {name}</p>
                    </Col>
                <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input className="input" type="number" name="calories" placeholder="Calories" value={calories} onChange={handleChange} />
                    </Col>
                    <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input className="input" type="number" name="protein" placeholder="Protein" value={protein} onChange={handleChange} />
                    </Col>
                    <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input className="input" type="number" name="sugar" placeholder="Sugars" value={sugar} onChange={handleChange} />
                    </Col>
                    <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input className="input" type="number" name="sodium" placeholder="Sodium" value={sodium} onChange={handleChange} />
                    </Col>
                    <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input className="input" type="number" name="trans_fat" placeholder="Trans Fat" value={trans_fat} onChange={handleChange} />
                    </Col>
                    <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input className="input" type="number" name="fibers" placeholder="Fibers" value={fibers} onChange={handleChange} />
                    </Col>
                    <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input className="input" type="number" name="carbs" placeholder="Carbs" value={carbs} onChange={handleChange} />
                    </Col>
                    <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button className = "submit" >Update</button>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Goals