import React from 'react';
import Form from './components/Form';
import FlagBlock from './components/FlagBlock';
import CountryInfo from './components/CountryInfo';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: undefined,
      capital: undefined,
      continent: undefined,
      population: undefined,
      area: undefined,
      flag: undefined,
      currency: undefined,
      error: undefined
    }
    this.gettingCountry = this.gettingCountry.bind(this);
  }

    gettingCountry = async(event, err) => {
      event.preventDefault();
      let value = event.target.elements.city.value;
      if (value === '') {
        this.setState({
          error: 'Введите название страны'
        })
      } else {
        try {
          const info = await fetch(`https://restcountries.eu/rest/v2/name/${value}`);
          if(!info.ok) {
            throw new Error(info.statusText);
          }
          const data = await info.json();
          for (let key in data) {
            if(value === data[key]['name'] && value.length === data[key]['name'].length) {
              this.setState({
                country: data[key]['name'],
                capital: data[key]['capital'],
                continent: data[key]['region'],
                population: data[key]['population'],
                area: data[key]['area'],
                flag: data[key]['flag'],
                currency: data[key]['currencies'][0]['name'],
                error: undefined
              })
            } else {
              this.setState({
                country: undefined,
                capital: undefined,
                continent: undefined,
                population: undefined,
                area: undefined,
                flag: undefined,
                currency: undefined,
                error: 'Введите название страны корректно. Рекомендую вам посмотреть правильное и полное название в wikipedia'
              })
              console.log('неккоректно');
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    }

  render() {
    return (
      <div className="App">
        <Form countryMethod={this.gettingCountry}
              error={this.state.error}
        />
        <div className="App-info">
          <FlagBlock
            flag={this.state.flag}
          />
          <CountryInfo
            country={this.state.country}
            capital={this.state.capital}
            continent={this.state.continent}
            population={this.state.population}
            area={this.state.area}
            currency={this.state.currency}
          />
        </div>
      </div>
    )
  }
}

export default App;
