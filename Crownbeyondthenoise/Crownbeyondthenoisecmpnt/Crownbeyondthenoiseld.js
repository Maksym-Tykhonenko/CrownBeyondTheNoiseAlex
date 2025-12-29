import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View, Image, StyleSheet } from 'react-native';

import Crownbeyondthenoisebck from './Crownbeyondthenoisebck';
import { useNavigation } from '@react-navigation/native';
import { cupWelcLoaderHtml } from '../Crownbeyondthenoisecnst/cupWelcLoaderHtml';

const Crownbeyondthenoiseld = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      navigation.replace('Crownbeyondthenoiseonb');
    }, 5600);

    return () => clearTimeout(loaderTimer);
  }, [navigation]);

  return (
    <Crownbeyondthenoisebck>
      <View style={styles.beyondLoadercnt}>
        <Image
          source={require('../../assets/crownBeyondImages/crownBeyondLogoLoader.png')}
        />
      </View>

      <View style={styles.beyondLoaderwrap}>
        <WebView
          originWhitelist={['*']}
          source={{ html: cupWelcLoaderHtml }}
          style={{ width: 160, height: 180, backgroundColor: 'transparent' }}
          scrollEnabled={false}
        />
      </View>
    </Crownbeyondthenoisebck>
  );
};

const styles = StyleSheet.create({
  beyondLoadercnt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 670,
  },
  beyondLoaderwrap: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default Crownbeyondthenoiseld;
