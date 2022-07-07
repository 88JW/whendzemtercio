import React, { Component } from 'react'
import "../App.css";
import "../css/Ciekawostki.css"
import { Accordion, Container, } from 'react-bootstrap';


export default class Ciekawostki extends Component {
    render() {
        return (
            <div className="Elements__conteiner">
                <div className='Ciekawostki__conteiner'>


                    <p>Informacje o Truskawkach</p>
                    <Container>
                        <div className='Accordion__conteiner'>
                            <Accordion defaultActiveKey="0" flush className='Accordion__style' >
                                <Accordion.Item eventKey="0" className='pierwszy'>
                                    <Accordion.Header className='pierwszy'>Czy wiesz że:</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Truskawki pochodzą od poziomek?</p>
                                        <p>Jest to roślina mieszaniec dwóch gatunków poziomki z rodziny różowatych.</p>
                                        <p> Pierwsze truskawki wyhodowano we Francji w latach 50 XVIII wieku.</p>
                                        <p> Ze względu na swoje rozmiary szybko wyparły z rynku poziomkę pospolitą, którą ludzie spożywali od czasów epoki kamienia a zapewne nawet i wcześniej.</p>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Wartości odrzywcze:</Accordion.Header>
                                    <Accordion.Body>
                                        <p>100 g truskawek zawiera tylko 32 kcal.</p>
                                        <p>Truskawki zawierają więcej witaminy C niż pomarańcze i pomagają w redukcji stanów zapalnych. Są one idealne nawet do leczenia zaćmy i innych chorób oczu.</p>
                                        <p>Truskawki są bardzo bogate w przeciwutleniacze, które są korzystne dla zdrowia serca i kontroli poziomu cukru we krwi.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Wimbledon</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Truskawka stanowi symbol tenisowego Wimbledonu. Podczas meczu otwarcia serwuję się gościom truskawki z bitą śmietaną. </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='ostatni'>
                                    <Accordion.Header>Truskawki w medycycnie</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Truskawki od dawna wykorzystywane są również w medycynie. Na przeziębienia warto stosować herbatkę z kwiatów i liści truskawek, a świeże, umyte liście można przykładać na rany. Miąższ i sok z truskawek stosowany jest w leczeniu stanów zapalnych skóry i w walce z wągrami. Truskawki zawierają bromelinę, która przyspiesza spalanie tłuszczów i węglowodanów, dlatego też truskawki mogą pomóc w walce z nadwagą i cellulitem.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
