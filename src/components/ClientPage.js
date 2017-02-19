import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import * as clientActions from '../actions/clientActions'


class ClientPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      client: Object.assign({}, props.client),
      errors: {},
      edit: false
    }

    this.setEditMode = this.setEditMode.bind(this)
    this.updateClientState = this.updateClientState.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.client.id != nextProps.client.id) {
      this.setState({client: Object.assign({}, nextProps.client)})
    }
  }

  setEditMode () {
    this.setState({edit: true})
  }

  updateClientState (event) {
    const field = event.target.name
    let client = this.state.client
    client[field] = event.target.value
    return this.setState({client})
  }

  render () {
    let client = this.state.client
    let edit = this.state.edit
    console.log(client)
    if (edit) {
      return (
        <Card>
          <TextField
            name="name"
            value={client.name}
            hintText="Client's name"
          /><br />
          <TextField
            name="surname"
            value={client.surname}
            hintText="Client's surname"
          /><br />
          <SelectField value={client.type} onChange={this.updateClientState}>
            <MenuItem value="owner" primaryText="Owner" />
            <MenuItem value="tenant" primaryText="Tenant" />
            <MenuItem value="buyer" primaryText="Buyer" />
          </SelectField>
          <br />
          <TextField
            name="description"
            value={client.description}
            hintText="Client's description"
            multiLine={true}
            rows={2}
            rowsMax={4}
          />
          <CardActions>
            <FlatButton label="< Back" href={`/client/${client.id}`} />
          </CardActions>
        </Card>
      )
    } else {
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
            <FlatButton label="< Back" href="/clients" />
            <FlatButton label="Edit" onClick={this.setEditMode} />
          </CardActions>
        </Card>
      )
    }
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

