import React from "react";
import {TextInput,StyleSheet} from 'react-native';

const Input = ({value,changeText,addTodo}) => (
    <TextInput
        value={value}
        style={styles.input}
        placeholder={"오늘 어떤 일을 하실건가요?"}
        maxLength={30}
        onChangeText={changeText}
        onEndEditing={addTodo}
        returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop:15,
    }
})

export default Input;