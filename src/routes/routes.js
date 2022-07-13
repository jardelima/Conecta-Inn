import React from "react";
import {Button} from "react-native";
import {HeaderBackButton} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RoutesDrawer from "./routesDrawer";

import Splash from "../pages/Splash/Splash1";
import Splash2 from "../pages/Splash/Splash2";
import Login from "../pages/Login";
import ForgotPasswordStageOne from "../pages/ForgotPassword/ForgotPasswordStageOne";
import ForgotPasswordStageTwo from "../pages/ForgotPassword/ForgotPasswordStageTwo";
import ForgotPasswordStageThree from "../pages/ForgotPassword/ForgotPasswordStageThree";
import ForgotPasswordSuccess from "../pages/ForgotPassword/ForgotPasswordSuccess";
import RegisterStageOne from "../pages/Register/RegisterStageOne";
import RegisterStageTwo from "../pages/Register/RegisterStageTwo";
import RegisterStageThree from "../pages/Register/RegisterStageThree";
import RegisterStageFour from "../pages/Register/RegisterStageFour";
import RegisterStageFive from "../pages/Register/RegisterStageFive";
import RegisterSucces from "../pages/Register/RegisterSuccess";

import InternalHotel from "../pages/InternalHotel";

const Stack = createNativeStackNavigator();

function Routes({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Splash2"
        component={Splash2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RoutesDrawer"
        component={RoutesDrawer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ForgotPasswordStageOne"
        component={ForgotPasswordStageOne}
        options={{
          title: "Recuperar senha",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="ForgotPasswordStageTwo"
        component={ForgotPasswordStageTwo}
        options={{
          title: "Recuperar senha",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="ForgotPasswordStageThree"
        component={ForgotPasswordStageThree}
        options={{
          title: "Recuperar senha",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="ForgotPasswordSuccess"
        component={ForgotPasswordSuccess}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegisterStageOne"
        component={RegisterStageOne}
        options={{
          title: "Cadastro",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="RegisterStageTwo"
        component={RegisterStageTwo}
        options={{
          title: "Cadastro",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="RegisterStageThree"
        component={RegisterStageThree}
        options={{
          title: "Cadastro",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="RegisterStageFour"
        component={RegisterStageFour}
        options={{
          title: "Cadastro",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="RegisterStageFive"
        component={RegisterStageFive}
        options={{
          title: "Cadastro",
          headerTitleAlign: "center",
          headerTintColor: "#ADB5BD",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "SourceSansPro-SemiBold",
          },
        }}
      />

      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSucces}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="InternalHotel"
        component={InternalHotel}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
