import { FilterStatus } from "@/types/FilterStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_STORAGE_KEY = "@comprar:items";

export type ItemStorage = {
    id: string,
    description: string,
    status: FilterStatus,
}

async function get(): Promise<ItemStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

        return storage ? JSON.parse(storage) : [];
    } catch(err) {
        throw new Error(`GET_ITEMS: ${err}`);
    }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
    const items = await get();

    return items.filter(item => item.status === status);
}

export const itemsStorage = {
    get,
    getByStatus,
};