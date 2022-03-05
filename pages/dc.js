/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native';
import {SearchBar} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';




const Dc = () => {

    const [hide, setHide] = useState(true)
    const [searchText, setSearchText] = useState("")
    const [listData, setListData] = useState([])



  const getData = async () =>{  
   var v = await firestore()
   .collection('mcq')
   .doc('DC')
   .collection('question')
   .get()
   setListData(v.docs.map((t) => t.data()))

   console.log(listData)
  }





    return (
        <View style={{flex:1, flexDirection: 'column'}}>
           <SearchBar
                  placeholder="search..."
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
              />
              <Button title="get" onPress={getData} />
            <ScrollView style={{flex: 1, backgroundColor: 'yellow', padding: 4, margin:5}}>
             {listData.filter((sr) => ((sr.qus.toLowerCase().includes(searchText.toLowerCase())) || sr.A.toLowerCase().includes(searchText.toLowerCase()) || sr.B.toLowerCase().includes(searchText.toLowerCase()) || sr.C.toLowerCase().includes(searchText.toLowerCase()) || sr.D.toLowerCase().includes(searchText.toLowerCase())  )).map((it) => 
                <View key={it.qus+it.ans + it.A + it.B + it.C + it.D }>
                   <TouchableOpacity key={it.A + it.B + it.C + it.D + it.qus + it.ans } style={{margin:4, padding: 4, backgroundColor: 'green', borderRadius: 8}}>
                    <View 
                    key={it.ans + it.A + it.B + it.C + it.D + it.qus  }
                    style={{margin: 2, padding: 4}}>
                        <View style={{margin: 2, padding: 1}}>
                            <Text>Qus: {it.qus}</Text>
                       </View>
                       {/* <View style={{margin: 2, padding: 1}}>
                            <Text>A: {it.A}</Text>
                       </View>
                       <View style={{margin: 2, padding: 1}}>
                            <Text>B: {it.B}</Text>
                       </View>
                       <View style={{margin: 2, padding: 1}}>
                            <Text>C: {it.C}</Text>
                       </View>
                       <View style={{margin: 2, padding: 1}}>
                            <Text>D: {it.D}</Text>
                       </View> */}
                       <View  style={{margin: 2, padding: 1}}>
                            <Text  style={{alignSelf: 'center'}}>Ans: {it.ans}</Text>
                       </View>
                       {/* <View style={{margin: 2, padding: 4}}>
                            <TouchableOpacity onPress={() => setHide(!hide)} style={{alignSelf: 'center', backgroundColor: 'red', padding: 5, borderRadius: 12}}>
                                <Text>Show Ans</Text>
                            </TouchableOpacity>
                       </View> */}
                    </View>
                       
                   </TouchableOpacity>
               </View>

             )}
               
            </ScrollView>
        </View>
    )
}

export default Dc;
