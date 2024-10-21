import React from 'react';
import {Text, View,Pressable,Image,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Week3App1_a = () => {
  return (
          <View style={{
            backgroundColor:'#D1F4F6',
            flex:1,
            width: 360,
            height: 640
          }}>
            <LinearGradient
              colors={['#C7F4F7','#C7F4F7','#C7F4F7','#C7F4F7','#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']} 
              style={{
                flex:1
              }}
            >
              <View style={{
                flex:2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Image source={require('./assets/lock.png')}
                placeholder={"ha"}
                  style={{
                    width: 105,
                    height: 117,
                  }}
                />
              </View>
              <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems:'center'
              }}>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontWeight: 700,
                  lineHeight: 29.3,
                  width: 189,
                  height: 58,
                  textAlign:'center',
                  }}>
                  FORGET PASSWORD
                </Text>
              </View>
              <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: '15px',
                  fontWeight: '700',
                  lineHeight: '17.58px',
                  textAlign: 'center',
                  width: 302,
                  height: 53
                  }}>
                  Provide your account’s email for which you want to reset your password
                </Text>
              </View>
              <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={require('./assets/mail.png')}
                  style={{
                    width: 48,
                    height: 45,
                  }}
                />
                <TextInput
                  placeholder={'Email'} 
                  style={{
                    height: 45,
                    width: 257,
                    backgroundColor:'#C4C4C4',
                  }}
                >
                </TextInput>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Pressable>
                  <View 
                    style={{
                      width:305,
                      height:45,
                      backgroundColor:'#E3C000',
                      alignItems:'center',
                      justifyContent:'center'
                    }}
                  >
                    <Text 
                      style={{
                        fontFamily: 'Roboto',
                        fontSize: '18',
                        fontWeight: '700',
                        lineHeight: '21.09',
                        textAlign: 'center',
                      }}
                    >
                    NEXT
                    </Text>  
                  </View>
                </Pressable>    
              </View>
              <View style={{flex:1}}></View>
            </LinearGradient>
      </View>
  );
};
export default Week3App1_a;