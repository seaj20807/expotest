import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [message, setMessage] = useState('');

  const showAlert = () => {
    Alert.alert('Hello', 'Syötit tekstin: ' + message);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={{ width: 200, borderColor: 'grey', borderWidth: 1 }}
        onChangeText={ text => setMessage(text) } 
      />
      <Button title="Press me" onPress={showAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
