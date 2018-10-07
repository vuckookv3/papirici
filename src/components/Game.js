import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Game extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                
            </View>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps)(Game);