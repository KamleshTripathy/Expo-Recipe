import "react-native-gesture-handler";
import React from "react";
import AppNavigator from "./navigator/AppNavigator";
import { AuthProvider } from "./context/authContext";
import { FavoriteProvider } from "./context/favoriteContext";
import { DarkModeProvider } from "./context/darkmodeContext";

const App = () => {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <DarkModeProvider>
          <AppNavigator />
        </DarkModeProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
};

export default App;
