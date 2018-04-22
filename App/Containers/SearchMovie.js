import React, { Component } from 'react'
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import DropDown from '../Components/DropDown.js'
import { SearchMovieTypes } from '../Redux/SearchMovieRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchMovieStyle'

class SearchMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: 0,
      type: 0,
      movies: []
    }
    this.pressSearchMovie = this.pressSearchMovie.bind(this);
  }

  pressSearchMovie = () => {
    if (this.state.title === '') {
      ToastAndroid.showWithGravity('Title field can not be empty.', ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else {
      this.props.searchMovie(this.state);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      movies: nextProps.movies
    }));
  }

  render() {
    let years = [];
    for (let i = 2018; i >= 1900; i--) {
      years.push(String(i));
    }
    return (
      <View>
        <Text>SearchMovie Container</Text>
        <Text>{JSON.stringify(this.state)}</Text>

        <Text>Movie title: </Text>
        <TextInput value={this.state.title} onChangeText={(text) => this.setState({ title: text })} />
        <Text>Year: </Text>
        <DropDown itemId={this.state.year} items={years} onValueChange={(value) => this.setState({ year: value })} />
        <Text>Movie type: </Text>
        <DropDown itemId={this.state.type} items={['movie', 'series', 'episode']} onValueChange={(value) => this.setState({ type: value })} />
        <Button onPress={this.pressSearchMovie} title='Search movie' />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.searchMovie.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: ({ title, year, type }) => dispatch({ type: SearchMovieTypes.SEARCH_MOVIE_REQUEST, title, year, movieType: type })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie)
