import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  Header ,
  Text ,
  Input ,
  Button ,
} from 'react-native-elements' ;

export default class App extends Component {
  render() {
      return (
          <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>

                  <Header
                  statusBarProps = {{barStyle: 'dark-content', backgroundColor: 'white'}}
                    containerStyle={{
                      backgroundColor: 'white',
                      justifyContent: 'space-around',
                    }}
                  />
                  <View
                    style={{backgroundColor: 'white'}}
                  >
                  <Text h4 h4Style={{backgroundColor: 'white',color: 'gray',textAlign: 'center'}}> Fill the below details to Report a Compliant. {"\n"}</Text>
                  <View
                  style={{
                    marginStart: 25 , marginEnd: 25
                  }}
                  >
                  <Input
                      label = "Name"
                      placeholderTextColor= 'gray'
                  />
                  <Text>{"\n"}</Text>
                  <Text>{"\n"}</Text>
                  <Input
                      label = "Mobile"
                      keyboardType= 'numeric'
                  />
                  <Text>{"\n"}</Text>
                  <Text h6 style={{backgroundColor: 'white',color: 'gray',textAlign: 'center'}}>{'\n'} The provide contact number would be used for the verification process. {"\n"}</Text>

                  <Button
                    title= "Next"
                    raised= {true}
                    buttonStyle={{
                      backgroundColor:'blue',
                      borderRadius:50 ,
                      borderWidth: 1 ,
                      borderColor:'blue',
                      height:50 ,
                    }}
                    titleStyle={{
                      fontWeight: 'bold',
                      fontSize: 25,
                    }}
                  />
                  </View>
                  </View>
              </ScrollView>
            </SafeAreaView>
          </>
        );
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  input: {
    borderColor: 'white',
    borderRadius:50 ,
    borderWidth: 1 ,
    backgroundColor: 'white' , 
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 10,},
    shadowOpacity: 0.7,
    shadowRadius: 17,
    elevation: 20,
  }
});


