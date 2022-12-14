//import liraries
import { StatusBar } from "expo-status-bar";
//import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

// create a component
const Signup = ({ navigation }) => {
  /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");*/

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First name"
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          //onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Surname"
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          //onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          //onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          //onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Cornfirm Password"
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          //onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCEDC8",
  },

  inputView: {
    backgroundColor: "#689F38",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
});

//make this component available to the app
export default Signup;
