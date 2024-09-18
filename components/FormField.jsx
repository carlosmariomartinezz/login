import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyle, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[styles.container, otherStyle]}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    {...props}
                />
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Text style={styles.toggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    title: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
        marginBottom: 4,
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: '#cccccc',
        backgroundColor: '#000000',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        height: 50,
    },
    input: {
        flex: 1,
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    toggleText: {
        color: '#7b7b8b',
        marginLeft: 8,
    },
});

export default FormField;
