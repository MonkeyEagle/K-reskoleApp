import { View, Text } from "react-native";
import React from "react";
import { ScreenContainer } from "../components/ScreenContainer";
import { Button } from "../components/Button";

export const SignUpScreen = () => {
  return (
    <ScreenContainer withGoBack>
      <View className="mb-20 mt-20">
        <Text className="text-5xl text-center font-semibold">iPhone 14</Text>
        <Button className="py-3.5 px-6" variant="AirBnb">
          Fortsæt
        </Button>
      </View>
      <View className="w-full mt-4 mb-4 font-normal text-xs leading-4">
        <Text className="mb-4 text-center flex">Eller</Text>
      </View>
      <View className="block">
        <Button className="py-3.5 px-6" variant="light">
          Fortsæt med Facebook
        </Button>
        <Button className="py-3.5 px-6" variant="light">
          Fortsæt med Google
        </Button>
        <Button className="py-3.5 px-6" variant="light">
          Fortsæt med Apple
        </Button>
        <Button className="py-3.5 px-6" variant="light">
          Fortsæt med Mail
        </Button>
      </View>
    </ScreenContainer>
  );
};
