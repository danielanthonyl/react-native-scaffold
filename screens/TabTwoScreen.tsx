import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

const TabTwoScreen = () => (
  <View style={styles.container}>
    <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabTwoScreen;
