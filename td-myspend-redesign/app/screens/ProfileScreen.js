import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import Theme from '../constants/Theme';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [biometricEnabled, setBiometricEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const renderSettingItem = (icon, title, description, value, onValueChange) => (
    <View style={styles.settingItem}>
      <View style={styles.settingIconContainer}>
        <Ionicons name={icon} size={24} color={Theme.colors.primary} />
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: Theme.colors.inactive, true: `${Theme.colors.primary}80` }}
        thumbColor={value ? Theme.colors.primary : Theme.colors.secondary}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Profile & Settings" />
      <ScrollView style={styles.scrollView}>
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editAvatarButton}>
                <Ionicons name="camera" size={16} color={Theme.colors.secondary} />
              </TouchableOpacity>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileEmail}>john.doe@example.com</Text>
              <Text style={styles.accountNumber}>Account: ****1234</Text>
            </View>
          </View>
          <Button
            title="Edit Profile"
            type="outline"
            size="small"
            style={styles.editProfileButton}
          />
        </Card>

        <Text style={styles.sectionTitle}>Settings</Text>

        <Card style={styles.settingsCard}>
          {renderSettingItem(
            'notifications',
            'Notifications',
            'Receive alerts about your spending',
            notificationsEnabled,
            setNotificationsEnabled
          )}
          {renderSettingItem(
            'finger-print',
            'Biometric Login',
            'Use fingerprint or face ID to login',
            biometricEnabled,
            setBiometricEnabled
          )}
          {renderSettingItem(
            'moon',
            'Dark Mode',
            'Switch to dark theme',
            darkModeEnabled,
            setDarkModeEnabled
          )}
        </Card>

        <Text style={styles.sectionTitle}>Preferences</Text>

        <Card style={styles.preferencesCard}>
          <TouchableOpacity style={styles.preferenceItem}>
            <Ionicons name="card" size={24} color={Theme.colors.primary} style={styles.preferenceIcon} />
            <Text style={styles.preferenceText}>Linked Accounts</Text>
            <Ionicons name="chevron-forward" size={20} color={Theme.colors.textLight} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.preferenceItem}>
            <Ionicons name="cash" size={24} color={Theme.colors.primary} style={styles.preferenceIcon} />
            <Text style={styles.preferenceText}>Budget Settings</Text>
            <Ionicons name="chevron-forward" size={20} color={Theme.colors.textLight} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.preferenceItem}>
            <Ionicons name="lock-closed" size={24} color={Theme.colors.primary} style={styles.preferenceIcon} />
            <Text style={styles.preferenceText}>Privacy & Security</Text>
            <Ionicons name="chevron-forward" size={20} color={Theme.colors.textLight} />
          </TouchableOpacity>
        </Card>

        <Text style={styles.sectionTitle}>Support</Text>

        <Card style={styles.supportCard}>
          <TouchableOpacity style={styles.preferenceItem}>
            <Ionicons name="help-circle" size={24} color={Theme.colors.primary} style={styles.preferenceIcon} />
            <Text style={styles.preferenceText}>Help Center</Text>
            <Ionicons name="chevron-forward" size={20} color={Theme.colors.textLight} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.preferenceItem}>
            <Ionicons name="chatbubble-ellipses" size={24} color={Theme.colors.primary} style={styles.preferenceIcon} />
            <Text style={styles.preferenceText}>Contact Support</Text>
            <Ionicons name="chevron-forward" size={20} color={Theme.colors.textLight} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.preferenceItem}>
            <Ionicons name="information-circle" size={24} color={Theme.colors.primary} style={styles.preferenceIcon} />
            <Text style={styles.preferenceText}>About</Text>
            <Ionicons name="chevron-forward" size={20} color={Theme.colors.textLight} />
          </TouchableOpacity>
        </Card>

        <Button
          title="Sign Out"
          type="outline"
          style={styles.signOutButton}
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
  profileCard: {
    marginBottom: Theme.spacing.lg,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: Theme.spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Theme.colors.primary,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Theme.colors.secondary,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.xs,
  },
  profileEmail: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.textLight,
    marginBottom: Theme.spacing.xs,
  },
  accountNumber: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
  },
  editProfileButton: {
    alignSelf: 'flex-start',
  },
  sectionTitle: {
    fontSize: Theme.typography.fontSize.lg,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.sm,
  },
  settingsCard: {
    marginBottom: Theme.spacing.lg,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Theme.spacing.sm,
  },
  settingIconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: Theme.spacing.sm,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: Theme.typography.fontSize.md,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.xs,
  },
  settingDescription: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.colors.textLight,
  },
  preferencesCard: {
    marginBottom: Theme.spacing.lg,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Theme.spacing.md,
  },
  preferenceIcon: {
    marginRight: Theme.spacing.md,
  },
  preferenceText: {
    flex: 1,
    fontSize: Theme.typography.fontSize.md,
    color: Theme.colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: Theme.colors.border,
  },
  supportCard: {
    marginBottom: Theme.spacing.xl,
  },
  signOutButton: {
    marginBottom: Theme.spacing.xl,
  },
});

export default ProfileScreen; 