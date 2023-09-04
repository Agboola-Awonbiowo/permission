import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import Map from './screens/Map';
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700}
        }}>
          <stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <stack.Screen name="AddPlace" component={AddPlace} options={{
            title: 'Add a new Place'
          }} />
          <stack.Screen name="Map" component={Map}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
