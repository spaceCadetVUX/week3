import React from 'react';
import {Text, View,Pressable} from 'react-native';

const Week3FirtScreen = () => {
  return (
          <View style={{
        backgroundColor:'#00CCF9',
        flex:1,
        width: 360,
        height: 640
      }}>
        <View style={{
          flex:2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            width: 140,
          height: 140,
          gap: 0,
          borderColor: 'black',
          borderWidth: 15,
          borderRadius:100
          }}>
          </View>
        </View>
        <View style={{
          flex:1,
          justifyContent: 'center',
          alignItems:'center'
        }}>
          <Text style={{
            fontFamily: 'Roboto',
            fontSize: 23,
            fontWeight: 700,
            lineHeight: 29.3,
            width: 189,
            height: 58,
            textAlign:'center',
            }}>
            GROW{'\n'}YOUR BUSINESS
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
            height: 36
            }}>
            We will help you to grow your business using online server
          </Text>
        </View>
        <View style={{
          flex:1,
          flexDirection:'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <Pressable>
            <View style={{
              backgroundColor:'#E3C000',
              padding:15,
              width: 119,
              height: 48,
              borderRadius:10,
              justifyContent:'center',
              alignItems:'center'
            }}>
              <Text style={{
                width: 77,
                height: 23,
                fontFamily: 'Roboto',
                fontSize: 19,
                fontWeight: 700,
                lineHeight: 23.44,
                textAlign: 'center'
              }}>LOGIN</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={{
              backgroundColor:'#E3C000',
              padding:15,
              width: 119,
              height: 48,
              borderRadius:10,
              justifyContent:'center',
              alignItems:'center'
            }}>
              <Text style={{
                width: 77,
                height: 23,
                fontFamily: 'Roboto',
                fontSize: 19,
                fontWeight: 700,
                lineHeight: 23.44,
                textAlign: 'center'
              }}>SIGN UP</Text>
            </View>
          </Pressable>
        </View>
      </View>
  );
};
export default Week3FirtScreen;