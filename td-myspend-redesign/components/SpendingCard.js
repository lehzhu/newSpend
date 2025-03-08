import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
import Theme from '../constants/Theme';

const SpendingCard = ({ 
  title, 
  amount, 
  previousAmount, 
  icon, 
  iconColor = Theme.colors.primary,
  onPress,
}) => {
  const percentChange = previousAmount 
    ? Math.round(((amount - previousAmount) / previousAmount) * 100) 
    : 0;
  
  const isIncrease = percentChange > 0;
  const isDecrease = percentChange < 0;
  
  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.iconContainer}>
        <View style={[styles.iconBackground, { backgroundColor: `${iconColor}20` }]}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        {previousAmount && (
          <View style={styles.changeContainer}>
            <Ionicons 
              name={isIncrease ? 'arrow-up' : isDecrease ? 'arrow-down' : 'remove'} 
              size={16} 
              color={isIncrease ? Theme.colors.error : isDecrease ? Theme.colors.success : Theme.colors.textLight} 
            />
            <Text 
              style={[
                styles.changeText, 
                isIncrease && styles.increaseText,
                isDecrease && styles.decreaseText,
              ]}
            >
              {Math.abs(percentChange)}% from last month
            </Text>
          </View>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  iconContainer: {
    marginRight: Theme.spacing.md,
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textLight,
    marginBottom: Theme.spacing.xs,
  },
  amount: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.xs,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
    marginLeft: Theme.spacing.xs,
  },
  increaseText: {
    color: Theme.colors.error,
  },
  decreaseText: {
    color: Theme.colors.success,
  },
});

export default SpendingCard; 