import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  BackButton,
  InformationScroll,
  Title,
  ImageDivider,
  Content,
} from './styles';

const VilaDaPedra: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackButton>
        <Text style={{marginLeft: 5, color: '#fff', fontSize: 22}}>
          ESF - MAURINA PINTO DA COSTA
        </Text>
      </Header>
      <InformationScroll>
        <Title>{`UNIDADE DE SAÚDE
SETOR VILA DA PEDRA`}</Title>
        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO MÉDICO'}</Title>
        <Content>{'Drª Wellen Fontinelli'}</Content>
        <Content>{'Período: Manhã e Tarde'}</Content>
        <Content>{'Das 7h ás 11h e 13h ás 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfª COORDENADORA'}</Title>
        <Content>{'Sânia Rayana'}</Content>
        <Content>{'Horário: das 7h às 12h e 14h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica de enfermagem'}</Title>
        <Content>{'Selsa Pereira'}</Content>
        <Content>{'Triagem e Curativos'}</Content>
        <Content>{'7h às 12h e 14h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica de enfermagem'}</Title>
        <Content>{'Luciele do Espirito Santo'}</Content>
        <Content>{'Sala de Vacina'}</Content>
        <Content>{'das 8h às 14h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTOS OFERECIDOS'}</Title>
        <Content>{'CONSULTA MÉDICA'}</Content>
        <Content>{'ENFERMAGEM EM GERAL'}</Content>
        <Content>{'REALIZAÇÃO DO PCCU'}</Content>
        <Content>{'CURATIVOS'}</Content>
        <Content>{'VACINA'}</Content>
        <Content>{'VISITAS DOMICILIARES'}</Content>
        <Content>{'PLANEJAMENTO FAMILIAR'}</Content>
        <Content>{'ENTREGA DE PRESERVATIVOS'}</Content>
        <Content>{'E ANTICONCEPCIONAIS'}</Content>
      </InformationScroll>
    </Container>
  );
};

export default VilaDaPedra;
