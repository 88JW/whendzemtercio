import React, { Component } from "react";
import "../css/Kalkulator.css";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

export default class Kalkulator extends Component {
    state = {
        truskawkicena: 10,
        cukiercena: 3.2,
        energiacena: 0.74,
        owocecena: 1,
        czascena: 0.5,
        moccena: 1,
        sloiki: false,
        jeden: "",
        dwa: "",
    };

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        const checked = e.target.checked;

        if (type === "number") {
            const value = e.target.value;
            this.setState({
                [name]: value,
            });
        } else if (type === "checkbox") {
            const checked = e.target.checked;
            this.setState({
                [name]: checked,
            });
        }
    };

    handleSubmmit = (e) => {
        e.preventDefault();

        const wynik =
            Number(this.state.truskawkicena * this.state.owocecena) +
            (this.state.cukiercena / 2) * this.state.owocecena +
            1 * this.state.energiacena * this.state.czascena;

        if (this.state.sloiki === true) {
            const jedenwynik = Number(
                (this.state.jeden = wynik / (4 * this.state.owocecena))
            );

            const napisjeden = " Cena za słoiczek własnego dżemu.";

            this.setState({
                dwa: this.state.jeden.toPrecision(3) + napisjeden,
            });
        } else {
            const dwawynik = Number(
                (this.state.dwa =
                    (wynik + 1.8 * (4 * this.state.owocecena)) /
                    (4 * this.state.owocecena))
            );

            const napisdwa = " Cena za słoiczek własnego dżemu.";

            this.setState({
                dwa: this.state.dwa.toPrecision(3) + napisdwa,
            });
        }
    };

    render() {
        return (
            <div className="Elements__conteiner">
                <div className="Kalkulator__conteiner">
                    <Container>
                        <h1>Kalkulator dżemiku</h1>
                        <div className="opis">
                            <p>
                                Wprowadź dane odnośnie cen poszczególnych produktów.
                                <br />
                                Obliczymy opłacalność własnego dżemu.
                            </p>
                        </div>
                    </Container>
                    <Container fluid>
                        <form onSubmit={this.handleSubmmit}>
                            <Row className="row__one">
                                <Col>
                                    <label htmlFor="truskawki">
                                        Cena za 1 kg Truskawek:
                                        <br />
                                        <input
                                            className="textbox"
                                            type="number"
                                            id="truskawki"
                                            name="truskawkicena"
                                            value={this.state.truskawkicena}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </Col>
                                <Col>
                                    <label htmlFor="cukier">
                                        Cena za 1 kg cukru:
                                        <br />
                                        <input
                                            className="textbox"
                                            type="number"
                                            id="cukier"
                                            name="cukiercena"
                                            value={this.state.cukiercena}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label htmlFor="owoce">
                                        Ile kg owoców:
                                        <br />{" "}
                                        <input
                                            className="textbox"
                                            type="number"
                                            id="owoce"
                                            name="owocecena"
                                            value={this.state.owocecena}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </Col>
                                <Col >
                                    <label htmlFor="energia">
                                        Cena za 1 kWg:
                                        <br />{" "}
                                        <input
                                            className="textbox"
                                            type="number"
                                            id="energia"
                                            name="energiacena"
                                            value={this.state.energiacena}
                                            onChange={this.handleChange}
                                            step={0.01}
                                            precision={2}
                                        />
                                    </label>

                                    <br />
                                </Col>
                            </Row>


                            {" "}
                            <input
                                className="checkmark"
                                id="sloiki"
                                type="checkbox"
                                name="sloiki"
                                checked={this.state.sloiki}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="sloiki">Czy masz własne słoiki?</label>
                            <br />


                            <button className="myButton" onClick={this.handleClick}>
                                Oblicz opłacalność
                            </button>
                        </form>
                    </Container>
                    <Container>
                        <div className="miejsce">
                            <h4>{this.state.dwa}</h4>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
