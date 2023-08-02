import { View, ScrollView, Image } from "react-native";
const logo = require("./assets/adaptive-icon.png");
export default function () {
    return (
        <View style={{flex: 1, backgroundColor: "plum", padding: 50}}>
            <Image source={logo} style={{width: 300, height: 300 }}></Image>
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
            <Image source={logo} style={{width: 300, height: 300 }}></Image>
            <ScrollView></ScrollView>
        </View>
    );
}