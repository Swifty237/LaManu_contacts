import { StyleSheet, View, ScrollView } from "react-native";
import { Header, SearchBar, ListItem, Avatar } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
    const list = [
        {
          name: "Amy Farha",
          avatar: "AF",
          subtitle: "Vice President",
        },
        {
          name: "Chris Jackson",
          avatar: "CJ",
          subtitle: "Vice Chairman"
        },
        {
          name: "John Doe",
          avatar: "JD",
          subtitle: "Sans emploi"
        },
        {
          name: "Alain Decayeux",
          avatar: "AD",
          subtitle: "Apprenant"
        },
        {
          name: "Andre Mcq",
          avatar: "AM",
          subtitle: "Apprenant"
        },
        {
          name: "Aurore Sifflet",
          avatar: "AS",
          subtitle: "Apprenant"
        },
        {
          name: "Prem Balagourou",
          avatar: "PB",
          subtitle: "Apprenant"
        },
        {
          name: "Yannick Kamdem",
          avatar: "YK",
          subtitle: "Apprenant"
        },
        {
          name: "Romain Chilot",
          avatar: "RC",
          subtitle: "Apprenant"
        }
    ];
  
    return (
        <SafeAreaProvider>
              <Header leftComponent={{icon: "menu", color: "#fff"}} centerComponent={{ text: "Apprenants de la Manu", style: styles.heading }}/>
              <SearchBar placeholder="ex. John DOE" containerStyle={{backgroundColor: "transparent"}} inputContainerStyle={{backgroundColor: "lightgrey"}}/>
              <ScrollView>
                  {
                      list.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar rounded={true} size={60} title={l.avatar} titleStyle={{fontSize: 25, color: "black"}} containerStyle={{backgroundColor: "lightgrey"}}/>
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron size={60}/>
                        </ListItem>
                      ))
                  }
              </ScrollView>
        </SafeAreaProvider>
)};

const styles = StyleSheet.create({
heading: {
  color: "white",
  fontSize: 17,
  fontWeight: "bold"
},

view: {
  margin: 10
}
});
