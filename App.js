import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Экраны
import RegistrationMenu from './RegistrationMenu'; // Импорт компонента меню регистрации

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // скрываем заголовок для экрана Home
        />
        <Stack.Screen 
          name="RegistrationMenu" 
          component={RegistrationMenu} 
          options={{ headerShown: false }} // скрываем заголовок для экрана RegistrationMenu
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleStartChat = () => {
    // Переход в меню регистрации
    navigation.navigate('RegistrationMenu');
  };

  // Пути к изображениям для фона
  const backgroundImagePaths = [
    require('./image/logo.png'), 
    require('./image/logo.png'),
    require('./image/logo.png'),
    require('./image/logo.png'),
  ];

  return (
    <View style={styles.container}>
      {/* Рендеринг фона */}
      {backgroundImagePaths.map((imagePath, index) => (
        <Image 
          key={index} 
          source={imagePath} 
          style={[
            styles.backgroundImage, 
            index === 0 ? styles.logo1 : index === 1 ? styles.logo2 : index === 2 ? styles.logo3 : styles.logo4 // Отображение элементов логотипа 
          ]} 
        />
      ))}
      <Text style={styles.welcomeText}>Добро пожаловать в ChelChat!</Text>
      <TouchableOpacity style={styles.startChatButton} onPress={handleStartChat}>
        <Text style={styles.startChatButtonText}>Начать общение</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A398A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute', // Текст поверх изображений
  },
  startChatButton: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 64,
  },
  startChatButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Чтобы изображения занимали весь экран
    resizeMode: 'cover', // Чтобы изображения заполняли весь экран без искажения
    opacity: 0.6, // Уменьшаем прозрачность для создания эффекта фона
  },
  logo1: {
    position: 'absolute',
    width: 300,
    height: 200,
    top: -10, 
    left: -60, 
    transform: [{ rotate: '-35deg' },{ scale: 0.7 }],
  },
  logo2: {
    position: 'absolute',
    width: 300,
    height: 200,
    left:200, 
    top: 180, 
    transform: [{ rotate: '170deg' },{ scale: 0.7 }],
  },
  logo3: {
    position: 'absolute',
    width: 300,
    height: 200,
    left:-120, 
    top:500, 
    transform: [{ rotate: '235deg' },{ scale: 0.7 }],
  },
  logo4: {
    position: 'absolute',
    width: 300,
    height: 200,
    left:200, 
    top:720, 
    transform: [{ rotate: '-30deg' },{ scale: 0.7 }],
  },
});
