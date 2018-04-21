import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DropDownStyle'


export default class DropDown extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    items: PropTypes.array
  }

  render() {
    return (
        <View>
          <Picker selectedValue={this.props.itemId} onValueChange={(itemValue) => this.props.onValueChange(itemValue)}>
            <Picker.Item label="Please select any value" value="0" />
            {(this.props.items || []).map(x => <Picker.Item key={x} label={x} value={x} />)}
          </Picker>
        </View>
        )
  }
}
