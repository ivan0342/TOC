import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import globalStyles from '../styles/globalStyles';
import React from 'react';

const IconTopContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <View style={globalStyles.iconTopContainer}>{children}</View>;
};

export default IconTopContainer;