/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

function Shome() {
    return (
        <View>
          <ScrollView style={{}}>
             <TouchableOpacity style={{
                 borderWidth: 1,
                 marginTop: 20,
                 marginLeft: 12,
                 marginRight: 12,

                 borderRadius: 8,
                 justifyContent:'center',
                 alignItems: 'center',
                 borderColor: 'black',
                 textShadowColor: 'black', 
                 textShadowOffset: { width: 4, height: 4 },
                 textShadowRadius: 10, 
                


                 }}>
               <View style={{
                   margin: 5,
                   backgroundColor:'green',
                   padding: 10,
                   borderRadius: 8,
               }}>
               <View style={{justifyContent: 'center', alignItems:'center', padding: 5}}>
                   <Text style={{fontSize: 20}}>Feedback</Text>
               </View>
                <View
                style={{
                    borderBottomColor: 'black',
                    borderWidth: 0.5,
                    marginBottom: 10
                   
                }}
                />
               <View >
                   <Text>This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.</Text>
               </View>
               <View style={{justifyContent:'flex-end', alignSelf:'flex-end', margin: 4, padding: 4}}>
                   <Text>Sent by- Harishikesh kedar</Text>
                   <Text>Posted on - 23rd july 2021</Text>
               </View>
               </View>
             </TouchableOpacity>


             <TouchableOpacity style={{
                 borderWidth: 1,
                 marginTop: 20,
                 marginLeft: 12,
                 marginRight: 12,

                 borderRadius: 8,
                 justifyContent:'center',
                 alignItems: 'center',
                 borderColor: 'black',
                 textShadowColor: 'black', 
                 textShadowOffset: { width: 4, height: 4 },
                 textShadowRadius: 10, 
                


                 }}>
               <View style={{
                   margin: 5,
                   backgroundColor:'green',
                   padding: 10,
                   borderRadius: 8,
               }}>
               <View style={{justifyContent: 'center', alignItems:'center', padding: 5}}>
                   <Text style={{fontSize: 20}}>Feedback</Text>
               </View>
                <View
                style={{
                    borderBottomColor: 'black',
                    borderWidth: 0.5,
                    marginBottom: 10
                   
                }}
                />
               <View >
                   <Text>This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.</Text>
               </View>
               <View style={{justifyContent:'flex-end', alignSelf:'flex-end', margin: 4, padding: 4}}>
                   <Text>Sent by- Harishikesh kedar</Text>
                   <Text>Posted on - 23rd july 2021</Text>
               </View>
               </View>
             </TouchableOpacity>



             <TouchableOpacity style={{
                 borderWidth: 1,
                 marginTop: 20,
                 marginLeft: 12,
                 marginRight: 12,

                 borderRadius: 8,
                 justifyContent:'center',
                 alignItems: 'center',
                 borderColor: 'black',
                 textShadowColor: 'black', 
                 textShadowOffset: { width: 4, height: 4 },
                 textShadowRadius: 10, 
                


                 }}>
               <View style={{
                   margin: 5,
                   backgroundColor:'green',
                   padding: 10,
                   borderRadius: 8,
               }}>
               <View style={{justifyContent: 'center', alignItems:'center', padding: 5}}>
                   <Text style={{fontSize: 20}}>Feedback</Text>
               </View>
                <View
                style={{
                    borderBottomColor: 'black',
                    borderWidth: 0.5,
                    marginBottom: 10
                   
                }}
                />
               <View >
                   <Text>This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.This is the feedback area.</Text>
               </View>
               <View style={{justifyContent:'flex-end', alignSelf:'flex-end', margin: 4, padding: 4}}>
                   <Text>Sent by- Harishikesh kedar</Text>
                   <Text>Posted on - 23rd july 2021</Text>
               </View>
               </View>
             </TouchableOpacity>
          </ScrollView>
            
        </View>
    )
}

export default Shome
