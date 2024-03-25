import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";



export default function Register({ navigation }: { navigation: any }) {

    const handleRegisterPress = () => {
        navigation.navigate('Login'); // Navega para a tela Register
      };
    
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>   

        <View style={styles.titleContainer}>
        <AntDesign name="doubleleft" size={50} color="#F1F8F9" onPress={handleRegisterPress}/>
        <Text style={styles.texticial}>MoviCar</Text>
        </View>

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
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#F1F8F9"
              placeholder="Digite seu email"
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

          <View>
            <Text style={styles.label}>Confirme sua senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="confirme sua senha"
              placeholderTextColor="#F1F8F9"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
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

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "90%",
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
    gap: 20,
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

