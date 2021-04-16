import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';
import "./App.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Dan" />, mountNode);