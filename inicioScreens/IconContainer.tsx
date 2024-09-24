import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import globalStyles from '../styles/globalStyles';
import React from 'react';

const IconContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <View style={globalStyles.iconContainer}>{children}</View>;
  };

export default IconContainer;