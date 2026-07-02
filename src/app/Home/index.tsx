import { Image, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function Home() {
    return (
        <View style={styles.container}>
            <Input placeholder="O que deseja comprar?" />

            <Image source={require("@/assets/logo.png")} style={styles.logo} />
            
            <Button title="Entrar" />
        </View>
    );
}