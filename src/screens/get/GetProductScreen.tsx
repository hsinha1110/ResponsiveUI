import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { getProductsByIdThunk } from '../../redux/thunk/thunk';

const GetProductScreen = () => {
  const route = useRoute<any>();
  const dispatch = useDispatch<AppDispatch>();

  const { productId } = route.params;

  const { singleProduct, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(getProductsByIdThunk(productId));
  }, [dispatch, productId]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!singleProduct) {
    return <Text>No Product Found</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: singleProduct.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>{singleProduct.title}</Text>

      <Text style={styles.price}>₹ {singleProduct.price}</Text>

      <Text style={styles.description}>{singleProduct.description}</Text>

      <Text style={styles.category}>{singleProduct.category}</Text>
    </View>
  );
};

export default GetProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    width: '100%',
    height: 250,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },

  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },

  description: {
    fontSize: 14,
    marginTop: 10,
  },

  category: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
  },
});
