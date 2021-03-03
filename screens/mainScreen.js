import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Button,Input} from "react-native-elements";
const mainScreen = () => {
  return (
    <View style={styles.container}>
    {/* <View style={styles.header}>
      <Text style={styles.header}>Balance: $500</Text>
      <Button  buttonStyle={{width: 40, height:20}} title='Settings'/>
    </View> */}
    
      <View style={styles.button}>
        <Button type='outline' buttonStyle={styles.buttons} title='Add Wallet'/>
        <Button type='outline' buttonStyle={styles.buttons}  title='Bill Payment'/>
        <Button type='outline' buttonStyle={styles.buttons}  title='E-Shopping'/>
        <Button type='outline' buttonStyle={styles.buttons}  title='Payment History'/>
        <Button type='outline' buttonStyle={styles.buttons}  title='Add Money'/>
        <Button type='outline' buttonStyle={styles.buttons}  title='Transfer'/>
      </View>

      <Button type='outline' buttonStyle={{margin:40}} title='Log out'/>
    </View>

    
  )
}

export default mainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  button:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignContent:'center',
    height:'100%',
  },
  buttons:{
    width:150,
    height:100,
    margin: 10,
  }
})
