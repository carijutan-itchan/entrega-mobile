import { FC } from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LoginScreen } from '../screens/Login';
import { ShopScreen } from "../screens/Shops";
// import { Home } from '../screens/Home';
import { Product } from "../screens/Product";
import { ShopDetails } from "../screens/Shops/ShopDetails";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { TextInput } from "react-native";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({navigation, route}) => ({
      headerTitle: () => {
        return <SearchBox searchBoxOnPress={() => navigation.navigate('Login')}/> 
      },
      tabBarIcon: ({focused, size, color}) => {
        let iconName: string = '';

        switch (route.name) {
          case 'Product':
            iconName = focused
                ? 'home-variant'
                : 'home-outline';
            break;
          case 'Shops':
            iconName = focused
                ? 'shopping'
                : 'shopping-outline';
            break;
        }
        
        return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name='Product' component={Product} options={{ 
        tabBarLabel: 'Home'
      }} />
      <Tab.Screen name='Shops' component={ShopScreen} options={{ 
        tabBarLabel: 'Shops'
      }} />
    </Tab.Navigator>
  );
}

const MainNavigation: FC = () => {
  return(
    <Stack.Navigator screenOptions={{
      animation: 'none'
    }}>
      <Stack.Screen 
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="ShopDetails" 
        component={ShopDetails}
        />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        />
    </Stack.Navigator>
  )
}

export default MainNavigation;