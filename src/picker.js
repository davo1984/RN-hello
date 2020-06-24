import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider } from 'react-native';

export default class PickerComponent extends Component {
    state = {
        language: 'english',
        value: 50
    }

    handleSliderChange = (value) => {
        this.setState({
            value:value
        })
    }

    render() {
        return (
            <View>
                <Text>Saluton Mondo</Text>

                <Picker 
                    style={{ width: '100%' }}
                    selectedValue={this.state.language}
                    onValueChange={ (itemValue, itemIndex) => this.setState({language:itemValue})}
                >
                    <Picker.Item label="Esperanto" value="esperanto"/>
                    <Picker.Item label="La Germana" value="german"/>
                    <Picker.Item label="La Angla" value="english"/>
                    <Picker.Item label="La Hispana" value="spanish"/>
                </Picker>

                <Slider
                    value={this.state.value}
                    minimumValue={30}
                    maximumValue={120}
                    step={5}
                    onValueChange={this.handleSliderChange}
                />
            </View>
        )
    }
}
// const styles = StyleSheet.create({

// });