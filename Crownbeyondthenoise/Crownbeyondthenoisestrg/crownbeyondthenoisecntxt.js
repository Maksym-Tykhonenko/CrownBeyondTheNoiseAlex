import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState } from 'react';

export const StoreContext = createContext(undefined);

export const useStorage = () => {
  return useContext(StoreContext);
};

export const ContextProvider = ({ children }) => {
  const [entriesBeyondTheNoise, setEntriesBeyondTheNoise] = useState([]);

  const loadEntriesBeyondTheNoise = async () => {
    try {
      const rawBeyondTheNoise = await AsyncStorage.getItem(
        'crown_beyond_noise_log',
      );
      setEntriesBeyondTheNoise(
        rawBeyondTheNoise ? JSON.parse(rawBeyondTheNoise) : [],
      );
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    entriesBeyondTheNoise,
    setEntriesBeyondTheNoise,
    loadEntriesBeyondTheNoise,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
