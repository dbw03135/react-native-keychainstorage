import AsyncStorage from '@react-native-async-storage/async-storage'
import { setGenericPassword, getGenericPassword, resetGenericPassword } from 'react-native-keychain'

export default {
  async getAllKeys(callback) {
    try {
      const keys = await AsyncStorage.getAllKeys()
      if (callback) {
        callback(null, keys)
      }
      return keys
    } catch (error) {
      callback(error)
      throw error
    }
  },
  async getItem(key, callback) {
    try {
      const { password } = await getGenericPassword(key) || null
      if (callback) {
        callback(null, password)
      }
      return password
    } catch (error) {
      if (callback) {
        callback(error)
      }
    }
  },
  async setItem(key, value, callback) {
    try {
      await Promise.all([
        AsyncStorage.setItem(key, key),
        setGenericPassword('user', value, key)
      ])
      await setGenericPassword('user', value, key)
      if (callback) {
        callback(null)
      }
    } catch (error) {
      if (callback) {
        callback(error)
      }
      throw error
    }
  },
  async removeItem(key, callback) {
    try {
      await Promise.all([
        AsyncStorage.removeItem(key),
        resetGenericPassword(key)
      ])
      if (callback) {
        callback(null)
      }
    } catch (error) {
      if (callback) {
        callback(error)
      }
      throw error
    }
  }
}
