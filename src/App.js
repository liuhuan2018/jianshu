import React ,{ Component }from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Provider store={store}>
          <Header/>
        </Provider>
      </div>
    )
  }
}

export default App;
