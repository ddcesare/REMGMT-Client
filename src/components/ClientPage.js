import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import * as clientActions from '../actions/clientActions'


class ClientPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      client: Object.assign({}, props.client),
      errors: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.client.id != nextProps.client.id) {
      this.setState({client: Object.assign({}, nextProps.client)})
    }
  }


  render () {
    let client = this.state.client
    return (
      <Card>
        <CardHeader
          title={client.name}
          subtitle={client.type}
          avatar="/images/avatar.jpeg"
        />
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          {client.description}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}

ClientPage.propTypes = {
  client: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function getClientById (clients, id) {
  const client = clients.filter(client => client.id === id)
  return (client) ? client[0] : null
}

function mapStateToProps (state, ownProps) {
  let clientId = ownProps.params.id
  let client = (clientId && state.clients.length > 0)
    ? getClientById(state.clients, clientId)
    : { id: '', name: '', surname: '', description: '', type: '' }

  return {
    client: client
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage)

