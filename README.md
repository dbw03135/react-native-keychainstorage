# react-native-keychainstorage

Easy Keychain Access for React Native ( like AsyncStorage )

## Getting Started


### Install

```
$ yarn add react-native-keychainstorage
```

or

```
$ npm install --save react-native-keychainstorage
```

### Link

See how to link "react-native-keychain"

https://github.com/oblador/react-native-keychain


## Usage

### Import

```js
import KeychainStorage from 'react-native-keychainstorage';
```

### Store data
```jsx

storeData = async () => {
  try {
    await KeychainStorage.setItem('@storage_Key', 'stored value')
  } catch (e) {
    // saving error
  }
}

```

### Read data
```jsx

getData = async () => {
  try {
    const value = await KeychainStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}

```

### Remove data
```jsx

getData = async () => {
  try {
    await KeychainStorage.removeItem('@storage_Key')
  } catch(e) {
    // error remove value
  }
}

```


## License

MIT
