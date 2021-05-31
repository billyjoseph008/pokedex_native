import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  NativeRouter,
  Route,
  Switch,
} from "react-router-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar'
import PokemonList from './src/components/PokemonList'
import Details from './src/components/Details'
import './src/i18n';

const App = () => {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NativeRouter>
          <Navbar style={styles.navbar} />
          <View style={styles.main}>
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route path="/pokemon/:id" component={Details} />
            </Switch>
          </View>
        </NativeRouter>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
  },
  main: {
    flex: 8,
  },
});

