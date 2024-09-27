import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

export type SplashScreenProps = StackScreenProps<RootStackParamList, "Splash">;

export type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">;
