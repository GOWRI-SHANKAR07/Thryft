import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/Home'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, pixelSizeVertical, widthPixel } from '../Constants/Theme';
import { Avatar } from 'react-native-elements'
import { useAppContext } from '../Context/ContextProvider';

const HomeScreen = () => {

   // image upload context
   const { img, imageUri } = useAppContext();

  return (
    <View style={styles.headerCont}>
      <View style={styles.headerRgtCont}>
        <Text style={styles.headerTxt}>Hello</Text>
        <View style={styles.imgCont}>
          <Avatar
            rounded
            size={'medium'}
            source={{
              uri: imageUri ? imageUri : img
            }}
          />
          <Octicons
            name="dot-fill"
            size={24}
            color="yellow"
            style={styles.active}
          />
        </View>
      </View>
      <View style={styles.sellerCont}>
        <Text style={styles.sellerTxt}>Seller Statistic</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="info-outline"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.innerCont}>
        <View style={styles.statCont}>
          <Text style={styles.statTxt}>Seller Statistic</Text>
          <Text style={styles.statTxt}>Level One</Text>
        </View>
        <View style={styles.statCont}>
          <Text style={styles.statTxt}>Next Evaluation</Text>
          <Text style={styles.statTxt}>Sep 01,2023</Text>
        </View>
      </View>
      <View style={[styles.innerCont, { marginTop: pixelSizeVertical(10) }]}>
        <View style={styles.statCont}>
          <Text style={styles.statTxt}>Response Rate</Text>
          <View style={styles.bar}></View>
          <Text style={styles.statTxt}>100%</Text>
        </View>
        <View style={styles.statCont}>
          <Text style={styles.statTxt}>Order Completion</Text>
          <View style={styles.bar}></View>
          <Text style={styles.statTxt}>100%</Text>
        </View>
      </View>
      <View style={styles.divLine}></View>
      <View style={styles.inner2Cont}>
        <View style={styles.nxtLvlCont}>
          <Text style={styles.nxtLvlTxt}>Reach your next level</Text>
          <TouchableOpacity>
            <AntDesign
              name="up"
              size={20}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.statusCont}>
          <View style={styles.statusTxtCont}>
            <Text style={styles.statusTxt}>Response Rate</Text>
            <Text style={[styles.statusTxt, { color: Colors.greyDark, paddingTop: pixelSizeVertical(10) }]}>Complete at least 60 day as a Level 1 Seller (all time)</Text>
          </View>
          <View style={styles.completionRate}>
            <Text style={styles.rateTxt}>60/60</Text>
            <View style={styles.rateBar}></View>
          </View>
        </View>
        <View style={styles.statusCont}>
          <View style={styles.statusTxtCont}>
            <Text style={styles.statusTxt}>Order</Text>
            <Text style={[styles.statusTxt, { color: Colors.greyDark, paddingTop: pixelSizeVertical(10) }]}>Receive and Complete at least 50 Order (all time)</Text>
          </View>
          <View style={[styles.completionRate, { width: widthPixel(80) }]}>
            <Text style={[styles.rateTxt, { color: Colors.red }]}>25/50</Text>
            <View style={styles.rateCont}>
              <View style={[styles.orderBar, { borderColor: Colors.red, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }]}></View>
              <View style={[styles.orderBar, { borderTopRightRadius: 5, borderBottomRightRadius: 5 }]}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.earningsCont}>
        <View style={styles.ernHeadCont}>
          <Text style={styles.ernTxt}>Earnings</Text>
          <TouchableOpacity style={styles.dtlBtn}>
            <Text style={{ color: Colors.primary, fontWeight: 'bold', fontFamily: 'Montserrat-SemiBold' }}>Detail</Text>
            <AntDesign
              name="right"
              size={18}
              color={Colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.amountCont}>
          <View style={styles.amtTxtCont}>
            <Text style={styles.amtDescTxt}>Available to withdrawal</Text>
            <Text style={styles.amtTxt}>IDR 300.000</Text>
          </View>
          <View style={styles.amtTxtCont}>
            <Text style={styles.amtDescTxt}>Earnings in August</Text>
            <Text style={styles.amtTxt}>IDR 1.000.000</Text>
          </View>
          <View style={styles.amtTxtCont}>
            <Text style={styles.amtDescTxt}>Avg Selling</Text>
            <Text style={styles.amtTxt}>IDR 500.000</Text>
          </View>
          <View style={styles.amtTxtCont}>
            <Text style={styles.amtDescTxt}>Payment being cleared</Text>
            <Text style={styles.amtTxt}>IDR 700.000</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;