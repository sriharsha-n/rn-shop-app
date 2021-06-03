import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { createAppContainer } from "react-navigation";const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
