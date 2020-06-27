import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Input from './input';
import Nav from './Nav';
import 'react-native-gesture-handler';

export default class AppOrig extends Component {

    render() {
        return (
            <ScrollView style={{ width: '100%' }}>

                <View style={styles.container}>
                    <Input />
                    <Nav name={this.state.nameOfApp} />

                    <View style={styles.basicView}>
                        <View style={styles.basicView}>
                            <Text style={styles.basicText}>Saluton Mondo</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
            paddingTop: 50,
            marginBottom: 5
        },
        basicView: {
            backgroundColor: 'green',
            width: '100%',
            marginBottom: 5,
        }
    });