import { NavigationContainer } from '@react-navigation/native';
import Crownbeyondthenoisest from './Crownbeyondthenoise/Crownbeyondthenoisenv/Crownbeyondthenoisest';
import { ContextProvider } from './Crownbeyondthenoise/Crownbeyondthenoisestrg/crownbeyondthenoisecntxt';

const App = () => {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Crownbeyondthenoisest />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
