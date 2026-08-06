import { FilterStatus } from "@/types/FilterStatus"
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";
import { Trash2 } from "lucide-react-native";

type ItemData = {
    status: FilterStatus,
    description: string,
}

type ItemProps = {
    data: ItemData,
    onStatus: () => void,
    onRemove: () => void,
}

export function Item({ data, onRemove, onStatus }: ItemProps) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onStatus} accessibilityLabel={`${data.description} (${data.status === FilterStatus.DONE ? `Comprado` : `Pendente`})`}>
                <StatusIcon status={data.status} />
            </Pressable>

            <Text style={styles.description}>{data.description}</Text>

            <Pressable onPress={onRemove} accessibilityRole="button" accessibilityLabel={`Remover ${data.description}`}>
                <Trash2 size={18} color="#828282" />
            </Pressable>
        </View>
    );
}