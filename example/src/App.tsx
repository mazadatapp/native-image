import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { NativeImageView } from 'native-image';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeImageView
        url="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 198,
    height: 300,
    marginVertical: 20,
    borderRadius: 30
  },
});
