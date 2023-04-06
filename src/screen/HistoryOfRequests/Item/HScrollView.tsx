import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import Color from 'color';

type Props = {
  title: string;
  keyValueSets: Record<string, string>[];
};

function HScrollView(props: Props) {
  const {title, keyValueSets} = props;
  const screenWidth = Dimensions.get('screen').width;
  const {paperTheme} = useAppearance();

  const BORDER_RADIUS = 10;
  const PADDING = 4;

  return (
    <View style={{width: screenWidth}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: PADDING,
            marginHorizontal: 16,
            backgroundColor: Color(paperTheme.colors.onBackground).alpha(0.05).hexa(),
            borderRadius: BORDER_RADIUS,
          }}>
          <Text numberOfLines={1} variant="bodySmall" style={{fontSize: 10, marginLeft: 8, width: 40}}>
            {title}
          </Text>

          {keyValueSets.map((param, index) => (
            <Text
              key={param + index.toString()}
              variant="bodySmall"
              style={{
                fontSize: 10,
                color: Color(paperTheme.colors.onSurface).alpha(0.9).hexa(),
                backgroundColor: paperTheme.colors.surface,
                paddingVertical: 4,
                paddingHorizontal: 8,
                marginLeft: 4,
                borderRadius: BORDER_RADIUS - PADDING,
                overflow: 'hidden',
              }}>
              {(() => {
                const key = Object.keys(param)[0];
                const value = param[key];
                return `${key}=${value}`;
              })()}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

HScrollView.defaultProps = {
  hScrollViewStyle: {},
};

export default HScrollView;