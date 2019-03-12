import React from 'react'
import { connect } from 'react-redux'

import { startClock, tickClock } from '../actions'
import Page from '../components/page'

class About extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))
    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='About Page' linkTo='/' NavigateTo='Index Page' />
  }
}

export default connect()(About)
