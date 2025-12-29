import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { beyondTheNoiseImages } from '../Crownbeyondthenoisecnst/beyondTheNoiseImages';

const Crownbeyondthenoiseonb = () => {
  const [welcomeSlideIdx, setWelcomeSlideIdx] = useState(0);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={beyondTheNoiseImages[welcomeSlideIdx]}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, height: 800 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.beyondTheNoiseContainer}>
          <Text style={styles.beyondTheNoiseText}>
            {welcomeSlideIdx === 0 && 'Beyond the noise'}
            {welcomeSlideIdx === 1 && 'Five minutes'}
            {welcomeSlideIdx === 2 && 'What remains'}
            {welcomeSlideIdx === 3 && 'A quiet practice'}
          </Text>
          <Text style={styles.beyondTheNoiseSubText}>
            {welcomeSlideIdx === 0 &&
              'Not everything needs a response. Some things need silence.'}
            {welcomeSlideIdx === 1 &&
              'Start a session. Stay in silence for five minutes. No actions required.'}
            {welcomeSlideIdx === 2 &&
              'After silence, write what stayed. One thought. No editing.'}
            {welcomeSlideIdx === 3 &&
              'No guidance. No interpretation. Just repetition.'}
          </Text>

          <TouchableOpacity
            style={styles.beyondTheNoiseBtn}
            activeOpacity={0.6}
            onPress={() => {
              if (welcomeSlideIdx < 3) {
                setWelcomeSlideIdx(welcomeSlideIdx + 1);
              } else {
                navigation.replace('Crownbeyondthenoisetb');
              }
            }}
          >
            <Text style={styles.beyondTheNoiseBtnText}>
              {welcomeSlideIdx === 3 ? 'Begin' : 'Next'}
            </Text>
          </TouchableOpacity>

          {welcomeSlideIdx < 3 && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ zIndex: 10 }}
              onPress={() => {
                navigation.replace('Crownbeyondthenoisetb');
              }}
            >
              <Text style={[styles.beyondTheNoiseBtnText, { color: '#fff' }]}>
                Skip
              </Text>
            </TouchableOpacity>
          )}

          {welcomeSlideIdx === 1 && (
            <Image
              source={require('../../assets/crownBeyondImages/crownBeyondOn4.png')}
              style={styles.beyondTheNoiseTimerImage}
            />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  beyondTheNoiseContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  beyondTheNoiseText: {
    fontSize: 24,
    marginBottom: 34,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    zIndex: 10,
  },
  beyondTheNoiseSubText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    paddingHorizontal: 40,
    zIndex: 10,
  },
  beyondTheNoiseBtnText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  },
  beyondTheNoiseBtn: {
    marginTop: 100,
    backgroundColor: '#8E7440',
    width: 202,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 15,
    zIndex: 10,
  },
  beyondTheNoiseTimerImage: {
    width: 240,
    height: 230,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    marginLeft: 15,
  },
});

export default Crownbeyondthenoiseonb;
