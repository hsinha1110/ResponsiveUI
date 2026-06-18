import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { addProductThunk } from '../../redux/thunk/thunk';

const AddProductScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    if (!title || !price || !description || !category || !image) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    dispatch(
      addProductThunk({
        title,
        price: Number(price),
        description,
        category,
        image,
      }),
    );

    Alert.alert('Success', 'Product Added');

    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setImage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Add Product</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.multiline]}
        multiline
      />

      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
