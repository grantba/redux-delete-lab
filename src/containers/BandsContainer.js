import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.deleteBand}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

// const mapStateToProps = (state) => {
//   return {bands: state.bands}
// }

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

// const mapDispatchToProps = (dispatch) => {
//   return {addBand: name => dispatch({type: "ADD_BAND", name: name})}
// }

// const mapDispatchToProps = (dispatch) => {
//   return {delete: id => dispatch({type: 'DELETE_BAND', id: id})}
// }

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
