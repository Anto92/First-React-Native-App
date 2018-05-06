import React from 'react'
import { Text, ActivityIndicator} from 'react-native'
import style from '../Style'

export default class List extends React.Component {

	static navigationOptions = ({navigation}) => {
		return {
			// title: `Météo / ${navigation.state.params.city}`
		}
	}

	constructor (props) {
		super(props)
		this.state = {
			city:  "Paris", // this.props.navigation.state.params.city,
			report: null
		}
	}

	render () {
		if (this.state.report === null) {
			return(
				<ActivityIndicator color={style.color} size="large" />
			)
		} else {
			return(
			<Text> Salut les gens </Text>
		)
		}
	}
}