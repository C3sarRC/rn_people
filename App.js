import React, {Fragment} from 'react';
import Toast from './src/components/common/Toast';
import AppDrawer from './src/routes/AppDrawer';

function App() {
  return (
    <Fragment>
      <Toast>
        <AppDrawer />
      </Toast>
    </Fragment>
  );
}

export default App;
