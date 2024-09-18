import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyle, textStyle, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        containerStyle,
        { opacity: isLoading ? 0.5 : 1 }, // Ajuste de opacidad
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6347', // Cambia esto al color secundario que desees
    borderRadius: 30, // Cambia esto según sea necesario
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    color: '#FFFFFF', // Cambia esto al color primario que desees
    fontSize: 18,
    fontWeight: '600', // font-psemibold en tus estilos
  },
});

export default CustomButton;
