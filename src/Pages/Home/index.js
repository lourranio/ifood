import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';


import banner from '../../assets/img/banner.png';
import pedido from '../../assets/img/pedido.png';


import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pedir comida nunca foi tão fácil</Text>
          <Image source={pedido} />

          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Permitir Localização</Text>
          <Text>{"\n"}Para descobrir restaurantes {"\n"}que entregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text="continuar" onPress={() => navigation.navigate('Main')} theme="primary" />

        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
