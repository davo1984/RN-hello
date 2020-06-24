import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Nav from './src/Nav';
import Generate from './src/Generate';
import ListItem from './src/listItem';
import Input from './src/input';
import PickerComponent from './src/picker';
import ModalComponent from './src/modal';

export default class App extends Component {
    state = {
        nameOfApp: `Davo's awesome app`,
        random: [42, 21, 666]
    }

    onAddRandom = () => {
        const random = Math.floor(Math.random() * 100) + 1;
        this.setState(prevState => {
            return {
                random: [...prevState.random, random]
            }
        })
    }

    onItemDelete = (position) => {
        const newArray = this.state.random.filter((item, index) => {
            return position != index;
        })
        this.setState({
            random: newArray
        })
    }

    render() {
        return (
            <ScrollView
                style={{width:'100%'}}
                // onContentSizeChange={ (w,h)=> alert(w+', '+h)}
                // onMomentumScrollBegin={ ()=> alert()}
                // onMomentumScrollEnd={ ()=> alert('end')}
            >
                <View style={styles.container}>

                    <Input />

                    <Nav name={this.state.nameOfApp} />
                    <View style={styles.basicView}>
                        <View style={styles.basicView}>
                            <Text style={styles.basicText}>Saluton Mondo</Text>
                        </View>
                    </View>
                    <Generate add={this.onAddRandom} />
                    <ListItem items={this.state.random}
                        delete={this.onItemDelete} />
                </View>
                <PickerComponent/>
                <ModalComponent/>
            </ScrollView>
        )
    };
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
    },
    basicText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        padding: 20
    }
});