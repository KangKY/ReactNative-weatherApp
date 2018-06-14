import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from "@expo/vector-icons";
import PropTypes from "prop-types";

/*export default class Weather extends React.Component {
    render() {
        return(
        <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name="ios-rainy" />
                <Text style={styles.temparature}>35º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>지영이 멍충이^>^!</Text>
                <Text style={styles.subtitle}>For more info look outside</Text>
            </View>
        </LinearGradient>
        );
    }
}*/

const weatherCases = {
    Rain : {
        colors : ['#00C6FB', '#005BEA'],
        title : "비가 오는 날엔~",
        subtitle : "막걸리죠.",
        icon : "ios-rainy"
    },
    Clear: {
        colors : ['#FEF253', '#FF7300'],
        title : "맑음",
        subtitle : "나들이 가기 좋은 날이네요.",
        icon : "ios-sunny"
    },
    Thunderstorm: {
        colors : ['#00ECBC', '#007ADF'],
        title : "천둥번개",
        subtitle : "후덜덜",
        icon : "ios-thunderstorm"
    },
    Clouds: {
        colors : ['#D7D2CC', '#304352'],
        title : "흐림",
        subtitle : "기분도 꿀꿀",
        icon : "ios-clouds"
    },
    Snow: {
        colors : ['#7DE2FC', '#B9B6E5'],
        title : "눈",
        subtitle : "눈 사람 만들러 가볼까요?",
        icon : "ios-snow"
    },
    Drizzle: {
        colors : ['#89F7FE', '#66A6FF'],
        title : "이슬비",
        subtitle : "이슬비가 내리는 오늘은",
        icon : "ios-rainy"
    }
}



function Weather({weatherName,  temp }) {
    return (
        <LinearGradient 
                colors={weatherCases[weatherName].colors} 
                style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name="ios-rainy" />
                <Text style={styles.temparature}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired
}


export default Weather;

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    upper:{
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "transparent"
    },
    temparature :  {
        fontSize : 48,
        backgroundColor : "transparent",
        color:"white",
        marginBottom: 24
    },
    lower : {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : "flex-end",
        paddingLeft:25
    },
    title : {
        fontSize : 38,
        backgroundColor : "transparent",
        color:"white",
        marginBottom: 10,
        fontWeight : "300"
    },
    subtitle : {
        fontSize : 24,
        backgroundColor : "transparent",
        color:"white",
        marginBottom: 24
    }
})