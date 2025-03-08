import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Card from './Card';
import Theme from '../constants/Theme';

const { width } = Dimensions.get('window');

const SpendingChart = ({ 
  title, 
  data, 
  period = 'Monthly',
  style,
}) => {
  const chartConfig = {
    backgroundGradientFrom: Theme.colors.card,
    backgroundGradientTo: Theme.colors.card,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 138, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '5',
      strokeWidth: '2',
      stroke: Theme.colors.primary,
    },
  };

  return (
    <Card style={[styles.container, style]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.period}>{period}</Text>
      </View>
      <LineChart
        data={data}
        width={width - (Theme.spacing.md * 4)}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Theme.spacing.lg,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  title: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  period: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
  },
  chart: {
    marginVertical: Theme.spacing.sm,
    borderRadius: Theme.borderRadius.md,
  },
});

export default SpendingChart; 