import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/Home'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, pixelSizeVertical, widthPixel } from '../Constants/Theme';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCont}>
        <View style={styles.headerRgtCont}>
          <Text style={styles.headerTxt}>Gowri Shankar</Text>
          <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={styles.imgCont}
          />
          <Octicons
            name="dot-fill"
            size={24}
            color="yellow"
            style={styles.active}
          />
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
      </View>
      <View style={styles.earningsCont}>
        <View style={styles.ernHeadCont}>
          <Text>Earnings</Text>
          <TouchableOpacity style={styles.dtlBtn}>
            <Text style={{ color: Colors.primary, fontWeight: 'bold' }}>Detail</Text>
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
    </ScrollView>
  )
}

export default HomeScreen