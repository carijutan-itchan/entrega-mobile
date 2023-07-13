import { FC } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ElevatedList } from "../../components/ElevatedList/ElavatedList";

export const Product: FC = () => {
  return(
    <SafeAreaView>
      <ElevatedList />
    </SafeAreaView>
  )
}