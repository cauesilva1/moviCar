import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";



function Login({ navigation }: { navigation: any }) {

  const handleRegisterPress = () => {
    navigation.navigate('Register'); // Navega para a tela Register
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.texticial}>MoviCar</Text>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#F1F8F9"
              placeholder="Digite seu nome"
            />
          </View>

          <View>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#F1F8F9"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>
          Se não tem conta <Text style={styles.registerLink} onPress={handleRegisterPress}>Registre-se</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#060D0E",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    width: "80%",
  },

  texticial: {
    fontSize: 50,
    color: "#F1F8F9",
    textShadowColor: "#006270",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 4,
  },
  formContainer: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1CD3EB",
    marginTop: 20,
    width: "100%",
    height: 516,
    justifyContent: "center",
    gap: 40,
  },

  label: {
    color: "#F1F8F9",
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#278490",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },

  button: {
    backgroundColor: "#1CD3EB",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#000000",
    fontWeight: "bold",
  },

  registerText: {
    color: "#F1F8F9",
    textAlign: "center",
    marginTop: 20,
  },
  registerLink: {
    color: "#1CD3EB",
    textDecorationLine: "underline",
  },
});

export default Login;
