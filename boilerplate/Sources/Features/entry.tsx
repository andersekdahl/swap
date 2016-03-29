import ReactDOM from 'react-dom';
import App from './App';
import 'whatwg-fetch';
import "babel-polyfill";

const container = document.getElementById('container');

ReactDOM.render(<App />, container);
