import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { getProductsThunk, deleteProductThunk } from '../../redux/thunk/thunk';

type Products = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const handleDelete = async (productId: number) => {
    try {
      await dispatch(deleteProductThunk(productId)).unwrap();

      Alert.alert('Success', 'Product deleted successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete product');
    }
  };

  const renderItem = ({ item }: { item: Products }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.price}>₹ {item.price}</Text>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.deleteText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },

  image: {
    width: 90,
    height: 90,
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    fontSize: 15,
    color: '#666',
    marginTop: 8,
  },

  deleteButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 12,
    alignSelf: 'flex-start',
  },

  deleteText: {
    color: '#fff',
    fontWeight: '700',
  },
});
