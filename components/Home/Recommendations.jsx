import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile"

const Recommendations = () => {
  const navigation = useNavigation();

  const recommendations =  [
    {
        "_id": "64c631650298a05640539adc",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Kos Putra Pak Karyo",
        "location": "Keputih, Surabaya ",
        "imageUrl": "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/07/02/1791130485.jpg",
        "rating": 4.9,
        "review": "1204 Reviews"
    },
    {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "AB Kost",
        "location": "Keputih, Surabaya",
        "imageUrl": "https://media.cove.sg/2442/conversions/Cove-Cherry-Homes---Public-Area-small.jpg",
        "rating": 4.8,
        "review": "1452 Reviews"
    },
    {
        "_id": "64d09e3f364e1c37c8b4b13f",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Kos Merpati (Putri)",
        "location": "Bandung, Indonesia",
        "imageUrl": "https://2.bp.blogspot.com/-5zn7x4yrPEw/Wh9plLnQKdI/AAAAAAAAF74/46XrGqHS6cYk11OWIL9GDVeibf4vM9xVwCLcBGAs/s1600/Kost%2Bdaerah%2Bbandung.jpg",
        "rating": 4.6,
        "review": "2145 Reviews"
    },
    {
      "_id": "64d09e3f364e1c37c8b4b13e",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "title": "Kos Pak Dzaki (Putra)",
      "location": "Depok, Yogyakarta",
      "imageUrl": "https://www.99.co/id/panduan/wp-content/uploads/2023/09/20162203/Pengalaman-Cari-Kost-Murah-di-Bandung-yang-Susah-susah-Gampang-1120x630.jpg",
      "rating": 4.6,
      "review": "4139 Reviews"
  }
];

  

  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

    <FlatList 
    data={recommendations}
    horizontal
    keyExtractor={(item)=> item._id}
    contentContainerStyle={{columnGap: SIZES.medium}}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => (
        <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
    )}
    />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
