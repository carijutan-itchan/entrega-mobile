import { FC } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 32,
  },
});


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const ElevatedList: FC = () => {

  return(
    <View>
      {/* <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </ScrollView> */}
    </View>
  )
}