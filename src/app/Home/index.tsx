import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { useEffect, useState } from "react";
import { itemsStorage, ItemStorage } from "@/storage/itemsStorage";

const FILTER_STATUS = [FilterStatus.DONE, FilterStatus.PENDING];

export function Home() {
    const [items, setItems] = useState<ItemStorage[]>([]);
    const [filter, setFilter] = useState(FilterStatus.PENDING);
    const [description, setDescription] = useState("");

    async function itemsByStatus() {
        try {
            const response = await itemsStorage.getByStatus(filter);
            setItems(response);
        } catch (err) {
            console.error(err);

            Alert.alert("Erro", "Erro ao filtrar");
        }
    }

    async function handleAdd() {
        if (!description.trim()) {
            return Alert.alert("Adicionar", "O campo não deve estar vazio!");
        }

        const newItem = {
            id: Math.random().toString().substr(2),
            description,
            status: FilterStatus.PENDING,
        };

        await itemsStorage.add(newItem);
        await itemsByStatus();

        setDescription("");
        setFilter(FilterStatus.PENDING);
    }

    useEffect(() => {
        itemsByStatus();
    }, [filter]);

    return (
        <View style={styles.container}>
            <Image source={require("@/assets/logo.png")} style={styles.logo} />

            <View style={styles.form}>
                <Input placeholder="O que precisa comprar?" onChangeText={setDescription} value={description} />

                <Button title="Adicionar" onPress={handleAdd} />
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    {FILTER_STATUS.map(status => (
                        <Filter key={status} status={status} isActive={filter === status} onPress={() => setFilter(status)} />
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