import React from 'react';
import * as serviceWorker from './serviceWorker';

import App from './App';


import "./css/normalize.css"
import "./css/style.css"

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
