import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dailyFeeReportContainer: {
    borderRadius: 8,
  },
  dailyFeeReportTitle: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 19,
    color: 'black',
  },
  feeBarContainer: {
    position: 'relative'
  },
  warningIcon: {
    position: 'absolute',
    zIndex: 1,
    right: 10
  },
  feeBarGraph: {
    width: '100%',
    height: 25,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
    position: 'relative', // 부모 요소에 상대적 위치
  },
  feeBar: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feeTextOverlay: {
    position: 'absolute', // 텍스트를 절대 위치로
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 25, // 그래프 바 높이와 동일하게 설정하여 수직 중앙 정렬
  },

  feeContainer: {

  },
  feeTitle: {
    marginTop: 20,
    fontFamily: 'Pretendard-Bold',
    fontSize: 17,
    color: 'black',
  },
  feeTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 2,
  },
  nutrientIcon: {
    marginRight: 10
  },
  nutrientText: {
    marginRight: 5,
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 15,
    color: 'black'
  },
  nutrientNum: {
    marginRight: 10,
    fontFamily: 'Pretendard-Light',
    fontSize: 15,
    color: 'black'
  },
  feeDetailContainer: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: '#F3F4F7',
  },
  feeIcon: {
    marginRight: 10
  },
  feeDetailRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  feeMenuText: {
    marginRight: 5,
    fontSize: 14,
    fontFamily: 'Pretendard-SemiBold',
    color: 'black',
  },
  feePriceText: {
    fontSize: 14,
    fontFamily: 'Pretendard-Light',
    color: 'black',
  },
  feeDetailText: {
    fontSize: 13,
    fontFamily: 'Pretendard-Light',
    color: 'black',
  },
  iconConatiner: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kcalGraphContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  kcalGrpahDetailContainer: {
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  kcalGraphDetailBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  kcalGraphDetailText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    paddingLeft: 5,
    color: 'black'
  },
  linkButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});