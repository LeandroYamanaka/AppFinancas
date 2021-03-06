import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Perfil from '../pages/Perfil';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#171717'
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#00b94a',
                inactiveTintColor: '#DDD',
                inactiveBackgroundColor: '#000',
                itemStyle: {
                    marginVertical: 5,
                }
            }}
        >
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Registrar" component={New} />
            <AppDrawer.Screen name="Perfil" component={Perfil} />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;