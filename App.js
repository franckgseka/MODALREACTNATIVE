/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { SafeAreaView, Text, useColorScheme, Button } from 'react-native';
import MyModal from './src/components/MyModal';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundStyle = {
    backgroundColor: 
    isModalOpen ? isDarkMode ? '#ffffff30' : 'gray'
    : isDarkMode ? '#000' : '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={textStyle}>hello world</Text>
      <Button title="Open Modal" onPress={() => setIsModalOpen(!isModalOpen)}/>
      <MyModal
        isDarkMode={isDarkMode}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </SafeAreaView>
  );
};

export default App;
