import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Picker from '@gregfrench/react-native-wheel-picker'

const WheelPicker = (props) => {
  const PickerItem = Picker.Item;
  const [itemList] = useState(['0','1','2','3','4','5','6','7','8','9','10']);
  
  return (
    <View>
      <Text>

        <Picker style={{width: 100, height: 180}}
          lineColor="#000000"
          lineGradientColorFrom="#008000"
          lineGradientColorTo="#FF5733"
          selectedValue={props.minutes}
          itemStyle={{color:"black", fontSize:18}}
          onValueChange={(index) => props.setMinutes(index) }>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i}/>
          ))}
        </Picker>

        <Picker style={{width: 100, height: 180}}
          lineColor="#000000"
          lineGradientColorFrom="#008000"
          lineGradientColorTo="#FF5733"
          selectedValue={props.seconds}
          itemStyle={{color:"black", fontSize:18}}
          onValueChange={(index) => props.setSeconds(index) }>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i}/>
          ))}
        </Picker>

      </Text>
    </View>
  );
};

export default WheelPicker;
