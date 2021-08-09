import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={Signin} options={{ headerShown: false }} />
            <AuthStack.Screen name="SignUp" component={SignUp} options={{
                headerStyle: {

                    backgroundColor: '#131313',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerTitle: 'voltar'
            }} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;