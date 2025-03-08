import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme';
import { useNavigation } from '@react-navigation/native';

const Header = ({ 
  title, 
  showBackButton = false, 
  rightComponent,
  style,
  titleStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.colors.primary} />
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={Theme.colors.secondary} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={[styles.title, titleStyle]} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: Theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.md,
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    color: Theme.colors.secondary,
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    padding: Theme.spacing.xs,
  },
});

export default Header; 