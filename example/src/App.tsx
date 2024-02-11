import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { NativeImageView } from 'native-image';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeImageView
       url="/storage/emulated/0/Download/Test.jpg"
       radius="20"
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
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
