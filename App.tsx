import React from "react";
import { YellowBox } from "react-native";
import EventList from "./EventList";
import EventForm from "./EventForm";
// import { StackNavigator, } from 'react-navigation';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
]);
// export default function App() {
// export default class App extends React.Component {
//   render() {
//     return <EventList />;
//   }
// }


const Stack = createStackNavigator();

// function MyStack() {
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="list"
          component={EventList}
          options={{title: 'Your events'}}
        />
        <Stack.Screen 
        name="form" 
        component={EventForm} 
        options={{title: 'Add an events'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default StackNavigator({
//   list: {
//     screen: EventList,
//     navigationOptions: () => ({
//       title: 'Your events',
//     }),
//   },
//   form: {
//     screen: EventForm,
//     navigationOptions: () => ({
//       title: 'Add an event',
//     }),
//   },
// });

