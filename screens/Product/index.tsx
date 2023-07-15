import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ElevatedList } from "../../components/ElevatedList/ElavatedList";

export const Product: FC = () => {
  return(
    <SafeAreaView style={{backgroundColor: "white"}} >
      <ElevatedList />
    </SafeAreaView>
  )
}