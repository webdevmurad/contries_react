import React from 'react';
import Form from './components/Form';
import FlagBlock from './components/FlagBlock';
import CountryInfo from './components/CountryInfo';

import './App.css';

class App extends React.Component {

  state = {
    country: undefined,
    capital: undefined,
    continent: undefined,
    population: undefined,
    area: undefined,
    flag: undefined,
    currency: undefined,
    error: undefined
  }

    gettingCountry = async(event) => {
      event.preventDefault();
      let value = event.target.elements.city.value;
      if (value === '') {
        this.setState({
          error: 'Введите название страны'
        })
      } else {
        const info = await fetch(`https://restcountries.eu/rest/v2/name/${value}`);
        const data = await info.json();
          data.filter((count) => {
            if(value === count['name'] && value.length === count['name'].length) {
              console.log(count['name']);
              this.setState({
                country: data[0]['name'],
                capital: data[0]['capital'],
                continent: data[0]['region'],
                population: data[0]['population'],
                area: data[0]['area'],
                flag: data[0]['flag'],
                currency: data[0]['currencies'][0]['name'],
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
          })
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
