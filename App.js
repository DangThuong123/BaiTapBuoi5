import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.block, styles.blockPurple]}>
          <Text style={styles.text}>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.block, styles.blockBlue]}>
          <Text style={styles.text}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.block, styles.blockGreen]}>
          <Text style={styles.text}>Green: #96CC96</Text>
        </View>
        <View style={[styles.block, styles.blockYellow]}>
          <Text style={styles.text}>Yellow: #F4B940</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18
  },
  block: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18
  },
  blockPurple: {
    backgroundColor: '#C9C9FF'
  },
  blockBlue: {
    backgroundColor: '#3D85C6'
  },
  blockGreen: {
    backgroundColor: '#96CC96'
  },
  blockYellow: {
    backgroundColor: '#F4B940'
  },
  text: {
    fontWeight: 'bold',
    color: 'black'
  }
})