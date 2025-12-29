import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Crownbeyondthenoisebck from '../Crownbeyondthenoisecmpnt/Crownbeyondthenoisebck';

const Crownbeyondthenoisesess = () => {
  const navigation = useNavigation();

  return (
    <Crownbeyondthenoisebck>
      <View style={styles.beyondTheNoiseContainer}>
        <Text style={styles.beyondTheNoiseText}>Let it pass.</Text>

        <ImageBackground
          source={require('../../assets/crownBeyondImages/crownBeyondTimer.png')}
          style={styles.beyondTheNoiseTimerImage}
        >
          <Text style={styles.beyondTheNoiseTimerText}>5:00</Text>
        </ImageBackground>

        <TouchableOpacity
          style={styles.beyondTheNoiseBtn}
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Crownbeyondthenoisetmrsess');
          }}
        >
          <Text style={styles.beyondTheNoiseBtnText}>Start Silence</Text>
        </TouchableOpacity>
      </View>
    </Crownbeyondthenoisebck>
  );
};

const styles = StyleSheet.create({
  beyondTheNoiseContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 130,
    paddingTop: 20,
  },
  beyondTheNoiseText: {
    fontSize: 24,
    marginBottom: 54,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
  beyondTheNoiseBtnText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  },
  beyondTheNoiseBtn: {
    marginTop: 70,
    backgroundColor: '#C3AE6F',
    width: 202,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 15,
    zIndex: 10,
  },
  beyondTheNoiseTimerImage: {
    width: 269,
    height: 263,
    alignSelf: 'center',
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  beyondTheNoiseTimerText: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Light',
  },
});

export default Crownbeyondthenoisesess;
