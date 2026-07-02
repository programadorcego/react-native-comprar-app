import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type ButtonProps = PressableProps & {
    title: string,
};

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <Pressable style={styles.container} accessibilityRole="button" {...rest}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}