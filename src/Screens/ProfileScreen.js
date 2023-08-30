import { View, Text, Image, TouchableOpacity, FlatList, PermissionsAndroid, ToastAndroid, Alert, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from '../styles/Profile'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../Constants/Theme';
import { ProfileDataCont1, ProfileDataCont2, ProfileDataCont3 } from '../Data/ProfileData';
import ProfileList from '../Components/ProfileList';
import { Avatar } from 'react-native-elements';
import { useAppContext } from '../Context/ContextProvider';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);

  // image upload context
  const { permissionGranted, setPermissionGranted, imageUri, setImageUri, img } = useAppContext();

  useEffect(() => {
      const grantedPermission = AsyncStorage.getItem('permission');
      console.log(grantedPermission, "Granted permission");
      if (grantedPermission) {
        setPermissionGranted(true);
        console.log(permissionGranted, "Premission Granted");
      }
  
  }, [permissionGranted]);

  // camera reference
  const cameraRef = useRef();

  // handling camera & gallery permissions
  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermissionGranted(status === 'granted');
    const permission = JSON.stringify(permissionGranted)
    await AsyncStorage.setItem('premission', permission);
  };

  // user permission invoke to access camera & gallery
  const userPermission = () => {
    Alert.alert(
      'Permission',
      'Allow Thryft to take picture & access',
      [
        { text: 'Allow', onPress: onHandlePermission },
        { text: 'Deny', onPress: setPermissionGranted(false) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  // handling opening the camera
  const openCamera = () => {
    setIsCameraReady(true);
  };

  // handling front & back camera swtich
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType(prevCameraType =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  // Taking Photo using camera handled
  const onSnap = async () => {
    console.log(cameraRef.current);
    if (cameraRef.current) {
      const options = { quality: 0.7, };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      setPreviewImg(source);

      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
      }
    }
  };

  // canceling the pic snaped
  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setPreviewImg('');
  };

  // selecting the pic snaped to set as DP
  const okPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    storeImageUri(previewImg);
    setIsCameraReady(false);
    console.log(isCameraReady);
  }

  // handling opening the gallery to accesss the photos
  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      storeImageUri(result.assets[0].uri);
    }
  };

  // Storing image URI in AsyncStorage
  const storeImageUri = async (uri) => {
    try {
      await AsyncStorage.setItem('profileImage', uri);
      console.log();
    } catch (error) {
      console.error('Error storing image URI:', error);
    }
  };


  // alert to choose the image source
  const chooseImageSource = () => {
    Alert.alert(
      'Choose Image Source',
      'Select an option to set your profile picture',
      [
        { text: 'Camera', onPress: openCamera },
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
      {isCameraReady ?
        (
          <Camera
            ref={cameraRef}
            style={styles.container}
            type={cameraType}
            useCamera2Api={true}
          />
        )
        :
        (
          <>
            <View style={styles.headerCont}>
              <View style={styles.prfHeadCont}>
                <TouchableOpacity onPress={permissionGranted ? chooseImageSource : userPermission}>
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
      {isPreview && (
        <>
          <TouchableOpacity
            onPress={cancelPreview}
            style={styles.closeButton}
            activeOpacity={0.7}
          >
            <AntDesign name='close' size={32} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={okPreview}
            style={styles.openButton}
            activeOpacity={0.7}
          >
            <AntDesign name='check' size={32} color='#fff' />
          </TouchableOpacity>
        </>
      )}
      {!isPreview && isCameraReady && (
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
            <MaterialIcons name='flip-camera-ios' size={28} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={!isCameraReady}
            onPress={onSnap}
            style={styles.capture}
          />
        </View>
      )}
    </View>
  )
}

export default ProfileScreen