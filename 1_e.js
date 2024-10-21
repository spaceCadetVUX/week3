import React from 'react';
import {Text, View,Pressable,Image,TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';
const Week3App1_a = () => {
  return (
          <View style={{
            backgroundColor:'#31AA5230',
            flex:1,
            width: 360,
            height: 640
          }}>
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop:20
            }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontWeight: 700,
                  lineHeight: 29.3,
                  textAlign: 'center'
                }}
              >
                REGISTER
              </Text>    
            </View>
            <View style={{
              flex:1,
              justifyContent: 'center',
              alignItems:'center'
            }}>
              <TextInput
                placeholder={'Name'} 
                style={{
                  height: 54,
                  width: 330,
                  backgroundColor:'#C4C4C4',
                  paddingLeft:15
                }}
              >
              </TextInput>               
            </View>
            <View style={{
              flex:1,
              justifyContent: 'center',
              alignItems:'center'
            }}>
              <TextInput
                placeholder={'Phone'} 
                style={{
                  height: 54,
                  width: 330,
                  backgroundColor:'#C4C4C4',
                  paddingLeft:15
                }}
              >
              </TextInput>               
            </View>
            <View style={{
              flex:1,
              justifyContent: 'center',
              alignItems:'center'
            }}>
              <TextInput
                placeholder={'Email'} 
                style={{
                  height: 54,
                  width: 330,
                  backgroundColor:'#C4C4C4',
                  paddingLeft:15
                }}
              >
              </TextInput>               
            </View>
            <View 
              style={{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                position:'relative'
              }}
            >
              <TextInput
                placeholder={'Password'} 
                style={{
                  height: 54,
                  width: 330,
                  backgroundColor:'#C4C4C4',
                  paddingLeft:15
                }}
              >
              </TextInput>
              <Image 
                source={require('./assets/eye.png')} 
                style={{
                  position:'absolute',
                  right:30
                }}
              />
            </View>
            <View style={{
              flex:1,
              justifyContent: 'center',
              alignItems:'center'
            }}>
              <TextInput
                placeholder={'Birthday'} 
                style={{
                  height: 54,
                  width: 330,
                  backgroundColor:'#C4C4C4',
                  paddingLeft:15
                }}
              >
              </TextInput>               
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', alignItems:'center', paddingStart:30}}>
                <RadioButton/>
                <Text style={{paddingStart:15, fontSize:18,fontFamily:'Roboto'}}>Male</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', marginStart:40}}>
                <RadioButton/>
                <Text style={{paddingStart:15, fontSize:18,fontFamily:'Roboto'}}>Female</Text>
              </View>
            </View>
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
              <Pressable
                  style={{
                    width: 330,
                    height: 45,
                    backgroundColor:'#E53935',
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                >
                  <Text 
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: 23.44,
                      color:'#FFFFFF',
                      textAlign: 'center'
                    }}>
                    REGISTER
                  </Text>
                </Pressable>  
            </View>
            <View style={{flex:1, alignItems:'center',justifyContent:'start'}}>
              <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 16.41,
                  textAlign: 'center'
                }}>
                  When you agree to terms and conditions
                </Text>
            </View>
      </View>
  );
};
export default Week3App1_a;