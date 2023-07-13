/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {FC} from 'react';
import AppNavigation from './navigation/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: FC = () => {
  return(
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  )
}

export default App;