import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/Card';
import Theme from '../constants/Theme';

const InsightsScreen = () => {
  // Mock insights data
  const insights = [
    {
      id: '1',
      title: 'Dining Out Expenses Decreased',
      description: 'Your dining out expenses have decreased by 15.9% compared to last month. Great job on saving!',
      icon: 'restaurant',
      iconColor: '#FF6B6B',
      type: 'positive',
    },
    {
      id: '2',
      title: 'Grocery Spending Increased',
      description: 'Your grocery spending has increased by 7.2% compared to last month. This might be due to rising food prices.',
      icon: 'cart',
      iconColor: Theme.colors.primary,
      type: 'neutral',
    },
    {
      id: '3',
      title: 'Entertainment Budget Exceeded',
      description: 'You\'ve spent $20.50 more on entertainment than your monthly budget. Consider adjusting your budget or reducing expenses in this category.',
      icon: 'film',
      iconColor: '#FFE66D',
      type: 'negative',
    },
    {
      id: '4',
      title: 'Transportation Costs Reduced',
      description: 'Your transportation costs have decreased by 9.2% compared to last month. Keep up the good work!',
      icon: 'car',
      iconColor: '#4ECDC4',
      type: 'positive',
    },
    {
      id: '5',
      title: 'Shopping Expenses Increased',
      description: 'Your shopping expenses have increased by 8.3% compared to last month. You might want to review your purchases in this category.',
      icon: 'bag',
      iconColor: '#845EC2',
      type: 'negative',
    },
  ];

  const getIconBackgroundColor = (type) => {
    switch (type) {
      case 'positive':
        return `${Theme.colors.success}20`;
      case 'negative':
        return `${Theme.colors.error}20`;
      default:
        return `${Theme.colors.info}20`;
    }
  };

  const getIconName = (type, defaultIcon) => {
    switch (type) {
      case 'positive':
        return 'trending-down';
      case 'negative':
        return 'trending-up';
      default:
        return defaultIcon;
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Spending Insights" 
        showBackButton 
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle}>
          Here are some insights based on your spending patterns:
        </Text>

        {insights.map((insight) => (
          <Card key={insight.id} style={styles.insightCard}>
            <View style={styles.insightHeader}>
              <View 
                style={[
                  styles.iconContainer, 
                  { backgroundColor: getIconBackgroundColor(insight.type) }
                ]}
              >
                <Ionicons 
                  name={getIconName(insight.type, insight.icon)} 
                  size={24} 
                  color={insight.iconColor} 
                />
              </View>
              <Text style={styles.insightTitle}>{insight.title}</Text>
            </View>
            <Text style={styles.insightDescription}>{insight.description}</Text>
          </Card>
        ))}

        <Card style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Ionicons name="bulb" size={24} color={Theme.colors.warning} />
            <Text style={styles.tipsTitle}>Saving Tips</Text>
          </View>
          <View style={styles.tipItem}>
            <Ionicons name="checkmark-circle" size={20} color={Theme.colors.success} style={styles.tipIcon} />
            <Text style={styles.tipText}>Set a budget for each spending category</Text>
          </View>
          <View style={styles.tipItem}>
            <Ionicons name="checkmark-circle" size={20} color={Theme.colors.success} style={styles.tipIcon} />
            <Text style={styles.tipText}>Cook at home more often to reduce dining out expenses</Text>
          </View>
          <View style={styles.tipItem}>
            <Ionicons name="checkmark-circle" size={20} color={Theme.colors.success} style={styles.tipIcon} />
            <Text style={styles.tipText}>Look for sales and use coupons when shopping</Text>
          </View>
          <View style={styles.tipItem}>
            <Ionicons name="checkmark-circle" size={20} color={Theme.colors.success} style={styles.tipIcon} />
            <Text style={styles.tipText}>Consider carpooling or public transportation to save on fuel</Text>
          </View>
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
  subtitle: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textLight,
    marginBottom: Theme.spacing.lg,
  },
  insightCard: {
    marginBottom: Theme.spacing.md,
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Theme.spacing.sm,
  },
  insightTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
    flex: 1,
  },
  insightDescription: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text,
    lineHeight: 22,
  },
  tipsCard: {
    marginTop: Theme.spacing.md,
    marginBottom: Theme.spacing.xl,
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  tipsTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginLeft: Theme.spacing.sm,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Theme.spacing.sm,
  },
  tipIcon: {
    marginRight: Theme.spacing.sm,
    marginTop: 2,
  },
  tipText: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text,
    flex: 1,
    lineHeight: 22,
  },
});

export default InsightsScreen; 