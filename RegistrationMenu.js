import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegistrationMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Регистрация</Text>
      {/* Поля для ввода логина и пароля */}
      <TextInput style={styles.input} placeholder="Логин" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} />
      {/* Кнопка "Создать" */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Создать</Text>
      </TouchableOpacity>
      {/* Текстовая ссылка "Есть аккаунт?" */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginLink}>Есть аккаунт?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  createButton: {
    backgroundColor: '#5A398A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: 'black',
    fontSize: 14,
  },
});
