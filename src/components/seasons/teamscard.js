import React from "react";
import { Grid, Card, Col, Text, Button, Link, Row} from "@nextui-org/react";
import './seasons.css';

export default function TeamsCard(props){
    return(
        <Card className="season-item-card">
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col css={{
                    alignItems: 'center',
                    jc: 'center'
                }}>
                    <Text hideIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$4xl',
                        fontWeight: '$bold'
                    }}>
                        TEAMS
                    </Text>
                    <Text showIn={'xs'}
                    css={{
                        textAlign: 'center',
                        fontSize: '$2xl',
                        fontWeight: '$semibold'
                    }}>
                        TEAMS
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={props.src}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
            </Card.Body>
            <Card.Footer isBlurred
            css={{
                position: "absolute",
                bgBlur: "#ffffff05",
                bottom: 0,
                zIndex: 1,
                jc: 'center',
                alignItems: 'center'
            }}
            >
                <Col>
                    <Row
                    css={{
                        jc:'center',
                        alignItems: 'center'
                    }}>
                        
                        <Text
                        css={{
                            textAlign: 'center',
                            padding: '0% 2.5%'
                        }}>
                            &#x2022; Teams List
                        </Text>
                        <Text
                        css={{
                            textAlign: 'center',
                            padding: '0% 2.5%'
                        }}>
                            &#x2022; Budget Sheet
                        </Text>

                    </Row>
                    
                    <Grid.Container gap={1}
                    css={{
                        jc: 'center',
                    }}>
                        <Grid>
                            <Button shadow rounded bordered auto ghost>
                                <Link href={props.href}>
                                    TEAMS
                                </Link>
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Col>
            </Card.Footer>
        </Card>
    )
}