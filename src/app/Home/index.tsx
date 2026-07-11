import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS = [FilterStatus.DONE, FilterStatus.PENDING];

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/logo.png")} style={styles.logo} />

            <View style={styles.form}>
                <Input placeholder="O que precisa comprar?" />

                <Button title="Entrar" />
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    {FILTER_STATUS.map(status => (
                        <Filter key={status} status={status} isActive />
                    ))}

                    <Pressable style={styles.clearButton} accessibilityRole="button">
                        <Text style={styles.clearText}>Limpar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}