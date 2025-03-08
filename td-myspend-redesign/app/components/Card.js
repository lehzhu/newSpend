import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Theme from '../constants/Theme';

const Card = ({ 
  children, 
  style, 
  onPress, 
  elevation = 'md',
  padding = 'md',
}) => {
  const cardStyles = [
    styles.card,
    styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
    Theme.shadows[elevation],
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity 
        style={cardStyles} 
        onPress={onPress}
        activeOpacity={0.9}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.card,
    borderRadius: Theme.borderRadius.md,
    overflow: 'hidden',
  },
  paddingNone: {
    padding: 0,
  },
  paddingSm: {
    padding: Theme.spacing.sm,
  },
  paddingMd: {
    padding: Theme.spacing.md,
  },
  paddingLg: {
    padding: Theme.spacing.lg,
  },
});

export default Card; 