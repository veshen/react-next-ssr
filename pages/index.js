import React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import { loadData, startClock, tickClock } from '../actions'
import Page from '../components/page'

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData({size:20,current:1,isHandpick:1}))
    }

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <div className='container'>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 className="title">Hello world!</h1>
    <Page title='Index Page123123' linkTo='/about' NavigateTo='about Page' />
        <style jsx>{`
            .title{
                color : yellow;
            }
          .container{
              background : red;
          }
          *{
              margin : 0;
              padding : 0;
          }
        `}</style>
  </div>

  }
}

export default connect()(Index)
