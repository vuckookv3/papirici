import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { saveNames } from '../actions';
import { Actions } from 'react-native-router-flux';

class Prepare extends Component {

    state = {
        p1Name: '',
        p2Name: '',
        p3Name: '',
        p4Name: ''
    }

    checkNames = () => {
        const all = { p1Name, p2Name, p3Name, p4Name } = this.state;
        if (!p1Name || !p2Name || !p3Name || !p4Name) return Alert.alert('Enter all names')

        this.props.saveNames(all);
        Actions.words();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.inputs}>
                    <Text>Player 1: </Text>
                    <TextInput style={styles.textInput} value={this.state.p1Name} onChangeText={(text) => this.setState({ p1Name: text })} />
                    <Text>Player 2: </Text>
                    <TextInput style={styles.textInput} value={this.state.p2Name} onChangeText={(text) => this.setState({ p2Name: text })} />
                    <Text>Player 3: </Text>
                    <TextInput style={styles.textInput} value={this.state.p3Name} onChangeText={(text) => this.setState({ p3Name: text })} />
                    <Text>Player 4: </Text>
                    <TextInput style={styles.textInput} value={this.state.p4Name} onChangeText={(text) => this.setState({ p4Name: text })} />
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => { this.checkNames() }}>
                        <View>
                            <Text>SAVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'auto',
        width: '100%',
        maxHeight: '100%'
    },
    inputs: {
        flex: 2,
        paddingLeft: 10
    },
    textInput: {
        width: '80%'
    },
    buttons: {
        flex: 1
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, { saveNames })(Prepare);