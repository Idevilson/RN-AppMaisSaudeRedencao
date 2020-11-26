import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import {Container, ContainerView} from './styles';

const Quatro: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <View>
          <Text style={{color: '#fff'}}>Onboarding 4</Text>
        </View>
      </Container>
      <ContainerView>
        <Button onPress={() => navigation.navigate('Onboarding5')}>
          Entrar
        </Button>
      </ContainerView>
    </>
  );
};

export default Quatro;
