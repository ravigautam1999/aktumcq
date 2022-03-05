/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Dc from './pages/dc';
import Ip from './pages/ip';
import Ml from './pages/ml';
import Home from './pages/home';
import AddDataPage from './pages/addDataPage';
import AddDataDC from './pages/addDataDC';
import AddDataIP from './pages/addDataIP';
import AddDataML from './pages/addDataML';
import Shome from './pages/shome';
import Feedback from './pages/feedback';




const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
        />
        <Stack.Screen
          name="DCScreen"
          component={Dc}

        />

        <Stack.Screen
          name="IPScreen"
          component={Ip}

        />

        <Stack.Screen
          name="MLScreen"
          component={Ml}

        />

        <Stack.Screen
          name="addDataMLScreen"
          component={AddDataML}

        />


        <Stack.Screen
          name="addDataIPScreen"
          component={AddDataIP}

        />


        <Stack.Screen
          name="addDataDCScreen"
          component={AddDataDC}

        />


        <Stack.Screen
          name="addDataScreen"
          component={AddDataPage}

        />

       <Stack.Screen
          name="Shome"
          component={Shome}

        />
        <Stack.Screen
          name="feedback"
          component={Feedback}

        />
       

          
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
