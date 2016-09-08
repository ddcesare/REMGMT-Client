import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    return (
      <div>
        <AppBar
          title="REMGMT"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          docked={false}
        >
          <IndexLink to="/"><MenuItem onTouchTap={this.handleClose} primaryText="Home" /></IndexLink>
          <Link to="/clients"><MenuItem onTouchTap={this.handleClose} primaryText="Clients" /></Link>
        </Drawer>
        <br/>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
