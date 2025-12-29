import { ScrollView, View } from 'react-native';

const Crownbeyondthenoisebck = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#121211' }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Crownbeyondthenoisebck;
