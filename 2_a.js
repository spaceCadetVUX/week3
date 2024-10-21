import { View, Text,TextInput,Image,Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={{width:360,height:640}}>
      <LinearGradient colors={['#FBCB00', '#BF9A00']} style={{flex:1,justifyContent:'space_between'}}>
        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
          <Text 
          style={{
            fontFamily: 'Roboto',
            fontSize: 30,
            fontWeight: 700,
            lineHeight: 35.16,
            textAlign: 'start',
            width:330
          }}>
            LOGIN
          </Text>
        </View>
        <View style={{flex:2.5,justifyContent:'center',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',position:'relative'}}>
            <Image style={{position:'absolute',left:9}} source={require('./assets/avatarUser.png')}/>
            <TextInput
              placeholder={'Name'}
              style={{
                width: 330,
                height: 54,
                backgroundColor: '#C4C4C44D',
                borderWidth: 1,
                borderColor: '#F2F2F2',
                paddingLeft:60
              }}
            >
            </TextInput>
          </View>
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
              <Image style={{position:'absolute',left:9}} source={require('./assets/lock.png')}/>
              <TextInput
                placeholder={'Password'}
                style={{
                  width: 330,
                  height: 54,
                  backgroundColor: '#C4C4C44D',
                  borderWidth: 1,
                  borderColor: '#F2F2F2',
                  paddingLeft:60
                }}
              >
              </TextInput>
              <Image style={{position:'absolute',right:30}} source={require('./assets/eye.png')}/>
            </View>
        </View>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
          <Pressable 
            style={{
              width:330,
              height:45,
              backgroundColor:'#060000',
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
        </View>
        <View style={{flex:3,justifyContent:'start',alignItems:'center'}}>
          <Text
            style={{
              fontFamily:'Arial',
                fontSize:20,
                fontWeight:700,
                lineHeight:24.44
            }}>
            CREATE ACCOUNT
          </Text>
        </View>
      </LinearGradient>
    </View>
  );

}
