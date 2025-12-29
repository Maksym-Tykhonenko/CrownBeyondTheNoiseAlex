import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Share,
  Image,
} from 'react-native';

import Crownbeyondthenoisebck from '../Crownbeyondthenoisecmpnt/Crownbeyondthenoisebck';
import { crownBeyondTheNoiseNotes } from '../Crownbeyondthenoised/crownBeyondTheNoiseNotes';

const Crownbeyondthenoisents = () => {
  const [indexBeyondTheNoise, setIndexBeyondTheNoise] = useState(0);

  const onShareBeyondTheNoise = async () => {
    try {
      await Share.share({
        message: crownBeyondTheNoiseNotes[indexBeyondTheNoise],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Crownbeyondthenoisebck>
      <View style={styles.containerBeyondTheNoise}>
        <Text style={styles.noteBeyondTheNoise}>
          {crownBeyondTheNoiseNotes[indexBeyondTheNoise]}
        </Text>

        <View style={styles.controlsBeyondTheNoise}>
          {indexBeyondTheNoise > 0 ? (
            <TouchableOpacity
              style={styles.arrowBeyondTheNoise}
              activeOpacity={0.6}
              onPress={() => setIndexBeyondTheNoise(i => i - 1)}
            >
              <Image
                source={require('../../assets/crownBeyondImages/crownBeyondPrev.png')}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.arrowPlaceholderBeyondTheNoise} />
          )}

          <TouchableOpacity
            style={styles.shareButtonBeyondTheNoise}
            onPress={onShareBeyondTheNoise}
            activeOpacity={0.6}
          >
            <Text style={styles.shareTextBeyondTheNoise}>Share</Text>
          </TouchableOpacity>

          {indexBeyondTheNoise < crownBeyondTheNoiseNotes.length - 1 ? (
            <TouchableOpacity
              style={styles.arrowBeyondTheNoise}
              activeOpacity={0.6}
              onPress={() => setIndexBeyondTheNoise(i => i + 1)}
            >
              <Image
                source={require('../../assets/crownBeyondImages/crownBeyondNext.png')}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.arrowPlaceholderBeyondTheNoise} />
          )}
        </View>
      </View>
    </Crownbeyondthenoisebck>
  );
};

const styles = StyleSheet.create({
  containerBeyondTheNoise: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingBottom: 120,
  },
  noteBeyondTheNoise: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 90,
    minHeight: 120,
  },
  controlsBeyondTheNoise: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBeyondTheNoise: {
    width: 40,
    height: 40,
    backgroundColor: '#8E7440',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowTextBeyondTheNoise: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Roboto-Regular',
  },
  arrowPlaceholderBeyondTheNoise: {
    width: 44,
    height: 36,
  },
  shareButtonBeyondTheNoise: {
    marginHorizontal: 16,
    width: 131,
    height: 40,
    backgroundColor: '#8E7440',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareTextBeyondTheNoise: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Roboto-Light',
  },
});

export default Crownbeyondthenoisents;
