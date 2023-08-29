import { View, Text, Image, TouchableOpacity, FlatList, PermissionsAndroid, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles/Profile'
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../Constants/Theme';
import { ProfileDataCont1, ProfileDataCont2, ProfileDataCont3 } from '../Data/ProfileData';
import ProfileList from '../Components/ProfileList';
import { Avatar } from 'react-native-elements';
import { useAppContext } from '../Context/ContextProvider';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';


const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [camera, setCamera] = useState(null);
  // image upload context
  const { permissionGranted, setPermissionGranted, imageUri, setImageUri, img } = useAppContext();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissionGranted(status === 'granted');
    })();
  }, [])

  const takePicture = async () => {
    setCamera(true); 
    console.log("clicked");
    if(permissionGranted) {
      const photo = await Camera.takePictureAsync();
      setImageUri(photo.uri);
    }  
  }; 

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  const chooseImageSource = () => {
    Alert.alert(
      'Choose Image Source',
      'Select an option to set your profile picture',
      [
        { text: 'Camera', onPress: takePicture },
        { text: 'Gallery', onPress: openGallery },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };



  // enable & disable switch
  const toggleButton = () => {
    setIsEnabled(prevState => !prevState)
  }

  return (
    <View style={styles.container}>
      {camera ?
        (<Camera style={{ height: '50%', marginTop: 30 }} type={Camera.Constants.Type.back} ref={ref => setCamera(ref)} />)
        :
        (
          <>
            <View style={styles.headerCont}>
              <View style={styles.prfHeadCont}>
                <TouchableOpacity onPress={chooseImageSource}>
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
          </>
        )
      }
    </View>
  )
}

export default ProfileScreen