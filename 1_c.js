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
                paddingTop:50
              }}>
                <Text 
                  style={{
                    width: 154,
                    height: 70,
                    fontFamily: 'Roboto',
                    fontSize: 53,
                    fontWeight: 700,
                    lineHeight: 70.31,
                    textAlign: 'center',
                  }}
                >
                  CODE
                </Text>
              </View>
              <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems:'center'
              }}>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 23.44,
                  width: 302,
                  height: 53,
                  textAlign:'center',
                  }}>
                  VERIFICATION
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
                  Enter ontime password sent on ++849092605798
                </Text>
              </View>
              <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <View 
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth:1
                  }}>
                </View>
                <View 
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth:1
                  }}>
                </View>
                <View 
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth:1
                  }}>
                </View>
                <View 
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth:1
                  }}>
                </View>
                <View 
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth:1
                  }}>
                </View>
                <View 
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth:1
                  }}>
                </View>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Pressable>
                  <View 
                    style={{
                      width:339,
                      height:50,
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
                    VERIFY CODE
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