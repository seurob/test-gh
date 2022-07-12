import './App.css';
import Posts from './components/Posts';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <hr />
          <Posts />
        </div>
      </Provider>
  );
}

export default App;
