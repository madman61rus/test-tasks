//@flow
/* global require */
import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {styles} from './styles';
import Navbar from '../../components/navbar/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

const Props = {};
const State = {};

class DashboardScreen extends Component<Props, State> {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Navbar
          title={'Dashboard'}
          leftComponent={<Icon name={'bars'} size={20} color={'#4e6077'} />}
          leftComponentAction={() => {}}
          rightComponent={
            <Image
              source={require('../../../assets/images/icons/load.png')}
              style={{width: 20, height: 20}}
            />
          }
          rightComponentAction={() => {}}
        />
        <View style={styles.topPanel}>
          <View>
            <Text style={{fontWeight: '700', fontSize: 15, color: '#4e6077'}}>TRADING CAPITAL</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <Text style={{fontWeight: '600', fontSize: 35, color: 'white'}}>1.00865 BTC</Text>
            </View>
            <View styles={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: '700', fontSize: 15, color: '#4e6077'}}>BALANCE:</Text>
                <Text style={{fontWeight: '700', fontSize: 15, color: 'white'}}> 10850</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: '700', fontSize: 15, color: '#4e6077'}}>ON HOLD:</Text>
                <Text style={{fontWeight: '700', fontSize: 15, color: 'white'}}> 24000</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 2}}>
          <Image
            source={require('../../../assets/images/chart.png')}
            style={{flex: 1, width: '100%', height: undefined}}
            resizeMode={'contain'}
          />
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}
          >
            <Text>22.04</Text>
            <Text>23.04</Text>
            <Text>24.04</Text>
            <Text>25.04</Text>
            <Text>26.04</Text>
          </View>
        </View>
        <View style={{flex: 3, flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
          <View style={{marginTop: 5}}>
            <View style={styles.button} />
            <View style={styles.button} />
          </View>
          <View style={{marginTop: 5}}>
            <View style={styles.button} />
            <View style={styles.button} />
          </View>
          <View style={{marginTop: 5}}>
            <View style={styles.button} />
            <View style={styles.button} />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Time Range</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#19283c'}}>
          <Text>Panel</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default DashboardScreen;
