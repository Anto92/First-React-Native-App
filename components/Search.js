import React from 'react'
import {TextInput, Image, Button, View} from 'react-native'
import style from "../Style"
import { StackNavigator} from 'react-navigation'
import List from './List'

export class Search extends React.Component {

	static navigationOptions = {
		title: "Rechercher une ville",
		tabBarIcon: () => {
			return <Image source={require("./icons/home.png")} style={{width:20, height:20}} />
		}
	}

	constructor (props) {
		super(props)
		this.state = {
			city: "Paris"
		}
	}

	setCity(city) {
		this.setState({
			city: city
		})
	}

	submit() {
		this.props.navigation.navigate("Result", {city: this.state.city})
	}

	render () {
		return(
			<View style={style.container}> 
		      <TextInput
			      	underlineColorAndroid='transparent'
			      	onChangeText={(text) => this.setCity(text)}
			        style={style.input}
			        value={this.state.city}
			      />
			      <Button color={style.color} onPress={() => this.submit()} title="Rechercher"/>
			</View>
		)
	}
}

const navigationOptions = {
	headerStyle: style.headerStyle,
	headerTitleStyle: style.headerTitle
}

export default StackNavigator({
	Result: {
		screen: List,
		navigationOptions
	},
	
	Search: {
		screen: Search,
		navigationOptions
	},
	
})




