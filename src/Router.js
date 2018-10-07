import React from 'react';
import { StatusBar } from 'react-native'
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import Prepare from './components/Prepare';
import Words from './components/Words';
import Game from './components/Game';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar>
                <Scene key='welcome' component={Welcome} />
                <Scene key='prepare' component={Prepare} />
                <Scene key='words' component={Words} initial />
                <Scene key='game' component={Game}  />
            </Stack>
        </Router>
    );
}

export default RouterComponent;