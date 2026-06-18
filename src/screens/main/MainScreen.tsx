import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { RootStackParamList } from '../../navigations/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const { products } = useSelector((state: RootState) => state.products);

  const ids = products.map(item => item.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>GET PRODUCT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Get', {
            productId: ids[0] ?? 1,
          })
        }
      >
        <Text style={styles.buttonText}>GET PRODUCT BY ID</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add')}
      >
        <Text style={styles.buttonText}>ADD PRODUCT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Update')}
      >
        <Text style={styles.buttonText}>UPDATE PRODUCT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
