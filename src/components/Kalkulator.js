import React, { Component } from 'react'
import "../css/Kalkulator.css";
import "../App.css";





export default class Kalkulator extends Component {

    state = {

        truskawkicena: '',
        cukiercena: '3.20',
        energiacena: '0.74',
        czascena: '2',
        moccena: '1',
    }

    handleChange = (e) => {
        console.log(e.target.type);
        console.log(e.target.name);
        console.log(e.target.value);
        // const name = e.target.name;
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            // truskawkicena: value,
            [name]: value,
        })

    }

    render() {
        return (
            <div className="Elements__conteiner">
                <div className='Kalkulator__conteiner'>
                    <p>Kaklulator dzęmiku</p>

                    <form >
                        <label htmlFor='truskawki'>Cena za 1 kg Truskawek:
                            <input type="number" id='truskawki' name='truskawkicena' value={this.state.truskawkicena} onChange={this.handleChange} />
                        </label>

                        <label htmlFor='cukier'>Cena za 1 kg cukru:
                            <input type="number" id='cukier' name='cukiercena' value={this.state.cukiercena} onChange={this.handleChange} />
                        </label>

                        <label htmlFor='energia'>Cena za 1kWg:
                            <input type="number" id='energia' name='energiacena' value={this.state.energiacena} onChange={this.handleChange} step={0.01} precision={2} />
                        </label>

                        <label htmlFor='czas'>Cza przygotowania:
                            <input type="number" id='czas' name='czascena' value={this.state.czascena} onChange={this.handleChange} step={0.01} precision={2} readOnly />
                        </label>
                        <label htmlFor='moc'>Moc grzewcza:
                            <input type="number" id='moc' name='moccena' value={this.state.moccena} onChange={this.handleChange} step={0.01} precision={2} readOnly />
                        </label>
                        <br />
                        <button>Oblicz opłacalność</button>



                    </form>


                </div>
            </div >
        )
    }
}
