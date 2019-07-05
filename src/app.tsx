import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InitialProps} from "expo/build/launch/withExpoRoot.types";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class App extends React.Component<InitialProps, {}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
        );
    }
}

export default App;
