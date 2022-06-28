import React from "react";
// import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="Onboarding" 
                component={OnboardingScreen} 
            />
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
            />
        </Stack.Navigator>
    );
};

export default AppStack;