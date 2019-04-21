import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableHighlight } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('HomeStack')}><Text>Home</Text></TouchableHighlight>
      </View>
    )
  }
}

