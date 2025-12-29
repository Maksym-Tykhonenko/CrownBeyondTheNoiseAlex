import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Crownbeyondthenoisebck from '../Crownbeyondthenoisecmpnt/Crownbeyondthenoisebck';
import { useStorage } from '../Crownbeyondthenoisestrg/crownbeyondthenoisecntxt';

const Crownbeyondthenoiselog = () => {
  const { entriesBeyondTheNoise, loadEntriesBeyondTheNoise } = useStorage();
  const { height } = useWindowDimensions();
  const navigationBeyondTheNoise = useNavigation();

  useFocusEffect(
    useCallback(() => {
      loadEntriesBeyondTheNoise();
    }, []),
  );

  const renderItemBeyondTheNoise = ({ item }) => (
    <View style={styles.cardBeyondTheNoise}>
      <Text style={styles.textBeyondTheNoise}>{item.text}</Text>
    </View>
  );

  return (
    <Crownbeyondthenoisebck>
      <View
        style={[styles.containerBeyondTheNoise, { paddingTop: height * 0.14 }]}
      >
        {entriesBeyondTheNoise.length === 0 ? (
          <Text style={styles.emptyBeyondTheNoise}>
            Nothing recorded so far.
          </Text>
        ) : (
          <View>
            <FlatList
              data={entriesBeyondTheNoise}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              renderItem={renderItemBeyondTheNoise}
              showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity
              style={styles.addButtonBeyondTheNoise}
              activeOpacity={0.6}
              onPress={() => {
                navigationBeyondTheNoise.navigate('Crownbeyondthenoisetb', {
                  screen: 'Crownbeyondthenoisesess',
                });
              }}
            >
              <Image
                source={require('../../assets/crownBeyondImages/crownBeyondAdd.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Crownbeyondthenoisebck>
  );
};

const styles = StyleSheet.create({
  containerBeyondTheNoise: {
    flex: 1,
    paddingHorizontal: 40,
  },
  emptyBeyondTheNoise: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginTop: 170,
  },
  cardBeyondTheNoise: {
    borderWidth: 1,
    borderColor: '#9F824A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 21,
  },
  textBeyondTheNoise: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    lineHeight: 22,
  },
  addButtonBeyondTheNoise: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#9F824A',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Crownbeyondthenoiselog;
