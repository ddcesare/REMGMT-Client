import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar'

const App = (props) => {
  return (
    <div>
      <AppBar
        title="REMGMT"
      />
      <IndexLink to="/">Home</IndexLink>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
