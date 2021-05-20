import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  height: 100%;
`;

const Today = styled.div`
  width: 100%;
  text-align: left;
  font-size: 10px;
  padding-top: 30px;
  padding-left: 50px;
`;

const InlineDate = styled.div`
  * {
    display: inline;
  }

  h2 {
    display: block;
    font-size: 35px;
  }
`;

const TodayDescribe = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  padding-bottom: 25px;
  align-items: flex-start;
  h1 {
    font-size: 130px;
    flex: 130px;
    margin: 0;
    padding-left: 60px;
  }
  div {
    flex: 300px;
    padding: 60px 0 0 0;
    margin: 0;
    p {
      text-align: center;
      width: 180px;
      margin: 0 auto;
      color: #5e5e5e;
      font-size: 15px;
    }
  }
`;

const Future = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'day day2 day3 day4 day5';
  position: relative;
  justify-items: center;
  height: 100%;
  width: 787px;
  margin: 0;
  transform: translate(-50px, 0px);

  p {
    margin: 0;
    text-align: center;
  }
`;

const FutureDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
  margin-right: 30px;
  background-color: white;
  width: 100px;
  height: 100px;
  padding: 18px;
  grid-area: day;

  &:nth-child(2) {
    grid-area: day2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }

  &:nth-child(3) {
    grid-area: day3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
  &:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    grid-area: day4;
  }
  &:nth-child(5) {
    grid-area: day5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
`;

const FutureTemp = styled.div`
  position: absolute;
  bottom: 40px;
  font-weight: 800;
  font-size: 18;
  width: 75%;
  text-align: center;
`;

const FutureDay = styled.div`
  position: absolute;
  top: 40px;
  font-weight: 800;
  font-size: 20px;
  width: 75%;
  text-align: center;
`;

class Weather extends React.Component {
  render() {
    return (
      <div>
        <WeatherContainer>
          <Today>
            <InlineDate>
              <h2>sol {this.props.day1}</h2>
            </InlineDate>
            <TodayDescribe>
              <h1>{this.props.day1Temp}°</h1>
              <div>
                <p>
                  The high today is {this.props.day1TempHigh}° and the low is{' '}
                  {this.props.day1TempLow}°
                </p>
              </div>
            </TodayDescribe>
          </Today>
          <Future>
            <FutureDiv>
              {/* day 5 */}
              <FutureDay>sol {this.props.day5}</FutureDay>
              <FutureTemp>{this.props.day5Temp}</FutureTemp>
            </FutureDiv>
            <FutureDiv>
              {/* day 4 */}
              <FutureDay>sol {this.props.day4}</FutureDay>
              <FutureTemp>{this.props.day4Temp}</FutureTemp>
            </FutureDiv>
            <FutureDiv>
              {/* day 3 */}
              <FutureDay>sol {this.props.day3}</FutureDay>
              <FutureTemp>{this.props.day3Temp}</FutureTemp>
            </FutureDiv>
            <FutureDiv>
              {/* tomorrow */}
              <FutureDay>sol {this.props.day2}</FutureDay>
              <FutureTemp>{this.props.day2Temp}</FutureTemp>
            </FutureDiv>
            <FutureDiv>
              {/* today */}
              <FutureDay>sol {this.props.day1}</FutureDay>
              <FutureTemp>{this.props.day1Temp}</FutureTemp>
            </FutureDiv>
          </Future>
        </WeatherContainer>
      </div>
    );
  }
}

export default Weather;
