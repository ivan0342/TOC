import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import globalStyles from '../styles/globalStyles';

const IconTopContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <View style={globalStyles.iconTopContainer}>{children}</View>;
};

export default IconTopContainer;