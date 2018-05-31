import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  state = {
    isLoaded : false
  }
  
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? null : <View style={styles.loading}>
          <ActivityIndicator />
          <Text style={styles.loadingText}> 날씨 데이터 조회중</Text>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
