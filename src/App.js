import React from 'react';
import {connect} from 'react-redux';

import { AddFeature, RemoveFeature} from './actions/additionalFeaturesActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.RemoveFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.AddFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.carSalesReducer.additionalPrice,
    car: state.carSalesReducer.car,
    additionalFeatures: state.carSalesReducer.additionalFeatures,
  }
}

export default connect(
  mapStateToProps,
  {AddFeature, RemoveFeature}
)(App);
