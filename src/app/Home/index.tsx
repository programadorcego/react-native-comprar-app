import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/logo.png")} style={styles.logo} />
            <Text style={styles.text}>Olá, mundo!</Text>
        </View>
    );
}