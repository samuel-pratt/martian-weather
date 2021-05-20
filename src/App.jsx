import React from 'react';
import styled from 'styled-components';

import Weather from './components/Weather';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center bottom;
  padding: 0;
  background-image: url('https://get.wallhere.com/photo/Surviving-Mars-Mars-exploration-1958349.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;
const MainContent = styled.div`
  width: 650px;
  height: 477px;
  background-color: rgba(250, 250, 250, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: auto;
  display: block;
  transform: translateY(-50px);
`;

const API_KEY = 'CqRdlF88DDuU5FlXnOX2O36jrPMidC3KOyJqG5zf';

class App extends React.Component {
  state = {
    // sol 1
    day1: 681,
    day1Temp: -56,
    day1TempHigh: 3.4,
    day1TempLow: -142.4,
    // sol 2
    day2: 680,
    day2Temp: -34,
    day2TempHigh: 2.3,
    day2TempLow: -142.4,
    // sol 3
    day3: 679,
    day3Temp: -15,
    day3TempHigh: 1.7,
    day3TempLow: -143,
    // sol 4
    day4: 678,
    day4Temp: -45,
    day4TempHigh: 15.7,
    day4TempLow: -142,
    // sol 5
    day5: 677,
    day5Temp: -23,
    day5TempHigh: 11.2,
    day5TempLow: -139.8,

    // meta
    loading: true,
    error: undefined,
  };

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.sol_keys.length === 7) {
          console.log(data);

          this.setState({
            // sol 1
            day1: data.sol_keys[0],
            day1Temp: data[data.sol_keys[0]]['AT']['av'],
            day1TempHigh: data[data.sol_keys[0]]['AT']['mx'],
            day1TempLow: data[data.sol_keys[0]]['AT']['mn'],

            // sol 2
            day2: data.sol_keys[1],
            day2Temp: data[data.sol_keys[1]]['AT']['av'],
            day2TempHigh: data[data.sol_keys[1]]['AT']['mx'],
            day2TempLow: data[data.sol_keys[1]]['AT']['mn'],

            // sol 3
            day3: data.sol_keys[2],
            day3Temp: data[data.sol_keys[2]]['AT']['av'],
            day3TempHigh: data[data.sol_keys[2]]['AT']['mx'],
            day3TempLow: data[data.sol_keys[2]]['AT']['mn'],

            // sol 4
            day4: data.sol_keys[3],
            day4Temp: data[data.sol_keys[3]]['AT']['av'],
            day4TempHigh: data[data.sol_keys[3]]['AT']['mx'],
            day4TempLow: data[data.sol_keys[3]]['AT']['mn'],

            // sol 5
            day5: data.sol_keys[4],
            day5Temp: data[data.sol_keys[4]]['AT']['av'],
            day5TempHigh: data[data.sol_keys[4]]['AT']['mx'],
            day5TempLow: data[data.sol_keys[4]]['AT']['mn'],

            loading: false,
            error: '',
          });
        } else {
          this.setState({
            loading: false,
            error: 'Weather data unavailable', // uses default data
          });
        }
      });
  }
  render() {
    return (
      <AppWrapper>
        <MainContent>
          <Weather
            // sol 1
            day1={this.state.day1}
            day1Temp={this.state.day1Temp}
            day1TempHigh={this.state.day1TempHigh}
            day1TempLow={this.state.day1TempLow}
            // sol 2
            day2={this.state.day2}
            day2Temp={this.state.day2Temp}
            day2TempHigh={this.state.day2TempHigh}
            day2TempLow={this.state.day2TempLow}
            // sol 3
            day3={this.state.day3}
            day3Temp={this.state.day3Temp}
            day3TempHigh={this.state.day3TempHigh}
            day3TempLow={this.state.day3TempLow}
            // sol 4
            day4={this.state.day4}
            day4Temp={this.state.day4Temp}
            day4TempHigh={this.state.day4TempHigh}
            day4TempLow={this.state.day4TempLow}
            // sol 5
            day5={this.state.day5}
            day5Temp={this.state.day5Temp}
            day5TempHigh={this.state.day5TempHigh}
            day5TempLow={this.state.day5TempLow}
            // meta
            error={this.state.error}
          />
        </MainContent>
      </AppWrapper>
    );
  }
}

export default App;
