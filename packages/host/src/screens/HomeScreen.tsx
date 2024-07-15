import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  ListRenderItem,
  Platform,
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
import {SCREEN_WIDTH} from '../constants';
import newProducts from '../data/newProducts.json';
import upcomingBookings from '../data/upcomingBookings.json';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import {TabsParamList} from '../navigation/TabsNavigator';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  MaterialBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const renderUpcoming = ({item}: any) => (
  <View
    style={{
      borderBottomWidth: 1,
      height: 30,
      marginBottom: 10,
    }}>
    <Text>{`Location ${item.title}`}</Text>
  </View>
);

const renderProduct: ListRenderItem<any> = ({item, index}) => (
  <Card mode="contained" style={styles.cardWidth}>
    <Card.Cover source={{uri: `${item.image}?${index}`}} />
    <Card.Content>
      <Title>{`${item.name} • $${item.price}`}</Title>
      <Paragraph numberOfLines={1}>{item.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => {}}>To Wishlist</Button>
      <Button onPress={() => {}}>Buy</Button>
    </Card.Actions>
  </Card>
);

const renderDivider = () => <Divider style={styles.divider} />;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.headerTitle}>
        Welcome to co-working
      </Text>
      <FlatList
        style={{marginBottom: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={upcomingBookings.data}
        renderItem={renderUpcoming}
        ItemSeparatorComponent={renderDivider}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={newProducts.data}
        renderItem={renderProduct}
        ItemSeparatorComponent={renderDivider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    flex: 1,
    backgroundColor: '#fff',
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
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
  },
  cardWidth: {
    width: SCREEN_WIDTH - 32,
    marginBottom: 16,
  },
});

export default HomeScreen;
