import React from 'react'
import { StyleSheet,Image, Button,ScrollView,  Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Colors'

const ProductDetailScreen = (props) => {
    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => {      
        return state.products.availableProducts.find(prod => prod.id === productId)
    })


    return (
        <ScrollView>
			<Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
			<View style={styles.actions}>
				<Button
					color={Colors.maroon}
					title="Add to Cart"
					onPress={() => {}}
				/>
			</View>
			<Text style={styles.price}>${selectedProduct.price}</Text>
			<Text style={styles.desc}>{selectedProduct.description}</Text>   
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions= navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
}

export default ProductDetailScreen



const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},	
	actions: {
		marginVertical: 10,
		alignItems: 'center' // So the button does not stretch in android.
		// width: '40%'
	},
	price: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: '#888',
		textAlign: 'center',
		marginVertical: 20
	},
	desc: {
		fontFamily: 'open-sans',
		fontSize: 14,
		textAlign: 'center',
		marginHorizontal: 20
	}
})
