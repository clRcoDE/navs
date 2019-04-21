import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableHighlight } from 'react-native'

export default class CustomeDrawer extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('setting')}><Text>setting</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('about')}><Text>about</Text></TouchableHighlight>
      </View>
    )
  }
}

