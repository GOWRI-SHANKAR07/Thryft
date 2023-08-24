import { View, Text, Image, TouchableOpacity, FlatList, PermissionsAndroid, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/Profile'
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../Constants/Theme';
import { ProfileDataCont1, ProfileDataCont2, ProfileDataCont3 } from '../Data/ProfileData';
import ProfileList from '../Components/ProfileList';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { useAppContext } from '../Context/ContextProvider';


const ProfileScreen = () => {

  const [isEnabled, setIsEnabled] = useState(false);

  // image upload context
  const { permissionGranted, setPermissionGranted, imageUri, setImageUri, img } = useAppContext();

  // enable & disable switch
  const toggleButton = () => {
    setIsEnabled(prevState => !prevState)
  }

  // getting camera prmission from user
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        setPermissionGranted(true);
      } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
        console.log('Camera permission denied');
      } else {
        console.log("Ask Later");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // handling uploaing profile pic
  const uploadPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      showToastWithGravityAndOffset()
    }
  }

  // profile pic set toast message
  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Profile Picture is set, You Looks Awesome!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.headerCont}>
        <View style={styles.prfHeadCont}>
          <TouchableOpacity onPress={permissionGranted ? uploadPhoto : requestCameraPermission}>
            <Avatar
              rounded
              size={'medium'}
              source={{ uri: imageUri ? imageUri : img }}
            />
          </TouchableOpacity>
          <Octicons
            name="dot-fill"
            size={24}
            color="yellow"
            style={styles.active}
          />
          <View>
            <Text style={[styles.prfHeadTxt, { fontSize: fontPixel(20) }]}>Gowri Shankar</Text>
            <Text style={[styles.prfHeadTxt, { fontSize: fontPixel(13) }]}>View my profile</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Entypo
              name="chevron-right"
              size={24}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.modeCont}>
        <View style={styles.mode}>
          <Text style={{ paddingLeft: pixelSizeHorizontal(10), fontFamily: 'Montserrat-SemiBold', }}>
            Seller mode
          </Text>
          <TouchableOpacity onPress={toggleButton} style={styles.enableBtn}>
            <Fontisto
              style={styles.switch}
              name={isEnabled ? 'toggle-on' : 'toggle-off'}
              size={50}
              color={isEnabled ? Colors.green : Colors.red}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.compCont}>
        {ProfileDataCont1.map(item => <ProfileList key={item.id} items={item} />)}
      </View>
      <View style={[styles.compCont, { marginTop: pixelSizeVertical(15) }]}>
        {ProfileDataCont2.map(item => <ProfileList key={item.id} items={item} />)}
      </View>
      <View style={[styles.compCont, { marginTop: pixelSizeVertical(15) }]}>
        {ProfileDataCont3.map(item => <ProfileList key={item.id} items={item} />)}
      </View>
    </View>
  )
}

export default ProfileScreen