import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { updateProductThunk } from '../../redux/thunk/thunk';

const UpdateProductScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [productId, setProductId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = () => {
    if (!productId || !title || !price) {
      Alert.alert('Please fill required fields');
      return;
    }

    dispatch(
      updateProductThunk({
        productId: Number(productId),
        data: {
          title,
          price: Number(price),
          description,
          category: 'electronics',
          image: 'https://i.pravatar.cc',
        },
      }),
    );

    Alert.alert('Success', 'Product Updated');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Update Product</Text>

      <TextInput
        placeholder="Product ID"
        value={productId}
        onChangeText={setProductId}
        keyboardType="numeric"
        style={styles.input}
      />

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
        multiline
        style={[styles.input, styles.description]}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 22,
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

  description: {
    height: 100,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
