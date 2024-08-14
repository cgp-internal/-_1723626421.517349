import '@babel/polyfill';
import 'identity-obj-proxy';
import 'jest-styled-components';

export function configureJest(config) {
  config.moduleNameMapper = {
    '^react-native$': 'react-native-web',
  };
  return config;
}

export { configureJest as configure };