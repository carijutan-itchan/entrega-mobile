import { FC, ReactNode } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {
  value?: string;
  onFocus?: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  onChangeText?: (text: string) => void;
  placeholderText?: string;
  iconComponent?: ReactNode;
  searchBoxOnPress?: () => void;
};

export const SearchBox: FC<Props> = ({
  value,
  iconName="md-search-outline",
  iconSize=20,
  iconColor="black",
  onChangeText,
  placeholderText="What are you looking for?",
  searchBoxOnPress,
}) => {

  const renderInput = () => {
    return (
      <TextInput
        value={value}
        autoFocus={false}
        onChangeText={onChangeText}
        placeholder={placeholderText}
        style={{
          left: 15,
          fontSize: 15,
          width: "100%"
        }}
      />
    );
  }

  return(
    <TouchableOpacity
      onPress={searchBoxOnPress}
      style={{
        padding: 6,
        alignItems: "center",
        width: "90%",
        justifyContent: "center",
        height: 30,
        borderRadius: 8,
        backgroundColor: "#f5f5f5"
      }}
    >
      <View style={{
        alignItems: "center",
        flexDirection: "row",
      }}>
        <Ionicons 
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={{left: 10}}
        />
        {renderInput()}
      </View>
    </TouchableOpacity>

  );
}