import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from '../styles';
import { RenderSvgIcon } from 'components/atoms/svg';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { durations } from 'src/Dummy';
import { appColors } from 'theme';
import { Dropdown } from 'react-native-element-dropdown';
const data = [
    {label: '1 day', id: 1},
    {label: '3 days', id: 2},
    {label: '7 day', id: 3},
    {label: '2 week', id: 4},
  ];
const DropDown = (props:any) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <Dropdown
        style={styles.uploadContainer}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        // maxHeight={300}
        labelField="label"
        valueField="id"
        placeholder="Duration"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: any) => {
          props?.setFieldValue(`duration`, item?.id);
        }}
        renderRightIcon={() => (
          <RenderSvgIcon
            icon={dropdownOpen ? 'ArrowUp' : 'ArrowDown'} // Choose the icon based on the dropdown state
            width={16}
            height={16}
          />
        )}
        onFocus={() => setDropdownOpen(true)} // Set the state to open when the dropdown is focused
        onBlur={() => setDropdownOpen(false)}
      />
    )

}

export default DropDown