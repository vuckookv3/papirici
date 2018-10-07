import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Welcome extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => Actions.reset('prepare')}>
                        <Text>PLAY</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'auto',
        width: '100%',
        maxHeight: '100%',
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps)(Welcome);