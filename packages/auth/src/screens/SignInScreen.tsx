import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, MD3Colors, Text, TextInput} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';
import {WButton} from 'smartos-living-shared-components';

const SignInScreen = () => {
  const {signIn} = useAuth();
  const [email, setEmail] = React.useState('coworking@gmail.com');
  const [password, setPassword] = React.useState('123456');

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.welcomeHeadline}>
        SMARTOS PMS
      </Text>
      <View>
        <TextInput
          style={{marginTop: 16}}
          label="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={{marginTop: 16, marginBottom: 24}}
          label="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <WButton label="Login" onPress={() => signIn({email, password})} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 200,
  },
  welcomeHeadline: {
    color: MD3Colors.primary20,
    paddingBottom: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
