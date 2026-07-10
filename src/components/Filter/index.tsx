import { FilterStatus } from "@/types/FilterStatus";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type FilterProps = PressableProps & {
    status: FilterStatus,
    isActive: boolean
}

export function Filter({ status, isActive, ...rest }: FilterProps) {
    return (
        <Pressable
            style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
            accessibilityRole="button"
            {...rest}
        >
            <Text style={styles.title}>
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </Pressable>
    );
}