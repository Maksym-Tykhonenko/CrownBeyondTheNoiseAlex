import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Crownbeyondthenoisebck from '../Crownbeyondthenoisecmpnt/Crownbeyondthenoisebck';
import { crownBeyondTheNoiseMarks } from '../Crownbeyondthenoised/crownBeyondTheNoiseMarks';

const Crownbeyondthenoisemrks = () => {
  const [statsBeyondTheNoise, setStatsBeyondTheNoise] = useState(null);
  const { height } = useWindowDimensions();

  useFocusEffect(
    useCallback(() => {
      loadStatsBeyondTheNoise();
    }, []),
  );

  const loadStatsBeyondTheNoise = async () => {
    try {
      const logRawBeyondTheNoise = await AsyncStorage.getItem(
        'crown_beyond_noise_log',
      );
      const sessionsRawBeyondTheNoise = await AsyncStorage.getItem(
        'crown_beyond_noise_sessions',
      );

      const entriesBeyondTheNoise = logRawBeyondTheNoise
        ? JSON.parse(logRawBeyondTheNoise)
        : [];
      const sessionsBeyondTheNoise = sessionsRawBeyondTheNoise
        ? JSON.parse(sessionsRawBeyondTheNoise)
        : [];

      const totalMinutesBeyondTheNoise = Math.floor(
        sessionsBeyondTheNoise.reduce(
          (beyondSum, seconds) => beyondSum + seconds.duration,
          0,
        ) / 60,
      );

      const maxStreakBeyondTheNoise = sessionsBeyondTheNoise.reduce(
        (beyondMax, seconds) => Math.max(beyondMax, seconds.streak || 1),
        1,
      );

      setStatsBeyondTheNoise({
        entriesCount: entriesBeyondTheNoise.length,
        sessionsCount: sessionsBeyondTheNoise.length,
        totalMinutes: totalMinutesBeyondTheNoise,
        maxStreak: maxStreakBeyondTheNoise,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unlockedMarksBeyondTheNoise = statsBeyondTheNoise
    ? crownBeyondTheNoiseMarks.filter(mark => mark.check(statsBeyondTheNoise))
    : [];

  const renderItemBeyondTheNoise = ({ item }) => (
    <View style={styles.itemBeyondTheNoise}>
      <ImageBackground
        source={require('../../assets/crownBeyondImages/crownBeyondGradFrame.png')}
        style={{
          width: 70,
          height: 83,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={item.icon} style={styles.iconBeyondTheNoise} />
      </ImageBackground>

      <View style={styles.textWrapBeyondTheNoise}>
        <Text style={styles.titleBeyondTheNoise}>{item.title}</Text>
        <Text style={styles.conditionBeyondTheNoise}>{item.conditionText}</Text>
      </View>
    </View>
  );

  return (
    <Crownbeyondthenoisebck>
      <View
        style={[styles.containerBeyondTheNoise, { paddingTop: height * 0.14 }]}
      >
        {!statsBeyondTheNoise || unlockedMarksBeyondTheNoise.length === 0 ? (
          <Text style={styles.emptyBeyondTheNoise}>No marks yet.</Text>
        ) : (
          <FlatList
            data={unlockedMarksBeyondTheNoise}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={renderItemBeyondTheNoise}
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </Crownbeyondthenoisebck>
  );
};

const styles = StyleSheet.create({
  containerBeyondTheNoise: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 120,
  },
  emptyBeyondTheNoise: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginTop: 160,
  },
  itemBeyondTheNoise: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  iconBeyondTheNoise: {
    width: 55,
    height: 55,
  },
  textWrapBeyondTheNoise: {
    flex: 1,
    marginLeft: 16,
  },
  titleBeyondTheNoise: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    marginBottom: 4,
  },
  conditionBeyondTheNoise: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Roboto-Light',
  },
});

export default Crownbeyondthenoisemrks;
