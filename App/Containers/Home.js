import React, { Component } from 'react'
import { ScrollView, Text, Button, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeStyle'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { displayStart: true, questions: {}, score: 0, time: 0, exit: false };
  }

  increaseTime = () => {
    this.setState({ time: this.state.time + 1 });
    setTimeout(this.increaseTime, 1000);
  }
  startQuiz = () => {
    this.setState({ displayStart: false, time: 0 });
    this.fetchQuestions();
    this.increaseTime();
  }

  resetQuestion = () => {
    this.setState({ time: 0 });
    this.fetchQuestions();
    this.increaseTime();
  }

  render() {
    let { displayStart, questions } = this.state;
    if (displayStart) {
      return (<Button title="Start Quiz" onPress={this.startQuiz} />)
    } else {

      return (
        <ScrollView>
          <Text>Home Container</Text>
          {(questions.results || []).map(x => <View><View style={styles.row}><Text>{x.question}</Text></View><View style={styles.rowbtn}><Button title="True" /><Button title="False" /></View></View>)}

          <Text>{"Time: " + this.state.time}</Text>
          <Button title="Retry" onPress={this.resetQuestion} />
        </ScrollView>
      )
    }
  }
  fetchQuestions = () => {
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
