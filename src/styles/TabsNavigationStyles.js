import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const tabsNavigationStyles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute tabs evenly
    alignItems: 'center',
    height: 90, // Increased height for better layout
    width: width,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20, // Rounded top corners
    borderTopRightRadius: 20,
    shadowColor: '#1fabfe27', // Shadow effect
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.25,
    shadowRadius: 44,
    elevation: 10, // For Android
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20, // Padding for the container
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCircle: {
    position: 'absolute',
    bottom: 30, // Move the circle below the tab bar
    width: 70,
    height: 70,
    borderRadius: 35, // Circular shape
    backgroundColor: '#eff9ff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1fabfe27',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5, // For Android shadow
    left: (width / 2) - 35, // Center the circle in the middle
    zIndex: 10,
  },
  centerIcon: {
    width: 70,
    height: 70,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabIconActive: {
    tintColor: '#3d7b85', // Active icon color
  },
  tabLabelActive: {
    color: '#3d7b85',
  },
  tabLabel: {
    color: '#1fabfe',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 4, // Spacing between the icon and text
  },
});
