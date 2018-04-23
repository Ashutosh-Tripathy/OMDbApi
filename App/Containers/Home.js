import React, { Component } from 'react'
import { ScrollView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeStyle'

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = { displayStart: true };
  }

  startQuiz = () => {
    this.setState({ displayStart: false });
  }

  render () {
    if (this.state.displayStart) {
      return (<Button title="Start Quiz" onPress={this.startQuiz} />)
    } else {
      return (
          <ScrollView>
          <Text>Home Container</Text>
          </ScrollView>
          )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
