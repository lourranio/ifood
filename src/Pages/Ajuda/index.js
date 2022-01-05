import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';


export default function Ajuda() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Ajuda</Text>
        </View>
      </SafeAreaView>
    </>
  );
}