import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Tasks from './Components/containers/tasks';

function App() {
  return (
    <Provider store={Store}>
      <Tasks></Tasks>
    </Provider>
  );
}

export default App;
