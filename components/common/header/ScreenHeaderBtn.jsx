import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, Image } from 'react-native';

import styles from './screenheader.style'
 
const ScreenHeaderBtn = () => {
  return (
    <TouchableOpacity>
      <Image 
        source={iconUrl}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn