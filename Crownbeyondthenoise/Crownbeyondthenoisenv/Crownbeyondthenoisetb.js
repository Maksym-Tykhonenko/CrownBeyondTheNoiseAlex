import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Crownbeyondthenoisesess from '../Crownbeyondthenoisescrn/Crownbeyondthenoisesess';
import Crownbeyondthenoisemrks from '../Crownbeyondthenoisescrn/Crownbeyondthenoisemrks';
import Crownbeyondthenoisents from '../Crownbeyondthenoisescrn/Crownbeyondthenoisents';
import Crownbeyondthenoiselog from '../Crownbeyondthenoisescrn/Crownbeyondthenoiselog';

const Tab = createBottomTabNavigator();

const Crownbeyondthenoisetb = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          ...styles.collectingBraziloMomentsTabs,
          paddingHorizontal: isLandscape ? '30%' : '8%',
        },
        tabBarActiveTintColor: '#FED59FCA',
        tabBarInactiveTintColor: '#fff',
        tabBarItemStyle: {
          flexDirection: 'column',
        },
        tabBarLabelPosition: 'below-icon',
        tabBarBackground: () => (
          <View style={{}}>
            <ImageBackground
              source={require('../../assets/crownBeyondImages/crownBeyondTabBg.png')}
              style={styles.collectingBraziloMomentsTabBg}
            ></ImageBackground>
          </View>
        ),
      }}
    >
      <Tab.Screen
        name="Crownbeyondthenoisesess"
        component={Crownbeyondthenoisesess}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/crownBeyondImages/crownBeyondTab1.png')}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.collectingBraziloMomentsLabel,
                { color: focused ? '#FED59FCA' : '#fff' },
              ]}
            >
              Silence Session
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Crownbeyondthenoisemrks"
        component={Crownbeyondthenoisemrks}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/crownBeyondImages/crownBeyondTab2.png')}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.collectingBraziloMomentsLabel,
                { color: focused ? '#FED59FCA' : '#fff' },
              ]}
            >
              Crown Marks
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Crownbeyondthenoisents"
        component={Crownbeyondthenoisents}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/crownBeyondImages/crownBeyondTab3.png')}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.collectingBraziloMomentsLabel,
                { color: focused ? '#FED59FCA' : '#fff' },
              ]}
            >
              Silent Notes
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Crownbeyondthenoiselog"
        component={Crownbeyondthenoiselog}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/crownBeyondImages/crownBeyondTab4.png')}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.collectingBraziloMomentsLabel,
                { color: focused ? '#FED59FCA' : '#fff' },
              ]}
            >
              Silence Log
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  collectingBraziloMomentsTabs: {
    elevation: 0,
    paddingTop: 9,
    paddingBottom: 16,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 12,
    height: 110,
    borderRadius: 9,
    borderTopWidth: 0,
  },
  collectingBraziloMomentsTabBg: {
    height: 68,
    alignSelf: 'center',
    width: 356,
  },
  collectingBraziloMomentsLabel: {
    fontSize: 9,
    marginTop: 4,
  },
});

export default Crownbeyondthenoisetb;
