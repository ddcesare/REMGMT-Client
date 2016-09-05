import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import * as clientActions from '../actions/clientActions'

class ClientsPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      client: {name: ''}
    }
  }

  render () {
    return (
      <div>
        <List>
          {this.props.clients.map(client => {
            return (
              <ListItem
                primaryText={client.name}
                leftIcon={<ActionGrade color={pinkA200} />}
                rightAvatar={<Avatar src="images/avatar.jpeg" />}
              />
            )
          })}
        </List>

      </div>
      )
  }
}

ClientsPage.propTypes = {
  clients: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    clients: state.clients
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsPage)
