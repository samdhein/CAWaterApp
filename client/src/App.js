import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
// import CreateForm from './views/CreateForm';
// import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;