import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";
import Demo from "./Demo";
const logo = require("./assets/adaptive-icon.png" );

export default function App () {
  return ( 
    <View style={{flex: 1, backgroundColor: "plum", padding: 50 }}>
  <ScrollView> 
  <View style={{height: 150, width: 150, backgroundColor: "lightblue"}}></View>
  <View style={{height: 150, width: 150, backgroundColor: "lightgreen"}}></View>
  <Text style={{color: "white"}}> Hi I am  khajavali</Text>
  <Pressable onPress={() => console.log("imagge pressed")}>
  <Image source={logo} style={{height: 150, width: 150}}></Image>
  </Pressable>
  <Text>
            At age 16, Ronaldo was promoted from Sporting's youth team by first-team manager 
            László Bölöni, who was impressed with his dribbling.He subsequently became 
            the first player to play for the club's under-16, under-17 and under-18 teams, the 
            B team and the first team, all within a single season. A year later, on 29 September
            2002, Ronaldo made his debut in the Primeira Liga, against Braga and on 7 October, he 
            scored two goals against Moreirense in their 3–0 win. Over the course of the 2002–03 
            season, his representatives suggested the player to Liverpool manager Gérard Houllier 
            and Barcelona president Joan Laporta. Manager Arsène Wenger, who was interested in 
            signing Ronaldo, met with him at Arsenal's stadium in November to discuss a possible transfer.
  </Text>
  <Image source={logo} style={{height: 150, width: 150}}></Image>
  <Text>
            At age 16, Ronaldo was promoted from Sporting's youth team by first-team manager 
            László Bölöni, who was impressed with his dribbling.He subsequently became 
            the first player to play for the club's under-16, under-17 and under-18 teams, the 
            B team and the first team, all within a single season. A year later, on 29 September
            2002, Ronaldo made his debut in the Primeira Liga, against Braga and on 7 October, he 
            scored two goals against Moreirense in their 3–0 win. Over the course of the 2002–03 
            season, his representatives suggested the player to Liverpool manager Gérard Houllier 
            and Barcelona president Joan Laporta. Manager Arsène Wenger, who was interested in 
            signing Ronaldo, met with him at Arsenal's stadium in November to discuss a possible transfer.
  </Text>

  <Button title="Submit" onPress={ () => console.log("Button pressed")} color="midnightblue" />
  </ScrollView>
  </View>
  );
}

< Demo />