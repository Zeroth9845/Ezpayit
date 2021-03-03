import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Button,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {

  const { colors } = useTheme();

    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
    <View style={styles.header}>
        <Animatable.Image 
            animation="bounceIn"
            duraton="1500"
        source={require('../assets/splashlogo.jpg')}
        style={styles.logo}
        resizeMode="stretch"
        />
    </View>
    <Animatable.View 
        style={[styles.footer, {
            backgroundColor: '#FFFFFF'
        }]}
        animation="fadeInUpBig"
    >
        <Text style={[styles.title, {
            color: '#000000'
        }]}>The only eWallet that you need.</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} >
        <Text style={styles.text}>Sign in with account</Text>
        </TouchableOpacity>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} >
        <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={styles.textSign}>Get Started </Text>
            <MaterialIcons 
                        name="launch"
                        color="#ffffff"
                        size={22}
                    />
                    </LinearGradient>
        </TouchableOpacity>
        </View>
    </Animatable.View>
  </View>
);
};
export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#6970E3'
  },
  header: {
      flex: 2.5,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo*2,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: '#7D2AE8',
      fontSize :16,
      marginTop:15

  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  Login: {
      width: 180,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontSize :20,
      fontWeight: 'bold'
  }

});

