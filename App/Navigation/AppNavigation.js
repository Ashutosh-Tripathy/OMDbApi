import { StackNavigator } from 'react-navigation'
import Home from '../Containers/Home'
import SearchResult from '../Containers/SearchResult'
import DropDown from '../Components/DropDown'
import SearchMovie from '../Containers/SearchMovie'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Home: { screen: Home },
  SearchResult: { screen: SearchResult },
  DropDown: { screen: DropDown },
  SearchMovie: { screen: SearchMovie },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
