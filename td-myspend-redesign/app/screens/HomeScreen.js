import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/Card';
import SpendingCard from '../components/SpendingCard';
import SpendingChart from '../components/SpendingChart';
import Button from '../components/Button';
import Theme from '../constants/Theme';

const HomeScreen = ({ navigation }) => {
  // Mock data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [2500, 3200, 2800, 3100, 2900, 3500],
        color: (opacity = 1) => `rgba(0, 138, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

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
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="TD MySpend" 
        rightComponent={
          <Ionicons name="notifications-outline" size={24} color={Theme.colors.secondary} />
        }
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Total Spending This Month</Text>
          <Text style={styles.balanceAmount}>$3,521.50</Text>
          <Text style={styles.balanceDate}>As of June 15, 2023</Text>
        </View>

        <SpendingChart 
          title="Monthly Spending" 
          data={chartData} 
          period="Last 6 Months"
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Spending Categories</Text>
          <Button 
            title="See All" 
            type="text" 
            size="small" 
            onPress={() => navigation.navigate('Categories')}
          />
        </View>

        {spendingCategories.map((category) => (
          <SpendingCard
            key={category.id}
            title={category.title}
            amount={category.amount}
            previousAmount={category.previousAmount}
            icon={category.icon}
            iconColor={category.iconColor}
            onPress={() => navigation.navigate('CategoryDetail', { category })}
          />
        ))}

        <Card style={styles.insightsCard}>
          <View style={styles.insightsHeader}>
            <Ionicons name="bulb" size={24} color={Theme.colors.warning} />
            <Text style={styles.insightsTitle}>Spending Insights</Text>
          </View>
          <Text style={styles.insightsText}>
            Your dining out expenses have decreased by 15.9% compared to last month. Great job on saving!
          </Text>
          <Button 
            title="View All Insights" 
            type="outline" 
            size="small" 
            style={styles.insightsButton}
            onPress={() => navigation.navigate('Insights')}
          />
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollView: {
    flex: 1,
    padding: Theme.spacing.md,
  },
  balanceContainer: {
    alignItems: 'center',
    marginVertical: Theme.spacing.lg,
  },
  balanceLabel: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textLight,
    marginBottom: Theme.spacing.xs,
  },
  balanceAmount: {
    fontSize: Theme.typography.fontSize.xxxl,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.xs,
  },
  balanceDate: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  sectionTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  insightsCard: {
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.xl,
  },
  insightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  insightsTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginLeft: Theme.spacing.sm,
  },
  insightsText: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text,
    marginBottom: Theme.spacing.md,
  },
  insightsButton: {
    alignSelf: 'flex-start',
  },
});

export default HomeScreen; 