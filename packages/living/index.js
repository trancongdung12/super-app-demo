/**
 * @format
 */

import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import getContainersURL from '../catalog-server/utils/getContainersURL';
import {name as appName} from './app.json';
import {version as appVersion} from './package.json';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const containersURL = getContainersURL({
    // hostname: 'https://super-app-demo-ruby.vercel.app', //-> release,
    version: appVersion,
    platform: Platform.OS,
    appName,
  });

  console.log('log ---dashboard', containersURL);
  const response = await fetch(containersURL);

  const containers = await response.json();

  const resolveURL = Federated.createURLResolver({
    containers,
  });

  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  console.log('log ---123123', {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  });

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
