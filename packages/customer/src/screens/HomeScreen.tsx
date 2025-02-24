import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Card,
  Divider,
  Paragraph,
  Text,
  Title,
} from 'react-native-paper';
import products from '../data/products.json';
import {WButton} from 'smartos-living-shared-components';

const showNotImplementedAlert = () => Alert.alert('Not implemented yet');

const renderProduct: ListRenderItem<any> = ({item, index}) => (
  <Card mode="contained" style={styles.cardWidth}>
    <Card.Cover source={{uri: `${item.image}?${index}`}} />
    <Card.Content>
      <Title>{`${item.name} • $${item.price}`}</Title>
      <Paragraph numberOfLines={1}>{item.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={showNotImplementedAlert}>To Wishlist</Button>
      <Button onPress={showNotImplementedAlert}>Buy</Button>
    </Card.Actions>
  </Card>
);

const renderDivider = () => <Divider style={styles.divider} />;

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text variant="titleLarge" style={styles.customerTitle}>
        Customer Module V2
      </Text>
      <WButton label="Hello" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products.data}
        renderItem={renderProduct}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          New Products
        </Text>
        <Button mode="contained-tonal" onPress={showNotImplementedAlert}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products.data}
        renderItem={renderProduct}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          You may also like
        </Text>
        <Button mode="contained-tonal" onPress={showNotImplementedAlert}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products.data}
        renderItem={renderProduct}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
    </ScrollView>
  );
};

const {width: sliderItemWidth} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
  customerTitle: {
    flex: 1,
    padding: 16,
    fontSize: 30,
  },
  cardWidth: {
    width: 270,
  },
  sliderItem: {
    width: sliderItemWidth,
    height: (sliderItemWidth / 3) * 2,
  },
});

export default HomeScreen;
