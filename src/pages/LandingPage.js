import React, { Component } from 'react';
import landingpage from 'json/landingPage.json';

import MostPicked from 'parts/MostPicked';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    console.log('props', this.props);
    return (
     <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingpage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingpage.mostPicked} />
        <Categories data={landingpage.categories}/>
        <Testimoni data={landingpage.testimonial} />
        <Footer />
     </>
    )
  }
}
