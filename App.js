/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import About from './components/About.js'
import Search from './components/Search.js'
import { View, StatusBar } from 'react-native' 
import { createBottomTabNavigator } from 'react-navigation'

// Les 2 lignes suivantes servent juste a ignoreer un warning
// Trouver un moyen plus clean de faire ça
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Tabs = createBottomTabNavigator({
	Search: { screen: Search},
	About: { screen: About}
}, {
		tabBarOptions: {
			showIcon: true, // Maybe useless
			showLabel: false,
			indicatorStyle: {
				height: 2,
				backgroundColor: '#FFF'
			},
			style: {
				backgroundColor: "#a2273c",
				borderTopWidth: 1,
				borderColor: "#3f101c"
			}
	},
})

export default class App extends React.Component {
  render() {
    return (
    	<View style={{flex: 1}}>
    		<StatusBar hidden={true}/>
			<Tabs/>
		</View>
    );
  }
}