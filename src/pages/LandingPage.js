import Header from 'parts/Header'
import React, { Component } from 'react'
import landingpage from 'json/landingPage.json'
import Hero from 'parts/Hero'

export default class LandingPage extends Component {
  render() {
    return (
     <>
        <Header {...this.props}></Header>
        <Hero data={landingpage.hero} />
     </>
    )
  }
}
