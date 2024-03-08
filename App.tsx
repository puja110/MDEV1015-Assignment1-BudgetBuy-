import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainOnboardingScreen from './src/views/screens/MainOnboardingScreen';
import SecondOnboardingScreen from './src/views/screens/SecondOnboardingScreen';
import LoginScreen from './src/views/screens/auth/LoginScreen';
import ForgotPassword from './src/views/screens/auth/ForgotPassword';
import SignUpScreen from './src/views/screens/auth/SignUpScreen';
import TabBar from './src/views/navigation/TabBar';
import PostItem from './src/views/screens/TabScreens/PostItem';
import MyFavourites from './src/views/screens/TabScreens/MyFavourites'; 
import MyProfile from './src/views/screens/TabScreens/MyProfile'; 
import HistoryPage from './src/views/screens/TabScreens/HistoryPage'; 
import HomePage from './src/views/screens/TabScreens/HomePage';


export type RootStackParamList = {
  MainOnboarding: undefined;
  SecondOnboardingScreen: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  SignUpScreen: undefined;
  Home: undefined;
  PostItem: undefined;
  MyFavourites: undefined;
  MyProfile: undefined;
  HistoryPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainOnboarding">
        <Stack.Screen
          name="MainOnboarding"
          component={MainOnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondOnboardingScreen"
          component={SecondOnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostItem"
          component={PostItem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyFavourites"
          component={MyFavourites}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistoryPage"
          component={HistoryPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <TabBar/>
  );
};

export default App;
