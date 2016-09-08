import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import {pinkA200} from 'material-ui/styles/colors'
import * as clientActions from '../actions/clientActions'

class ClientsPage extends React.Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div>
        <List>
          {this.props.clients.map((client, index) => {
            return (
              <Link key={index} to={`/client/${client.id}`}>
                <ListItem
                  primaryText={`${client.surname}, ${client.name}`}
                  leftIcon={<ActionGrade color={pinkA200} />}
                  rightAvatar={<Avatar src="images/avatar.jpeg" />}
                />
              </Link>
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
