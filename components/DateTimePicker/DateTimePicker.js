import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Picker from '@gregfrench/react-native-wheel-picker'

const WheelPicker = (props) => {
  const PickerItem = Picker.Item;
  const [itemList] = useState(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60']);

  return (
    <View>
      <Text>

        <Picker color="white" style={{width: 100, height: 180}}
          selectedValue={props.minutes}
          itemStyle={{color:"white", fontSize:18}}
          onValueChange={(index) => (props.setMinutes(index), props.setInitialWorkMinutes(index) )}>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i}/>
          ))}
        </Picker>

        <Picker style={{width: 100, height: 180}}
          selectedValue={props.seconds}
          itemStyle={{color:"white", fontSize:18}}
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
