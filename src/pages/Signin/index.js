import React, { useState, useContext } from 'react';
import {
    Background, Container, Logo, AreaInput, Input,
    SubmitButton, SubmitText, Link, LinkText
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';


export default function Signin() {

    const navigation = useNavigation('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, loadingAuth } = useContext(AuthContext);


    function handleLogin() {
        signIn(email, password);
    }

    return (
        <Background>
            <Container>
                <Logo source={require('../../img/Logo1.jpg')} />
                <AreaInput>
                    <Input placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)} />

                </AreaInput>
                <AreaInput>
                    <Input placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true} />

                </AreaInput>
                <SubmitButton onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>

        </Background>
    );
}