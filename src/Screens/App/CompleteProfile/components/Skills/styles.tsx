import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../theme/appColors';
import {appSizes} from '../../../../../theme/appSizes';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  bottomSection: {
    backgroundColor: appColors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    zIndex: 10,
    height: '100%',
    paddingHorizontal: appSizes.padding_x,
    // marginTop:-15
  },
  CardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    backgroundColor: appColors.white,
    borderRadius: 25,
    marginTop: 15,
  },
  secContainer: {
    width: '100%',
    backgroundColor: appColors.lightGrey2,
    borderRadius: 25,
    padding: 5,
    paddingTop: 10,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'Noto Sans',
  },
  smallCardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: '#00928E',
    borderWidth: 0.5,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#E6FAFA',
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
    marginBottom: 10,
  },
  con: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  smallCardText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#00928E',
    marginRight: 5,
    fontFamily: 'Noto Sans',
  },
  devider: {
    height: 1,
    width: '95%',
    backgroundColor: '#E8E8E8',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  seeAll: {
    fontSize: 18,
    fontWeight: '600',
    color: appColors.primary,
    textAlign: 'center',
    fontFamily: 'Noto Sans',
  },
});

export default styles;
