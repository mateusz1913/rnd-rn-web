import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/App';
import style from './web/vectorIcons';

document.head.appendChild(style);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
