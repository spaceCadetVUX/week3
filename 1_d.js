import React from 'react';
import {Text, View,Pressable,Image,TextInput} from 'react-native';
const Week3App1_a = () => {
  return (
          <View style={{
            backgroundColor:'#31AA5230',
            flex:1,
            width: 360,
            height: 640
          }}>
            <View style={{
                flex:2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
              <Text
                style={{
                  width: 90,
                  height: 29,
                  fontFamily: 'Roboto',
                  fontSize: 25,
                  fontWeight: 700,
                  lineHeight: 29.3,
                  textAlign: 'center'
                }}
              >
                LOGIN
              </Text>    
            </View>
              <View style={{
                flex:2.5,
                justifyContent: 'space-around',
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
                <View 
                  style={{
                    flexDirection:'row',
                    alignItems:'center',
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
                      width:38,
                      height:36,
                      position:'absolute',
                      right:25
                    }}
                  />
                </View>
              </View>
              <View style={{
                flex:2,
                justifyContent: 'space-around',
                alignItems: 'center', paddingTop:40
              }}>
                <Pressable
                  style={{
                    width: 330,
                    height: 45,
                    backgroundColor:'#E53935',
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                >
                  <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 23.44,
                  color:'#FFFFFF',
                  textAlign: 'center'
                  }}>
                  LOGIN
                </Text>
                </Pressable>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 16.41,
                  textAlign: 'center'
                }}>
                  When you agree to terms and conditions
                </Text>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 16.41,
                  textAlign: 'center',
                  color:'#5D25FA'
                }}>
                  For got your password?
                </Text>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 16.41,
                  textAlign: 'center'
                }}>
                  Or login with
                </Text>
              </View>
              <View 
                style={{
                  flex:2,
                  alignItems:'center',
                  justifyContent:'center'
                }}>
                <View style={{
                  borderWidth:1,
                  borderColor:'#0680F1',
                  flexDirection:'row',
                }}>
                  <View style={{
                    backgroundColor:'#25479B',
                    width:110,
                    height:45,
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <Image source={require('./assets/icofacebook.png')} style={{right:8}}/>
                  </View>
                  <View style={{
                    backgroundColor:'#0F8EE0',
                    width:110,
                    height:45,
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <Text 
                      style={{
                        fontFamily: 'Arial',
                        fontSize: 30,
                        fontWeight: 800,
                        lineHeight: 58.59,
                        textAlign: 'center',
                        color:'white'
                      }}>
                        Z
                      </Text>
                  </View>
                  <View style={{
                    backgroundColor:'#FFFFFF',
                    width:110,
                    height:45,
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                    <Image source={require('./assets/icogoogle.png')}/>
                  </View>
                </View>
              </View>
      </View>
  );
};
export default Week3App1_a;