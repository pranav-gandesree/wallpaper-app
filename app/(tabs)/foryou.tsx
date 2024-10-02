// import { Text } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context"

// export default function foryou(){
//     return <SafeAreaView>
//         <Text>from for you  page</Text>
//     </SafeAreaView>
// }










import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen(){
    return <View>
        <Text> from libraru</Text>
    </View>
}

function LikedScreen(){
    return <View>
        <Text>
            from liked
        </Text>
    </View>
}

function SuggestedScreen(){
    return <View>
        <Text>
            from suggested
        </Text>
    </View>
}