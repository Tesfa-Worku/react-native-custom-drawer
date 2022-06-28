import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
