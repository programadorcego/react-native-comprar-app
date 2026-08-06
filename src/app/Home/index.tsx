import { FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS = [FilterStatus.DONE, FilterStatus.PENDING];

const items = [
    {
        id: "1",
        status: FilterStatus.DONE,
        description: "1 Pacote de Café"
    },

    {
        id: "2",
        status: FilterStatus.PENDING,
        description: "2 Pacotes de Macarrão"
    },

    {
        id: "3",
        status: FilterStatus.PENDING,
        description: "3 Pacotes de Bolacha"
    },
];

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

                <FlatList
                    data={items}
                    keyExtractor={items => items.id}
                    renderItem={({ item }) => (
                        <Item
                            data={item}
                            onStatus={() => console.log("Trocar status")}
                            onRemove={() => console.log("Remover")}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
                />
            </View>
        </View>
    );
}