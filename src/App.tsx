import React from 'react';
import { Provider } from 'react-redux';
import { Alert } from 'reactstrap';
import { store } from './redux/root.store';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <div>
          {/* These are Bootstrap components, provided to us by the reactstrap package */}
          {/* Go here to view all the components: https://reactstrap.github.io/components/alerts/ */}
          <Alert color="primary">
            This is a primary alert — check it out!
          </Alert>
          <Alert color="secondary">
            This is a secondary alert — check it out!
          </Alert>
          <Alert color="success">
            This is a success alert — check it out!
          </Alert>
          <Alert color="danger">
            This is a danger alert — check it out!
          </Alert>
          <Alert color="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert color="info">
            This is a info alert — check it out!
          </Alert>
          <Alert color="light">
            This is a light alert — check it out!
          </Alert>
          <Alert color="dark">
            This is a dark alert — check it out!
          </Alert>
        </div>
      </div>

    </Provider>
  );
}

export default App;
