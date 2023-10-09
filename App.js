import firstScreen from './screen/firstScreen'
import SecondScreen from './screen/secondScreen'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="firstScreen" component={firstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    );
}