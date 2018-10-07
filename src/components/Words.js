import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';



class Words extends Component {

    constructor(props) {
        super(props);
        this.word_count = this.props.word_count;
        this.players_count = this.props.players_count;
        this.players = {};
        for (let i = 0; i < this.players_count; i++) this.players['player' + i] = { words: new Array(this.word_count).fill(null), isReady: false }
        this.state = {
            index: 0,
            routes: new Array(this.players_count).fill().map((e, i) => ({ key: 'player' + i, title: this.props.players_names['player' + i].toUpperCase() }))
        };
        this.sceneMap = this.makeSceneMap();

    }

    lockWord = (player, i) => {
        if (!!this.players[player].words[i]) {
            this['ti' + player + i].setNativeProps({
                secureTextEntry: true,
                editable: false
            })
            this['lock' + player + i].setNativeProps({
                style: { color: 'green' }
            })
            this['word' + player + i].setNativeProps({
                style: { color: 'green' }
            })
        }

        this.checkIfPlayerIsReady(player);
    }

    renderInputs = (player) => new Array(this.word_count).fill().map((e, i) => (
        <View key={i} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginVertical: '2%' }}>

            <View style={{ flex: 2, backgroundColor: 'red', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                <Text ref={ref => this['word' + player + i] = ref}>Word: {i + 1}</Text>
            </View>

            <View style={{ flex: 7, backgroundColor: 'green', justifyContent: 'center' }}>
                <TextInput style={{ flex: 1 }} ref={ref => this['ti' + player + i] = ref} placeholder={'Change this'} onChangeText={(text) => this.players[player].words[i] = text} />
            </View>

            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <TouchableOpacity onPress={() => this.lockWord(player, i)} style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <Icon ref={ref => this['lock' + player + i] = ref} name='lock' size={15} style={{ color: 'black' }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    ))



    checkIfPlayerIsReady = (player) => {
        const p = this.players[player];
        if (p.words.every(e => !!e)) p.isReady = true;

        this.checkIfAllReady();
    }

    checkIfAllReady = () => {
        const all = [];
        for (const p in this.players) all.push(this.players[p].isReady)
   
        if (all.every(e => e)) {

            Actions.reset('game')
        }
    }

    makeRoute = (player) => (
        <View style={{ flex: 1 }}>
        
            <ScrollView>

                <View style={{ flex: 1 }}>
                    {this.renderInputs(player)}
                </View>

            </ScrollView>
        </View>
    )

    makeSceneMap = () => {
        const all = {};

        for (let i = 0; i < this.players_count; i++) {
            all['player' + i] = this.makeRoute.bind(this, 'player' + i)
        }

        return all;
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap(this.sceneMap)}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                />

            </View>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1
    },
    holder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        players_names: state.names,
        word_count: state.settings.word_count,
        players_count: state.settings.players_count
    }
}

export default connect(mapStateToProps)(Words);