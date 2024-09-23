import React, { useState } from 'react';
import { StyleSheet, View, Pressable, LayoutAnimation, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface ExpandedLayoutProps {
    icon:any
    mensaje: string;
}

export default function ExpandedLayout({ icon, mensaje }: ExpandedLayoutProps) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                    setExpanded(!expanded);
                }}
            >
                {icon}
            </Pressable>
            {expanded && (
                <Text style={styles.expandedText}>
                    {mensaje}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    expandedText: {
        marginTop: 5,
        color: 'gray',
        fontSize: 14,
    }
});
