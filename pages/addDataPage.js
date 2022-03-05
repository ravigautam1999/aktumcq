/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const AddDataPage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignContent:'center', margin:10, padding: 10}}>
                <View style={{flex:1}}>
                    <TouchableOpacity style={{
             
                        flex: 1,
                        justifyContent:'center',
                        margin: 5,
                        padding:5,
                        backgroundColor:'blue',
                        borderRadius:80,
                        shadowColor: '#000',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity:  0.4,
                        shadowRadius: 5,
                        elevation: 7,
                        
                        
                        }}
                        
                        onPress={() => navigation.navigate("addDataDCScreen")}
                        
                        >
                        <Text style={{alignSelf:'center', textAlign:'center', alignContent:'center', justifyContent:'center', fontSize: 30}}>Data Compression</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                    <TouchableOpacity style={{

                        flex: 1,
                        justifyContent:'center',
                        margin: 5,
                        padding:5,
                        backgroundColor:'blue',
                        borderRadius:80,
                        shadowColor: '#000',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity:  0.4,
                        shadowRadius: 5,
                        elevation: 7,
                        }}
                        onPress={() => navigation.navigate("addDataIPScreen")}
                        >
                        <Text style={{alignSelf:'center', textAlign:'center', alignContent:'center', justifyContent:'center', fontSize: 30}}>Image Processing</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                    <TouchableOpacity style={{

                        flex: 1,
                        justifyContent:'center',
                        margin: 5,
                        padding:5,
                        backgroundColor:'blue',
                        borderRadius:80,
                        shadowColor: '#000',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity:  0.4,
                        shadowRadius: 5,
                        elevation: 7,
                        }}
                        onPress={() => navigation.navigate("addDataMLScreen")}
                        >
                        <Text style={{alignSelf:'center', textAlign:'center', alignContent:'center', justifyContent:'center', fontSize: 30}}>Machine Learning</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AddDataPage;
