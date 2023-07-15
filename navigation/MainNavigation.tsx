import { FC } from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LoginScreen } from '../screens/Login';
import { ShopScreen } from "../screens/Shops";
import { Product } from "../screens/Product";
import { ShopDetails } from "../screens/Shops/ShopDetails";
import { Cart } from "../screens/Cart";
import { Header } from "../components/Header/Header";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({navigation, route}) => ({
      headerTitle: () => {
        return <Header navigation={navigation} />
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
          headerShown: false
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
      <Stack.Screen 
        name="Cart" 
        component={Cart}
      />
    </Stack.Navigator>
  )
}

export default MainNavigation;