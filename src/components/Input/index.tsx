import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

type InputProps = TextInputProps;

export function Input({ ...rest }:InputProps) {
    return <TextInput style={styles.container} {...rest} />
}