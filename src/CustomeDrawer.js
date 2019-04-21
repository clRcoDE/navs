import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableHighlight } from 'react-native'

export default class CustomeDrawer extends Component {
  
 

  render() {
    // console.warn(this.props.navigation.state.routes[0].index)
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('setting')}>
          <Text>setting</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('about')}>
          <Text>about</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

