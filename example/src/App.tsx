import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { NativeImageView } from 'native-image';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeImageView
        url="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
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
    width: 300,
    height: 300,
    marginVertical: 20,
  },
});
