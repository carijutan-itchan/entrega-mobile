import { FC } from "react";
import { 
  Pressable, 
  StyleSheet, 
  Image, 
  ScrollView, 
  View, 
  Text 
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 2,
  },
  cardImage: {
    height: 210,
    width: 150,
    borderRadius: 15
  },
  imageContainer: {
    margin: 8,
    width: 150
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 10,
    paddingStart: 10,
    paddingEnd: 10
  },
  title: {
    fontWeight: "700",
    fontFamily: 'Open Sans'
  },
  icon: {
    alignSelf: "flex-end",
  },
  box: {
    flex: 1,
    height: 20,
  },
  descriptionPriceContainer: {
    paddingStart: 10,
    paddingEnd: 10,
    marginBottom: 5
  }
});

type CardData = {
  source: any;
  name: string;
  description: string;
  price: string;
}

const DATA: CardData[] = [
  {
    source: require('../../assets/images/image1.jpeg'),
    name: 'Sperry',
    description: 'Any Place. Any Time. Any Condition. Be Your Best Every Time With Nike Shoes And Clothing. The Official Website. Home Of Everything',
    price: "Php 200"
  },
  {
    source: require('../../assets/images/image2.jpeg'),
    name: 'Nike Air',
    description: 'Nike. Shop The Latest Releases Today. Nike Official Site. Free Returns for Members. Google Pay Available. Apple Pay Available.',
    price: "Php 300"
  },
  {
    source: require('../../assets/images/image3.jpeg'),
    name: 'Bans',
    description: 'Old Skool Canvas Shoe',
    price: "Php 500"
  },
  {
    source: require('../../assets/images/image4.jpeg'),
    name: 'Bans',
    description: 'Old Skool Canvas Shoe',
    price: "Php 600"
  },
  {
    source: require('../../assets/images/image5.jpeg'),
    name: 'MSE',
    description: 'Old Skool Canvas Shoe',
    price: "Php 800"
  },
];

type CardProps = {
  item: CardData;
  onPress?: () => void;
}

const ItemCard = ({item}: CardProps) => (
  <Pressable>
    <View style={styles.imageContainer}>
      <Image 
        source={item.source} 
        style={styles.cardImage}
      />
      <View style={styles.titleContainer}>
        <View style={styles.box}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons 
            name="heart-outline"
            size={20}
            color={"gray"}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.descriptionPriceContainer}>
        <Text 
          numberOfLines={1} 
          ellipsizeMode="tail"
        >
          {item.description}
        </Text>
      </View>
      <View>
        <Text style={styles.descriptionPriceContainer}>
          {item.price}
        </Text>
      </View>
    </View>
  </Pressable>
)

export const ElevatedList: FC = () => {

  return(
    <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true}
    >
      {DATA.map((item, index) => 
        <ItemCard key={index} item={item} />
      )}
    </ScrollView>
  )
}