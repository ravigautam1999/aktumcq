/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native';

const Home = ({navigation}) => {
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
                        
                        onPress={() => navigation.navigate("DCScreen")}
                        
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
                        onPress={() => navigation.navigate("IPScreen")}
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
                        onPress={() => navigation.navigate("MLScreen")}
                        >
                        <Text style={{alignSelf:'center', textAlign:'center', alignContent:'center', justifyContent:'center', fontSize: 30}}>Machine Learning</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button title="Add Data" onPress={() => navigation.navigate('addDataScreen')}/>
            <Button title="Go to Shome" onPress={() => navigation.navigate('Shome')}/>
            <Button title="Go to feedback" onPress={() => navigation.navigate('feedback')}/>
        </View>

        
    )
}

export default Home;
