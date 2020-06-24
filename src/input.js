import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    Button, ScrollView, TextInput
} from 'react-native';

class Input extends Component {
    state = {
        myTextInput: '',
        users: ['John', 'Lisa']
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    onAddUser = () => {
        this.setState(prevState => {
            return {
                myTextInput: '',
                users: [...prevState.users, prevState.myTextInput]
            }
        })
    }

    render() {
        return (
            <View style={styles.inputWrapper}>
                <ScrollView>
                    {
                        this.state.users.map(item => (
                            <Text style={styles.users}
                                key={item}>{item}</Text>
                        ))
                    }
                    <TextInput
                        value={this.state.myTextInput}
                        style={styles.input}
                        onChangeText={this.onChangeInput}
                        multiline={false}
                        editable={true}
                        maxLength={75}
                        autoCapitalize={'words'}
                    />
                    <Button
                        title="Add User Name"
                        onPress={this.onAddUser}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f2f2f2',
        width: '100%',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    inputWrapper: {
        width: '100%'
    },
    users: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#cecece',
        padding: 10,
        marginBottom: 20

    }
});
export default Input;