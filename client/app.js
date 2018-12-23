// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './src/pages/App.jsx';

import './src/style/index.less';

ReactDom.render(
	<App />,
	document.getElementById('app')
);