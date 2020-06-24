import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default class ModalComponent extends Component {
    state = {
        modal: false
        // initialState is a better way to do this?
    }

    handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false
        })
    }

    render() {
        return (
            <View style = {{ width: '100%' }}>

                <Button
                    title = "Open Modal"
                    onPress = { this.handleModal }
                />

                <Modal
                    visible = { this.state.modal }
                    animationType = { "slide" }
                >
                    <View style={{
                        marginTop:50,
                        backgroundColor: 'red'
                    }}>
                        <Text
                            style={{
                                fontSize: 25
                            }}>Text making up my Modal Content</Text>
                    </View>

                    <Button
                        title = "Close this Modal"
                        onPress={ this.handleModal }
                    />

                </Modal>
            </View>
        )
    }
}