import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "f67859a6e7bb3f9579f022f1c3443ad7";

export default class App extends React.Component {
  state = {
    isLoaded : false,
    error : null,
    name:null,
    temperature : null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error);
        this.setState({
          error : error
        })
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature : json.main.temp,
        name : json.weather[0].main,
        isLoaded : true
      });
    });
  }
  
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    console.log(temperature);
    return (
      <View style={styles.container}>
         <StatusBar hidden />
        {isLoaded ? ( 
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} /> 
        ) : (<View style={styles.loading}>
          <ActivityIndicator />
          <Text style={styles.loadingText}> 날씨 데이터 조회중</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
        )}
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText : {
    color : "red",
    backgroundColor : "transparent"
  },
  loading : {
    flex : 1,
    backgroundColor : '#FDF6AA',
    alignItems : 'center',
    justifyContent : "center"
  },
  loadingText : {
    fontSize : 30
  }
});
