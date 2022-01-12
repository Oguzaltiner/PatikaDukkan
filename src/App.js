import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import database from '@react-native-firebase/database';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Message from './pages/Messages';
import colors from './styles/colors';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const App = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <AuthStack />
        ) : (
          <Stack.Screen
            name="MessagesScreen"
            component={Message}
            options={{
              title: 'dertler',
              headerTintColor: colors.darkgreen,
              // headerRight: () => (
              //   <Icon
              //     name="logout"
              //     size={30}
              //     color={colors.darkgreen}
              //     onPress={() => auth().signOut()}
              //   />
              // ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
