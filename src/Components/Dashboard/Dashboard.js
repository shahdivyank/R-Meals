import React, { useState, useEffect } from 'react'
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap"
import Card from './Card';
// import { Navbar, Container, Nav } from "react-bootstrap"
import Navigation from '../Navigation/Navigation.js';

const Dashboard = ({email}) => {

    const [retrieved, setRetrieved] = useState(false);

    const [breakfastItems, setBreakfastItems] = useState([]);
    const [lunchItems, setLunchItems] = useState([]);
    const [dinnerItems, setDinnerItems] = useState([]);

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [weekend, setWeekend] = useState(false);
    
    const [occupied, setOccupied] = useState([])

    const [toggle, setToggle] = useState(true);
    const [color, setColor] = useState("white");
    const [font, setFont] = useState("black")

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

    const handleToggle = () => {
        console.log("pog")
        setToggle(!toggle);
        if (toggle) {
            setColor("#023E8A");
            setFont("white");
        } else {
            setColor("white");
            setFont("black")
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const today = new Date()
                if (today.getDay() > 4) {
                    setWeekend(true);
                }
                const querySnapshot = await getDocs(collection(db, "days"));
                querySnapshot.forEach((doc) => {
                    if (doc.id === (today.getFullYear().toString() + "-" + (today.getMonth() + 1).toString().padStart(2, '0') + "-" + today.getDate().toString().padStart(2, '0'))) {
                        for (var meal in doc.data()) {
                            console.log(meal)
                            if (meal === "Breakfast") {
                                setBreakfastItems(doc.data()[meal])
                            } else if (meal === "Lunch") {
                                setLunchItems(doc.data()[meal])
                            } else {
                                setDinnerItems(doc.data()[meal])
                            }
                        }
                    }
                });

                const snapshot = await getDocs(collection(db, "meals"));
                console.log(lunchItems)
                snapshot.forEach((doc) => {
                    for (var i = 0; i < breakfastItems.length; i++) {
                        if (doc.id.toString() === breakfastItems[i].toString()) {
                            setBreakfast(breakfast => [...breakfast, doc.data()])
                        }
                    }
                    for (var j = 0; j < lunchItems.length; j++) {
                        // console.log("lunch itme",lunchItems[j])
                        if (doc.id.toString() === lunchItems[j].toString()) {
                            // console.log("lunch", doc.data().name, doc.id)
                            setLunch(lunch => [...lunch, doc.data()])
                        }
                    }
                    for (var k = 0; k < dinnerItems.length; k++) {
                        if (doc.id.toString() === dinnerItems[k].toString()) {
                            // console.log("dinner", doc.data().name, doc.id)
                            setDinner(dinner => [...dinner, doc.data()])

                        }
                    }
                });
            } catch (error) {
                alert(error)
            }
            setRetrieved(true);
        })();
    }, [])

    // useEffect(() => {
    //     (async => {
    //         const snapshot = await getDocs(collection(db, "users"));
    //         snapshot.forEach((doc) => {
    //             if(email === doc.id){
    //                 protein = doc.data().protein
    //                 calories = doc.data().calories
    //                 sugar = doc.data().sugar
    //                 sodium = doc.data().sodium
    //                 trans_fat = doc.data().trans_fat
    //                 fibers = doc.data().fibers
    //                 carbs = doc.data().carbs
    //             }
    //         });
    //     })
    // }, [])

    if (retrieved) {
        return (
            <div>
                <Container fluid >
                    <Row style={{ width: "100%", padding: "5px", display: "flex", justifyContent: "space-around", alignItems: "top" }}>

                        {
                            weekend ?
                                <Col xs={4} style={{ width: "100px", background: "red" }}>
                                    {
                                        breakfast.map(({ name, protein, calories, serving_size }) => (
                                            <Card onClick = {handleToggle} color = {color} font = {font} style={{ background: color, color: font }} key={name} name={name} protein={protein.toFixed(2)} calories={calories.toFixed(2)} serving={serving_size} />
                                        ))
                                    }
                                </Col> : <></>
                        }

                        <Col xs={4} >
                            <p>Lunch</p>
                            {
                                lunch.map(({ name, protein, calories, serving_size }) => (
                                    <Card onClick = {handleToggle} color = {color} font = {font} style={{ background: color, color: font }} key={name} name={name} protein={protein.toFixed()} calories={calories.toFixed()} serving={serving_size} />
                                ))
                            }
                        </Col>
                        <Col xs={4}>
                            <p>Dinner</p>
                            {
                                dinner.map(({ name, protein, calories, serving_size }) => (
                                    <Card onClick = {handleToggle} color = {color} font = {font} key={name} name={name} protein={protein.toFixed()} calories={calories.toFixed()} serving={serving_size} />
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default Dashboard