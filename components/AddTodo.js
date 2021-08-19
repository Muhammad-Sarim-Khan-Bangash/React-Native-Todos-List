import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput} from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [text, setText] = useState('');
  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888"
        placeholder="Enter item here..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="#ff4757"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#333',
  },
});

export default AddTodo;
