import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import axios from "axios";


export default function Album() {
    const [list, setList] = useState([]);
    useEffect(   () => {
        const fetchData = async () => {
            const response = await axios.get("/profiles");
            setList(response.data);
        }
        fetchData();
    },[]);

    return (
        <>
            {
                list.map(
                    (profile,index) => (
                        <Card key={index} className="m-2 p-1 align-items-center" style={{width: "250px", height: "350px"}}>
                            <Card.Img variant="top" src={"images/" + profile.callsign} style={{width: "150px", height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>{profile.name}</Card.Title>
                                <Card.Subtitle>{profile.alias}</Card.Subtitle>
                                <ButtonGroup size="sm">
                                    {
                                        ['View', 'Edit', 'Delete'].map(
                                            (a) => (
                                                <Button key={a} variant="dark" className="m-1">{a}</Button>
                                            )
                                        )
                                    }
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    )
                )
            }
        </>
    );
}