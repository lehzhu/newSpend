import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import SpendingCard from '../components/SpendingCard';
import Card from '../components/Card';
import Theme from '../constants/Theme';

const CategoriesScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Mock spending categories
  const spendingCategories = [
    {
      id: '1',
      title: 'Groceries',
      amount: 450.75,
      previousAmount: 420.50,
      icon: 'cart',
      iconColor: Theme.colors.primary,
    },
    {
      id: '2',
      title: 'Dining Out',
      amount: 320.25,
      previousAmount: 380.80,
      icon: 'restaurant',
      iconColor: '#FF6B6B',
    },
    {
      id: '3',
      title: 'Transportation',
      amount: 150.00,
      previousAmount: 165.25,
      icon: 'car',
      iconColor: '#4ECDC4',
    },
    {
      id: '4',
      title: 'Entertainment',
      amount: 200.50,
      previousAmount: 180.75,
      icon: 'film',
      iconColor: '#FFE66D',
    },
    {
      id: '5',
      title: 'Shopping',
      amount: 520.30,
      previousAmount: 480.60,
      icon: 'bag',
      iconColor: '#845EC2',
    },
    {
      id: '6',
      title: 'Utilities',
      amount: 280.45,
      previousAmount: 275.20,
      icon: 'flash',
      iconColor: '#00C9A7',
    },
    {
      id: '7',
      title: 'Health',
      amount: 120.75,
      previousAmount: 95.30,
      icon: 'medical',
      iconColor: '#C34A36',
    },
  ];

  const renderPeriodSelector = () => (
    <Card style={styles.periodSelectorCard}>
      <TouchableOpacity
        style={[
          styles.periodButton,
          selectedPeriod === 'week' && styles.selectedPeriodButton,
        ]}
        onPress={() => setSelectedPeriod('week')}
      >
        <Text
          style={[
            styles.periodButtonText,
            selectedPeriod === 'week' && styles.selectedPeriodButtonText,
          ]}
        >
          Week
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.periodButton,
          selectedPeriod === 'month' && styles.selectedPeriodButton,
        ]}
        onPress={() => setSelectedPeriod('month')}
      >
        <Text
          style={[
            styles.periodButtonText,
            selectedPeriod === 'month' && styles.selectedPeriodButtonText,
          ]}
        >
          Month
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.periodButton,
          selectedPeriod === 'year' && styles.selectedPeriodButton,
        ]}
        onPress={() => setSelectedPeriod('year')}
      >
        <Text
          style={[
            styles.periodButtonText,
            selectedPeriod === 'year' && styles.selectedPeriodButtonText,
          ]}
        >
          Year
        </Text>
      </TouchableOpacity>
    </Card>
  );

  const renderHeader = () => (
    <View>
      {renderPeriodSelector()}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Spending</Text>
        <Text style={styles.totalAmount}>$2,042.75</Text>
        <View style={styles.periodContainer}>
          <Ionicons name="calendar-outline" size={16} color={Theme.colors.textLight} />
          <Text style={styles.periodText}>
            {selectedPeriod === 'week' ? 'This Week' : selectedPeriod === 'month' ? 'This Month' : 'This Year'}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header 
        title="Spending Categories" 
        showBackButton 
      />
      <FlatList
        data={spendingCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SpendingCard
            title={item.title}
            amount={item.amount}
            previousAmount={item.previousAmount}
            icon={item.icon}
            iconColor={item.iconColor}
            onPress={() => navigation.navigate('CategoryDetail', { category: item })}
          />
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  listContent: {
    padding: Theme.spacing.md,
  },
  periodSelectorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Theme.spacing.md,
    padding: Theme.spacing.xs,
  },
  periodButton: {
    flex: 1,
    paddingVertical: Theme.spacing.sm,
    alignItems: 'center',
    borderRadius: Theme.borderRadius.sm,
  },
  selectedPeriodButton: {
    backgroundColor: Theme.colors.primary,
  },
  periodButtonText: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text,
  },
  selectedPeriodButtonText: {
    color: Theme.colors.secondary,
    fontWeight: 'bold',
  },
  totalContainer: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  totalLabel: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textLight,
    marginBottom: Theme.spacing.xs,
  },
  totalAmount: {
    fontSize: Theme.typography.fontSize.xxxl,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.xs,
  },
  periodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  periodText: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
    marginLeft: Theme.spacing.xs,
  },
});

export default CategoriesScreen; 