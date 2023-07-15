import { FC } from "react";
import { SearchBox } from "../SearchBox/SearchBox";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {
  navigation: any;
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
  }
})

export const Header: FC<Props> = ({navigation}) => {

  return (
    <View style={style.container}>
      <SearchBox 
        searchBoxOnPress={() => navigation.navigate('Login')}
      />
      <Pressable onPress={() => navigation.navigate('Cart')}>
        <Ionicons 
          name="cart-outline" 
          size={28} 
          color={"black"}
        />
      </Pressable>
    </View>
  )
}