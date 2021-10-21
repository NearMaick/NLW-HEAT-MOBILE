import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 36
  },
  message: {
    fontSize: 15,
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    lineHeight: 20,
    marginBottom: 12
  },
  userName: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
    marginLeft: 16
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  }
});