import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import globalStyles from '../styles/globalStyles';

const IconContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <View style={globalStyles.iconContainer}>{children}</View>;
  };

export default IconContainer;