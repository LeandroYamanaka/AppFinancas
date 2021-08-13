import React, { useContext, useState } from 'react';
import {
    Background, Container, AreaInput,
    Input, SubmitButton, SubmitText
} from '../Signin/styles';
import { AuthContext } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';

export default function Signin() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {
        signUp(email, password, nome);
    }

    return (
        <Background>
            <Container>
                <AreaInput>
                    <Input placeholder="nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={(text) => setNome(text)} />

                </AreaInput>
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
                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>

        </Background>
    );
}