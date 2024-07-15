import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomerScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6]?.map((el, index) => {
          return (
            <View key={index} style={styles.item}>
              <Image
                style={styles.image}
                source={{uri: 'https://picsum.photos/700'}}
              />
              <Text>{`Customer ${el}`}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 16, marginTop: 24},
  item: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
});
