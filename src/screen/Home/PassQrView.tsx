import React from 'react';
import {View, Dimensions, ActivityIndicator, Platform} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import Image from 'react-native-image-progress';
import {Bar as ProgressBar} from 'react-native-progress';
import Color from 'color';
import {SvgXml} from 'react-native-svg';
import {useAppearance} from '@/utils/appearance';
import {usePassQr} from '@/utils/passQr';
import {useDebug} from '@/utils/debug';
import qrCodeMocking from './qrCodeMocking.svg';

type Props = {
  countdown: number;
  isRefrashLoading: boolean;
  onPress: () => void;
};

function PassQrView(props: Props) {
  const {countdown, isRefrashLoading, onPress} = props;
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const {paperTheme} = useAppearance();
  const {passQr} = usePassQr();

  const {enableEnterpriseNameMocking, enableQrCodeMocking} = useDebug();

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{height: screenHeight < 576 ? 32 : 48, justifyContent: 'flex-end'}}>
        <Text>{enableEnterpriseNameMocking ? '昆明我爱你你也爱我有限公司' : passQr?.enterprise_name}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: screenWidth / 1.5 + 24,
          height: screenWidth / 1.5 + 24,
          backgroundColor: '#fff',
          borderRadius: 24,
          marginTop: 8,
        }}>
        {enableQrCodeMocking && (
          <SvgXml xml={qrCodeMocking.toString()} width={screenWidth / 1.5} height={screenWidth / 1.5} />
        )}
        {!enableQrCodeMocking && (
          <Image
            source={{uri: passQr?.qrCode}}
            indicator={ProgressBar}
            indicatorProps={{
              indeterminate: true,
              borderWidth: 1,
              borderColor: paperTheme.colors.outline,
              color: paperTheme.colors.primaryContainer,
            }}
            threshold={0}
            style={{width: screenWidth / 1.5, height: screenWidth / 1.5}}
          />
        )}
      </View>
      <View style={{height: 24, justifyContent: 'flex-end'}}>
        {passQr && (
          <Text
            variant="bodySmall"
            style={{
              fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
              color: Color(paperTheme.colors.onBackground).alpha(0.45).hexa(),
            }}>
            {countdown} 秒后自动刷新
          </Text>
        )}
      </View>
      <TouchableRipple
        borderless
        disabled={isRefrashLoading}
        style={{marginTop: screenHeight < 576 ? 8 : 16, borderRadius: 8}}
        onPress={onPress}>
        <View
          style={{
            height: 32,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isRefrashLoading
              ? Color(paperTheme.colors.onSurfaceVariant).alpha(0.06).hexa()
              : Color(paperTheme.colors.tertiaryContainer).alpha(0.7).hexa(),
          }}>
          {isRefrashLoading && (
            <ActivityIndicator
              animating={isRefrashLoading}
              color={Color(paperTheme.colors.onTertiaryContainer).alpha(0.25).hexa()}
            />
          )}
          {!isRefrashLoading && <Text variant="bodySmall">立即刷新</Text>}
        </View>
      </TouchableRipple>
    </View>
  );
}

export default PassQrView;
