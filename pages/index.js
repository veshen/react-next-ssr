import React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import { loadData, startClock, tickClock } from '../actions'
import Page from '../components/page'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const AwesomeButton = ({ name }) => (
    <AwesomeButtonStyle href="#" data-title={name?name:"Awesome Button"}></AwesomeButtonStyle>
)
const AwesomeButtonStyle = styled.a`
    position: relative;
    display: inline-block;
    padding: 1.2em 2em;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    user-select: none;
    color: white;
&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border-radius: 4px;
    transition: box-shadow .5s ease, transform .2s ease;
    will-change: transform;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    transform:
        translateY(var(--ty, 0))
        rotateX(var(--rx, 0))
        rotateY(var(--ry, 0))
        translateZ(var(--tz, -12px));
}

&:hover::before {
    box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
}

&::after {
    position: relative;
    display: inline-block;
    content: attr(data-title);
    transition: transform .2s ease;
    font-weight: bold;
    letter-spacing: .01em;
    will-change: transform;
    transform:
        translateY(var(--ty, 0))
        rotateX(var(--rx, 0))
        rotateY(var(--ry, 0));
}
`;

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
    const docStyle = document.documentElement.style
    const aElem = document.querySelector('a')
    const boundingClientRect = aElem.getBoundingClientRect()

    aElem.onmousemove = function(e) {

    	const x = e.clientX - boundingClientRect.left
    	const y = e.clientY - boundingClientRect.top

    	const xc = boundingClientRect.width/2
    	const yc = boundingClientRect.height/2

    	const dx = x - xc
    	const dy = y - yc

    	docStyle.setProperty('--rx', `${ dy/-1 }deg`)
    	docStyle.setProperty('--ry', `${ dx/10 }deg`)

    }

    aElem.onmouseleave = function(e) {

    	docStyle.setProperty('--ty', '0')
    	docStyle.setProperty('--rx', '0')
    	docStyle.setProperty('--ry', '0')

    }

    aElem.onmousedown = function(e) {

    	docStyle.setProperty('--tz', '-25px')

    }

    document.body.onmouseup = function(e) {

    	docStyle.setProperty('--tz', '-12px')

    }
  }

  render () {
    return <div className='container'>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 className="title">Hello world!</h1>
    <AwesomeButton name={'aaa'}/>
    <Page title='Index Page123123' linkTo='/about' NavigateTo='about Page' />
        <style jsx>{`

            body {
            	display: flex;
            	align-items: center;
            	justify-content: center;
            	height: 100vh;
            	transform-style: preserve-3d;
            	transform: perspective(800px);
            }
        `}</style>
  </div>

  }
}

export default connect()(Index)
