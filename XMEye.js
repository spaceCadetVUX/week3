import { View, Text,TextInput,Image,Pressable } from 'react-native';

export default function App() {
  return (
    <View style={{width:360,height:640}}>
        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('./assets/eyeball.png')}/>  
        </View>
        <View style={{flex:2.5,justifyContent:'center',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',position:'relative'}}>
            <Image style={{position:'absolute',left:9}} source={require('./assets/Group3.png')}/>
            <TextInput
              placeholder={'Please input user name'}
              placeholderTextColor={'#C4C4C4'}
              style={{
                width: 330,
                height: 54,
                borderBottomWidth:1,
                borderColor:'#C4C4C4',
                paddingLeft:60,
                fontSize:18,
                fontWeight:400,
                lineHeight:21.09
              }}
            >
            </TextInput>
          </View>
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
              <Image style={{position:'absolute',left:9}} source={require('./assets/Group5.png')}/>
              <TextInput
                placeholder={'Please input password'}
                placeholderTextColor={'#C4C4C4'}
                style={{
                  width: 330,
                  height: 54,
                  borderBottomWidth:1,
                  borderColor:'#C4C4C4',
                  paddingLeft:60,
                  fontSize:18,
                  fontWeight:400,
                  lineHeight:21.09
                }}
              >
              </TextInput>
            </View>
        </View>
        <View style={{flex:2,justifyContent:'space-around',alignItems:'center'}}>
          <Pressable 
            style={{
              width:300,
              height:48,
              borderRadius:10,
              backgroundColor:'#386FFC',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Text 
              style={{
                fontFamily:'Arial',
                fontSize:20,
                fontWeight:700,
                lineHeight:24.44,
                color:'white'
              }}>
              LOGIN
            </Text>
          </Pressable>
          <View style={{flexDirection:'row', justifyContent:'space-between',width:300}}>
            <Text 
              style={{
                fontFamily:'Arial',
                fontSize:18,
                fontWeight:700,
                lineHeight:24.44,
              }}>
              Register
            </Text>
            <Text 
              style={{
                fontFamily:'Arial',
                fontSize:18,
                fontWeight:700,
                lineHeight:24.44
              }}>
              Forgot password
            </Text>
          </View>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View style={{borderWidth:1,width:62,borderColor:'#C4C4C4'}}></View>
          <Text
            style={{
              fontFamily:'Arial',
                fontSize:18,
                fontWeight:700,
                lineHeight:24.44
            }}>
            Other Login Methods
          </Text>
          <View style={{borderWidth:1,width:62,borderColor:'#C4C4C4'}}></View>
        </View>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
          <View 
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              width:300
            }}>
              <Image source={require('./assets/Group8.png')}/>
              <Image source={require('./assets/Group9.png')}/>
              <View 
                style={{
                  backgroundColor:'#3A579C',
                  width:74,
                  height:74,
                  borderRadius:10,
                  justifyContent:'center',
                  alignItems:'center'}}>
                <Image source={require('./assets/brandicoFacebook.png')}/>
              </View>
          </View>
        </View>
    </View>
  );

}
