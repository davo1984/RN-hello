import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback,
    TouchableHighlight } from 'react-native';

const generate = (props) => {
    return (
        <TouchableHighlight
            // key={id}
            style={styles.generate}
            onPress={()=> props.add()}
        >
            <View>
                <Text
                    style={{color:'#fff'}}>Add Number
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    generate: {
        backgroundColor: '#00bcd4',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    }
})
export default generate;