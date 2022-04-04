import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Card.css"
// import { BsPlus } from "react-icons/bs";
// import { BiMinus } from "react-icons/bi"
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"

const Card = ({ name, calories, protein, serving, color, font }) => {

    const [size, setSize] = useState(parseInt(serving[0]))
    const [prev, setPrev] = useState(parseInt(serving[0]))
    const [unit, setUnit] = useState(serving.substring(1))

    const [pro, setProtein] = useState(parseInt(protein));
    const [prevPro, setPrevPro] = useState(parseInt(protein));

    const [cal, setCalories] = useState(parseInt(calories));
    const [prevCal, setPrevCal] = useState(parseInt(calories));

    // const [toggle, setToggle] = useState(true);
    // const [color, setColor] = useState("white");
    // const [font, setFont] = useState("black")

    // const handleIncrease = () => {
    //     setSize(size + prev)
    //     setCalories(cal + prevCal);
    //     setProtein(pro + prevPro);
    // }

    // const handleDecrease = () => {
    //     if (size - prev >= 0) {
    //         setSize(size - prev);
    //         setCalories(cal - prevCal);
    //         setProtein(pro - prevPro);
    //     }
    // }

    // const handleToggle = () => {
    //     setToggle(!toggle);
    //     if (toggle) {
    //         setColor("#023E8A");
    //         setFont("white");
    //     } else {
    //         setColor("white");
    //         setFont("black")
    //     }
    // }
     console.log(color)

    return (
        <div className="food-card" style ={{background: color}} >
            <Container fluid>
                <Row xs={12}>
                    <p style={{ font: font}}><b>{name}</b></p>
                </Row>
                <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                    <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ font: font}} className="info" >{pro} g</div>
                        <div style={{ font: font}} className="info" >{cal} cal</div>
                    </Col>
                    <Col xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        {/* <AiFillPlusCircle style={{ color: font }} className="plus" onClick={handleIncrease} /> */}
                        <div style={{ font: font}}>{size}</div>
                        {/* <AiFillMinusCircle style={{ color: font }} className="minus" onClick={handleDecrease} /> */}
                        <div style={{ font: font}}>{unit}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Card