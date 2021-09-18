import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Testing = ({ result }) => {
    return (
        <View style={{ marginBottom: 15 }}>
            <Image style={styles.image} source= {{ uri: result }} />
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300,
    }
});

export default Testing;