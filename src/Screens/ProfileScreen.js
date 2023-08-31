import { View, Text, Image, TouchableOpacity, FlatList, PermissionsAndroid, ToastAndroid, Alert, } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { styles } from '../styles/Profile'
import { AntDesign, MaterialIcons, Octicons, Entypo, Fontisto } from '@expo/vector-icons';
import { Colors, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../Constants/Theme';
import { ProfileDataCont1, ProfileDataCont2, ProfileDataCont3 } from '../Data/ProfileData';
import ProfileList from '../Components/ProfileList';
import { useAppContext } from '../Context/ContextProvider';
import * as ImagePicker from 'expo-image-picker';
import { Camera, getCameraPermissionsAsync } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Avatar from '../Components/Avatar';


const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);

  // image upload context
  const { permissionGranted, setPermissionGranted, imageUri, setImageUri, img } = useAppContext();

  useEffect(() => {
    // check whether the camera permission is granted
    const checkPermission = async () => {
      const { status } = await getCameraPermissionsAsync();
      setPermissionGranted(status === 'granted');
    }

    checkPermission();
  }, []);

  useEffect(() => {
    // fetching the profile pic from async storage
    (async () => {
      const storedImageUri = await AsyncStorage.getItem('profileImage');
      if (storedImageUri) {
        setImageUri(storedImageUri);
      }
    })();
  }, [imageUri])


  // camera reference
  const cameraRef = useRef();

  // handling camera & gallery permissions
  const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermissionGranted(status === 'granted');

    if (status !== 'granted') {
      Alert.alert("Permission Denied");
    }
  };

  // user permission invoke to access camera & gallery
  const userPermission = () => {
    Alert.alert(
      'Permission',
      'Allow Thryft to take picture & access',
      [
        { text: 'Allow', onPress: requestPermission },
        { text: 'Deny', onPress: setPermissionGranted(false) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  // handling opening the camera
  const openCamera = useCallback(() => {
    setIsCameraReady(true);
  }, [isCameraReady]);

  // handling front & back camera swtich
  const switchCamera = useCallback(() => {
    if (isPreview) {
      return;
    }
    setCameraType(prevCameraType =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }, [cameraType]);

  // Taking Photo using camera handled
  const onSnap = useCallback(async () => {
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
  }, [previewImg, isPreview]);

  // canceling the pic snaped
  const cancelPreview = useCallback(async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setPreviewImg('');
  }, [previewImg, isPreview]);

  // selecting the pic snaped to set as DP
  const okPreview = useCallback(async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    storeImageUri(previewImg);
    setIsCameraReady(false);
  }, []);

  // handling opening the gallery to accesss the photos
  const openGallery = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      storeImageUri(result.assets[0].uri);
    }
  }, []);

  // Storing image URI in AsyncStorage
  const storeImageUri = useCallback(async (uri) => {
    try {
      await AsyncStorage.setItem('profileImage', uri);
      setImageUri(uri);
      showToastWithGravityAndOffset();
    } catch (error) {
      Alert.alert('Error saving image',
        [{ text: 'Ok', style: 'cancel' },],
        { cancelable: true }
      )
    }
  }, [imageUri]);


  // alert to choose the image source
  const chooseImageSource = useCallback(() => {
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
  }, []);

  // enable & disable switch
  const toggleButton = useCallback(() => {
    setIsEnabled(prevState => !prevState)
  }, [isEnabled]);

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
                  <Avatar />
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