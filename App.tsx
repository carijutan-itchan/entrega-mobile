/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => { 

  useEffect(() => { 
    SplashScreen.hide();
  }, [])

  return (
    <>
      <SafeAreaView>
        <Text>
          Chupapi Munyanyo
        </Text>
      </SafeAreaView>
    </>
  )
}

export default App;
