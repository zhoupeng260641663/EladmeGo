import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {size?: number; color?: string};

function IcRoundWaterfallChart(props: Props) {
  const {size = 24, color = '#000'} = props;
  return (
    <Svg width={size} height={size} color={color} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M19.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm-15 9c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5S3 19.33 3 18.5v-4c0-.83.67-1.5 1.5-1.5zm11-9c.83 0 1.5.67 1.5 1.5S16.33 7 15.5 7S14 6.33 14 5.5S14.67 4 15.5 4zm-4 1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5v-1c0-.83.67-1.5 1.5-1.5zm-3 5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S7 13.33 7 12.5v-1c0-.83.67-1.5 1.5-1.5z"
      />
    </Svg>
  );
}
export default IcRoundWaterfallChart;