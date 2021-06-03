import React from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          id={itemData.item.id}
          onViewDetail={() => {
            props.navigation.navigate({
              routeName: "ProductDetail",
              params: {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              },
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
