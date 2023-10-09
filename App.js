import firstScreen from "./screen/firstScreen";
import SecondScreen from "./screen/secondScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="firstScreen" component={firstScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
