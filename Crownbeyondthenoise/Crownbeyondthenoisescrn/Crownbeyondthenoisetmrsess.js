import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Crownbeyondthenoisebck from '../Crownbeyondthenoisecmpnt/Crownbeyondthenoisebck';

const Crownbeyondthenoisetmrsess = () => {
  const navigationBeyondTheNoise = useNavigation();
  const [secondsLeftBeyondTheNoise, setSecondsLeftBeyondTheNoise] = useState(5);
  const [isFinishedBeyondTheNoise, setIsFinishedBeyondTheNoise] =
    useState(false);
  const [noteBeyondTheNoise, setNoteBeyondTheNoise] = useState('');
  const timerRefBeyondTheNoise = useRef(null);

  useEffect(() => {
    timerRefBeyondTheNoise.current = setInterval(() => {
      setSecondsLeftBeyondTheNoise(prevState => {
        if (prevState <= 1) {
          clearInterval(timerRefBeyondTheNoise.current);
          setIsFinishedBeyondTheNoise(true);
          return 0;
        }
        return prevState - 1;
      });
    }, 1000);

    return () => clearInterval(timerRefBeyondTheNoise.current);
  }, []);

  const formatTimeBeyondTheNoise = currSecs => {
    const currMins = String(Math.floor(currSecs / 60)).padStart(2, '0');
    const currSecsFormatted = String(currSecs % 60).padStart(2, '0');
    return `${currMins}:${currSecsFormatted}`;
  };

  const onExitBeyondTheNoise = () => {
    clearInterval(timerRefBeyondTheNoise.current);
    navigationBeyondTheNoise.goBack();
  };

  const onContinueBeyondTheNoise = async () => {
    try {
      const rawBeyondTheNoise = await AsyncStorage.getItem(
        'crown_beyond_noise_log',
      );
      const existingBeyondTheNoise = rawBeyondTheNoise
        ? JSON.parse(rawBeyondTheNoise)
        : [];

      const newEntryBeyondTheNoise = {
        id: Date.now().toString(),
        text: noteBeyondTheNoise.trim(),
        createdAt: Date.now(),
        duration: 5,
      };

      const updatedBeyondTheNoise = [
        newEntryBeyondTheNoise,
        ...existingBeyondTheNoise,
      ];

      await AsyncStorage.setItem(
        'crown_beyond_noise_log',
        JSON.stringify(updatedBeyondTheNoise),
      );
    } catch (error) {
      console.log(error);
    }

    navigationBeyondTheNoise.goBack();
  };

  return (
    <Crownbeyondthenoisebck>
      <View style={styles.containerBeyondTheNoise}>
        {!isFinishedBeyondTheNoise ? (
          <>
            <ImageBackground
              source={require('../../assets/crownBeyondImages/crownBeyondTimer.png')}
              style={styles.timerImageBeyondTheNoise}
            >
              <Text style={styles.timerTextBeyondTheNoise}>
                {formatTimeBeyondTheNoise(secondsLeftBeyondTheNoise)}
              </Text>
            </ImageBackground>

            <TouchableOpacity
              style={[styles.buttonBeyondTheNoise, { width: 131, height: 40 }]}
              activeOpacity={0.6}
              onPress={onExitBeyondTheNoise}
            >
              <Text style={styles.buttonTextBeyondTheNoise}>Exit</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Text style={styles.titleBeyondTheNoise}>
                Write what remains.
              </Text>

              <TextInput
                style={styles.inputBeyondTheNoise}
                multiline
                placeholder="..."
                placeholderTextColor="#777"
                value={noteBeyondTheNoise}
                onChangeText={setNoteBeyondTheNoise}
              />

              <TouchableOpacity
                style={styles.buttonBeyondTheNoise}
                activeOpacity={0.6}
                onPress={onContinueBeyondTheNoise}
              >
                <Text style={styles.buttonTextBeyondTheNoise}>Continue</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text style={styles.footerBeyondTheNoise}>
                Your personal information is not shared with anyone
              </Text>
            </View>
          </>
        )}
      </View>
    </Crownbeyondthenoisebck>
  );
};

const styles = StyleSheet.create({
  containerBeyondTheNoise: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  titleBeyondTheNoise: {
    fontSize: 24,
    marginBottom: 74,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginTop: 40,
  },
  timerImageBeyondTheNoise: {
    width: 269,
    height: 263,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 110,
  },
  timerTextBeyondTheNoise: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Light',
  },
  inputBeyondTheNoise: {
    width: '90%',
    minHeight: 200,
    borderWidth: 1,
    borderColor: '#8E7440',
    borderRadius: 10,
    padding: 14,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    marginBottom: 30,
  },
  buttonBeyondTheNoise: {
    backgroundColor: '#8E7440',
    width: 202,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextBeyondTheNoise: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Roboto-Light',
  },
  footerBeyondTheNoise: {
    marginTop: 24,
    fontSize: 12,
    color: '#DFE4EB',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});

export default Crownbeyondthenoisetmrsess;
