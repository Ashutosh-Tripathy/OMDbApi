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
    this.state = { displayStart: true, questions: {} };
  }

  startQuiz = () => {
    this.setState({ displayStart: false });
    this.fetchQuestions();
  }

  resetQuestion = () =>  {
    this.fetchQuestions();
  }

  render () {
    if (this.state.displayStart) {
      return (<Button title="Start Quiz" onPress={this.startQuiz} />)
    } else {
      return (
          <ScrollView>
          <Text>Home Container</Text>
          <Text>{JSON.stringify(this.state)}</Text>
          <Button title="Retry" onPress={this.resetQuestion} />
          </ScrollView>
          )
    }
  }
  fetchQuestions= () => {
    fetch('https://opentdb.com/api.php?amount=10&type=boolean')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          questions: res 
        })
      })
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
