/* eslint-disable prettier/prettier */
import React from 'react'
// eslint-disable-next-line prettier/prettier
import { View, Text } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
function Feedback() {
    return (
        <View style={{flex:1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1}}><TouchableOpacity style={{flex: 1}}>
              <View style={{flex: 1, backgroundColor: Colors.brown100}} ><Text>hello</Text></View>
              <View style={{flex: 1, backgroundColor: Colors.brown200}} ><Text>hello</Text></View>
              <View style={{flex: 1, backgroundColor: Colors.brown400}} ><Text>hello</Text></View>
              <View style={{flex: 1, backgroundColor: Colors.brown500}} ><Text>hello</Text></View>
              <View style={{flex: 1, backgroundColor: Colors.brown600}} ><Text>hello</Text></View>
          </TouchableOpacity></View> 
          <View style={{flex: 1}}><TouchableOpacity>
           <Text>hello</Text>
          </TouchableOpacity></View> 
          




           
        </ScrollView>
          
      </View>
    )
}

export default Feedback
