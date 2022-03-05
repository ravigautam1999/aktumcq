/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Button,  } from 'react-native';
import  firestore  from '@react-native-firebase/firestore';


const AddDataIP = () => {
    const [qus, setQus] = useState('')
    const [OA, setOA] = useState('')
    const [OB, setOB] = useState('')
    const [OC, setOC] = useState('') 
    const [OD, setOD] = useState('')
    const [ans, setAns] = useState('')

    const onSubmit = async (Vdata) => {
       
            await firestore()
            .collection('mcq')
            .doc('IP')
            .collection('question')
            .add({
                A:OA,
                B:OB,
                C:OC,
                D:OD,
                ans:ans,
                qus:qus,

            }).then(
                ToastAndroid.show("Data Added", ToastAndroid.SHORT),
                setAns(""),
                setOA(""),
                setOB(""),
                setOC(""),
                setOD(""),
                setQus(""),
            );

           
        
           
    }
    return (
        <View style={{margin: 8, padding: 5}}>
            <View><TextInput placeholder="Qus" onChangeText={(t) => setQus(t)} style={{margin: 5, padding: 3, borderWidth: 1, borderRadius: 8}}/></View>
            <View><TextInput placeholder="Option A" onChangeText={(t) => setOA(t)} style={{margin: 5, padding: 3, borderWidth: 1, borderRadius: 8}}/></View>
            <View><TextInput placeholder="Option B" onChangeText={(t) => setOB(t)} style={{margin: 5, padding: 3, borderWidth: 1, borderRadius: 8}}/></View>
            <View><TextInput placeholder="Option C" onChangeText={(t) => setOC(t)} style={{margin: 5, padding: 3, borderWidth: 1, borderRadius: 8}}/></View>
            <View><TextInput placeholder="Option D" onChangeText={(t) => setOD(t)} style={{margin: 5, padding: 3, borderWidth: 1, borderRadius: 8}}/></View>
             <View>
              <TextInput placeholder="Option ans" onChangeText={(t) => setAns(t)} style={{margin: 5, padding: 3, borderWidth: 1, borderRadius: 8}}/> 
            </View>
            
            <Button title="Submit" onPress={onSubmit}/>
        </View>
    )
}

export default AddDataIP;
