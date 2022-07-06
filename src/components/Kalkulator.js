import React, { Component } from 'react'
import "../css/Kalkulator.css";
import "../App.css";





export default class Kalkulator extends Component {

    state = {

        truskawkicena: 10,
        cukiercena: 3.20,
        energiacena: 0.74,
        owocecena: 1,
        czascena: 2,
        moccena: 1,
        sloiki: false,

    }

    handleChange = (e) => {





        // console.log(e.target.type);
        // console.log(e.target.name);
        // console.log(e.target.value);
        // console.log(this.state.cukiercena.type);
        const name = e.target.name;
        const type = e.target.type;
        const checked = e.target.checked;

        if (type === "number") {

            const value = e.target.value;
            this.setState({
                [name]: value,
            })
        }
        else if (type === "checkbox") {

            const checked = e.target.checked;
            console.log(checked);
            this.setState({

                [name]: checked,
            })
        }
    }

    handleSubmmit = (e) => {

        e.preventDefault()
        console.log("obliczanie");
        console.log(this.state.truskawkicena);
        console.log(this.state.cukiercena);
        console.log(this.state.cukiercena);


        const wynik = (Number((this.state.truskawkicena) * this.state.owocecena) + ((this.state.cukiercena / 2) * this.state.owocecena) + ((1 * this.state.energiacena) * this.state.czascena));




        if (this.state.sloiki === true) {
            // console.log('możesz nie kupować słoików');
            console.log((wynik) / (4 * this.state.owocecena) + "za słoiczek 200ml dżemu");
        }

        else {
            console.log('należy doliczyć jeszcze cenę słokików');
            console.log(wynik + (1.8 * (4 * this.state.owocecena)));
            // console.log((wynik) / (1.8 * (4 * this.state.owocecena)) + "za słoiczek 200ml dżemu")
            console.log('cena za słoik');
            console.log((wynik + (1.8 * (4 * this.state.owocecena))) / (4 * this.state.owocecena));



        }


        // console.log(wynik);





        // if (true) {

        //     const wynik = this.setState.truskawkicena;

        //     console.log(wynik)
        // }

    }



    render() {
        return (
            <div className="Elements__conteiner">
                <div className='Kalkulator__conteiner'>
                    <p>Kaklulator dzęmiku</p>

                    <form onSubmit={this.handleSubmmit}>
                        <label htmlFor='truskawki'>Cena za 1 kg Truskawek:
                            <input type='number' id='truskawki' name='truskawkicena' value={this.state.truskawkicena} onChange={this.handleChange} />
                        </label>

                        <label htmlFor='cukier'>Cena za 1 kg cukru:
                            <input type='number' id='cukier' name='cukiercena' value={this.state.cukiercena} onChange={this.handleChange} />
                        </label>

                        <label htmlFor='owoce'>Ile kg owoców:
                            <input type='number' id='owoce' name='owocecena' value={this.state.owocecena} onChange={this.handleChange} />
                        </label>
                        <br />

                        <label htmlFor='energia'>Cena za 1kWg:
                            <input type='number' id='energia' name='energiacena' value={this.state.energiacena} onChange={this.handleChange} step={0.01} precision={2} />
                        </label>

                        <label htmlFor='czas'>Cza przygotowania:
                            <input type='number' id='czas' name='czascena' value={this.state.czascena} onChange={this.handleChange} step={0.01} precision={2} readOnly />
                        </label>
                        <label htmlFor='moc'>Moc grzewcza:
                            <input type='number' id='moc' name='moccena' value={this.state.moccena} onChange={this.handleChange} step={0.01} precision={2} readOnly />
                        </label>
                        <br />
                        <label htmlFor='sloiki'> Czy masz własne słoiki?
                            <input id='sloiki' type='checkbox' name='sloiki' checked={this.state.sloiki} onChange={this.handleChange} />
                        </label>
                        <br />
                        <button>Oblicz opłacalność</button>
                    </form>


                </div>
            </div >
        )
    }
}
