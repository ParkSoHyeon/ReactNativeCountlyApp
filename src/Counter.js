import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import {name as appName} from "../app.json";

const Counter = props => (
    <View style={styles.container}>
        <Text style={styles.appName}>{appName}</Text>
        <Text style={styles.tally}>Tally: {props.count}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={props.increment}
        >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={props.decrement}
        >
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={props.zero}
        >
            <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
    </View>
)

Counter.propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    zero: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    appName: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    tally: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
        fontSize: 25
    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        marginBottom: 20,
        padding: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});

export default Counter;
