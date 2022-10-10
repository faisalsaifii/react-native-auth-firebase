import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View  style={styles.inputContainer}>
        <TextInput
            placeholder='Email'
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <TextInput
            placeholder='Password'
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText = {text => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => {}}>
            <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => {}}>
            <Text style={styles.buttonOutlineText}>Sign In With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => {}}>
            <Text style={styles.buttonOutlineText}>Sign In With Facebook</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer : {
      width: '80%',
    },
    input : {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer : {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button : {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
    },
    buttonText : {
      textAlign: 'center',
      color: 'white',
      fontWeight: '800'
    },
    buttonOutline : {
      backgroundColor: 'white',
      margin: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonOutlineText : {
      textAlign: 'center',
      fontWeight: '800',
      color: '#0782F9'
    },
})