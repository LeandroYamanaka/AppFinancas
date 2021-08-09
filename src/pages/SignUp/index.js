import React, { useContext, useState } from 'react';
import {
    Background, Container, AreaInput,
    Input, SubmitButton, SubmitText
} from '../Signin/styles';
import { AuthContext } from '../../contexts/auth';

export default function Signin() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(AuthContext);

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
                        onChangeText={(text) => setPassword(text)} />

                </AreaInput>
                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>

        </Background>
    );
}