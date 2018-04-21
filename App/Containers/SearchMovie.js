import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import DropDown from '../Components/DropDown.js'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchMovieStyle'

class SearchMovie extends Component {
   constructor (props) {
     super(props)
     this.state = {
      title: '',
      year: 0,
      type: 0
     }
   }

  render () {
    let years = [];
    for (let i = 2018; i >= 1900; i--) {
          years.push(String(i));
    }
    return (
      <View>
        <Text>SearchMovie Container</Text>
        <Text>{JSON.stringify(this.state)}</Text>
        
        <Text>Movie title: </Text>
        <TextInput value={this.state.title} onChangeText={(text) => this.setState({title: text})}/>
        <Text>Year: </Text>
        <DropDown itemId={this.state.year} items={years} onValueChange={(value) => this.setState({year: value})}  />
        <Text>Movie type: </Text>
        <DropDown itemId={this.state.type} items={['movie', 'series', 'episode']} onValueChange={(value) => this.setState({type: value})}  />
     </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie)
