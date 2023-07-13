import { FC } from "react"
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from "./MainNavigation";

const AppNavigation: FC = () => {
  return(
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default AppNavigation;