import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchResultStyle'

class SearchResult extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    const { state } = this.props.navigation;
    var search = state.params && state.params.movies ? state.params.movies.Search : [];
    let txt = '';
    if (search.length == 0) {
      txt = 'Error! No result found';
    }

    return (
      <ScrollView>
        <Text>{JSON.stringify(search)}</Text>
        <Text>Search Result</Text>
        {(search || []).map(x => <View style={{ padding: 20, borderWidth: 1 }}><Image source={{ uri: x.Poster }} style={{ padding: 5, width: 200, height: 200 }} /><Text>{x.Title}</Text><Text>{x.Year}</Text><Text>{x.imdbID}</Text><Text>{x.Type}</Text></View>)}
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
