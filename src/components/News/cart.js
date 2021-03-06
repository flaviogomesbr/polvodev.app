import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Linking,
  Image,
} from "react-native";

import styles from './styles';


function CartNews(props) {

  return (

    <View style={styles.card}>
      <View style={styles.cardText}>
        <View style={styles.cartNews}>
          <Image style={styles.newsImage} source={props.img} />
        </View>

        <View style={styles.cartInfos}>
          <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
              {props.title}
          </Text>

          <View style={styles.botaoCard}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.texto}  onPress={() => Linking.openURL(`${props.link}`)}>veja mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CartNews;
