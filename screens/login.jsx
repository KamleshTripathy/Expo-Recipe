import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AuthContext } from "../context/authContext";
import { useDarkMode } from "../context/darkmodeContext";
import CustomTextInput from "../components/customTextinput";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const { isDarkMode } = useDarkMode();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const isSuccess = login(username, password);
    if (isSuccess) {
      navigation.navigate("Main");
    } else {
      Alert.alert("Error", "Invalid credentials. Please try again.");
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Text style={[styles.header, isDarkMode && styles.darkModeHeader]}>
        Login
      </Text>
      <CustomTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonpress} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>
        Don't have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Register here
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    marginTop: 20,
  },
  darkText: {
    color: "#fff",
  },
  link: {
    color: "green",
    textDecorationLine: "none",
  },
  buttonpress: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  darkModeContainer: {
    backgroundColor: "black",
  },
  darkModeHeader: {
    color: "#fff",
  },
});

export default LoginScreen;
