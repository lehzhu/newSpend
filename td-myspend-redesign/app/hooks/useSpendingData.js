import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch and manage spending data
 * In a real app, this would fetch data from an API
 */
export const useSpendingData = (period = 'month') => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data based on period
        const mockData = getMockData(period);
        setData(mockData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch spending data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period]);

  return { loading, error, data };
};

/**
 * Generate mock data based on the selected period
 */
const getMockData = (period) => {
  // Mock spending categories
  const spendingCategories = [
    {
      id: '1',
      title: 'Groceries',
      amount: period === 'week' ? 120.75 : period === 'month' ? 450.75 : 5400.50,
      previousAmount: period === 'week' ? 110.25 : period === 'month' ? 420.50 : 5100.25,
      icon: 'cart',
      iconColor: '#008A00',
    },
    {
      id: '2',
      title: 'Dining Out',
      amount: period === 'week' ? 85.50 : period === 'month' ? 320.25 : 3850.75,
      previousAmount: period === 'week' ? 95.20 : period === 'month' ? 380.80 : 4200.30,
      icon: 'restaurant',
      iconColor: '#FF6B6B',
    },
    {
      id: '3',
      title: 'Transportation',
      amount: period === 'week' ? 45.25 : period === 'month' ? 150.00 : 1800.50,
      previousAmount: period === 'week' ? 50.75 : period === 'month' ? 165.25 : 1950.75,
      icon: 'car',
      iconColor: '#4ECDC4',
    },
    {
      id: '4',
      title: 'Entertainment',
      amount: period === 'week' ? 60.25 : period === 'month' ? 200.50 : 2400.25,
      previousAmount: period === 'week' ? 55.50 : period === 'month' ? 180.75 : 2150.50,
      icon: 'film',
      iconColor: '#FFE66D',
    },
  ];

  // Mock chart data
  const chartLabels = 
    period === 'week' 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] 
      : period === 'month' 
        ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] 
        : ['2018', '2019', '2020', '2021', '2022', '2023'];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: Array(chartLabels.length).fill().map(() => Math.floor(Math.random() * 3000) + 1000),
        color: (opacity = 1) => `rgba(0, 138, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return {
    totalSpending: spendingCategories.reduce((sum, category) => sum + category.amount, 0),
    categories: spendingCategories,
    chartData,
  };
};

export default useSpendingData; 