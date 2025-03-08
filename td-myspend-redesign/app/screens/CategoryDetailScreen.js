import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/Card';
import SpendingChart from '../components/SpendingChart';
import Theme from '../constants/Theme';

const CategoryDetailScreen = ({ route, navigation }) => {
  const { category } = route.params;

  // Mock data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [
          Math.random() * 500 + 100,
          Math.random() * 500 + 100,
          Math.random() * 500 + 100,
          Math.random() * 500 + 100,
          Math.random() * 500 + 100,
          category.amount,
        ],
        color: (opacity = 1) => `rgba(0, 138, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  // Mock transactions
  const transactions = [
    {
      id: '1',
      merchant: 'Walmart',
      date: 'Jun 15, 2023',
      amount: 85.42,
    },
    {
      id: '2',
      merchant: 'Kroger',
      date: 'Jun 12, 2023',
      amount: 65.30,
    },
    {
      id: '3',
      merchant: 'Whole Foods',
      date: 'Jun 10, 2023',
      amount: 120.75,
    },
    {
      id: '4',
      merchant: 'Trader Joe\'s',
      date: 'Jun 5, 2023',
      amount: 95.20,
    },
    {
      id: '5',
      merchant: 'Aldi',
      date: 'Jun 2, 2023',
      amount: 84.08,
    },
  ];

  const renderTransactionItem = ({ item }) => (
    <Card style={styles.transactionCard}>
      <View style={styles.transactionHeader}>
        <Text style={styles.merchantName}>{item.merchant}</Text>
        <Text style={styles.transactionAmount}>-${item.amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Header 
        title={category.title} 
        showBackButton 
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.summaryContainer}>
          <View style={[styles.iconContainer, { backgroundColor: `${category.iconColor}20` }]}>
            <Ionicons name={category.icon} size={32} color={category.iconColor} />
          </View>
          <Text style={styles.amountLabel}>Total Spent</Text>
          <Text style={styles.amount}>${category.amount.toFixed(2)}</Text>
          
          <View style={styles.changeContainer}>
            {category.previousAmount && (
              <>
                <Text style={styles.changeLabel}>vs. Last Month:</Text>
                <View style={styles.percentChangeContainer}>
                  {category.amount > category.previousAmount ? (
                    <Ionicons name="arrow-up" size={16} color={Theme.colors.error} />
                  ) : (
                    <Ionicons name="arrow-down" size={16} color={Theme.colors.success} />
                  )}
                  <Text 
                    style={[
                      styles.percentChange,
                      category.amount > category.previousAmount ? styles.increase : styles.decrease,
                    ]}
                  >
                    {Math.abs(Math.round(((category.amount - category.previousAmount) / category.previousAmount) * 100))}%
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>

        <SpendingChart 
          title={`${category.title} Spending`} 
          data={chartData} 
          period="Last 6 Months"
        />

        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsTitle}>Recent Transactions</Text>
        </View>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderTransactionItem}
          scrollEnabled={false}
        />
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
  summaryContainer: {
    alignItems: 'center',
    marginVertical: Theme.spacing.lg,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: Theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing.md,
  },
  amountLabel: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textLight,
    marginBottom: Theme.spacing.xs,
  },
  amount: {
    fontSize: Theme.typography.fontSize.xxxl,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.sm,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeLabel: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
    marginRight: Theme.spacing.xs,
  },
  percentChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentChange: {
    fontSize: Theme.typography.fontSize.sm,
    fontWeight: 'bold',
    marginLeft: Theme.spacing.xs,
  },
  increase: {
    color: Theme.colors.error,
  },
  decrease: {
    color: Theme.colors.success,
  },
  transactionsHeader: {
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.md,
  },
  transactionsTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  transactionCard: {
    marginBottom: Theme.spacing.sm,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.xs,
  },
  merchantName: {
    fontSize: Theme.typography.fontSize.md,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  transactionAmount: {
    fontSize: Theme.typography.fontSize.md,
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  transactionDate: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
  },
});

export default CategoryDetailScreen; 