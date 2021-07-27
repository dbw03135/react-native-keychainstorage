declare module "react-native-keychainstorage" {
  interface KeychainStorage {
    getItem(key: string, callback?: (error?: Error, result?: string) => void): Promise<string | null>;
    setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<void>;
    removeItem(key: string, callback?: (error?: Error) => void): Promise<void>;
    getAllKeys(callback?: (error?: Error, keys?: string[]) => void): Promise<string[]>;
  }
  export default KeychainStorage;
}