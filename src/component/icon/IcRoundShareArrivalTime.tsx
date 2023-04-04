import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {size?: number; color?: string};

function IcRoundShareArrivalTime(props: Props) {
  const {size = 24, color = '#000'} = props;
  return (
    <Svg width={size} height={size} color={color} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm3.11 11.11a.99.99 0 0 1-1.39 0l-2.14-2.14c-.37-.37-.58-.88-.58-1.41V9c0-.57.48-1.04 1.07-1c.53.04.93.5.93 1.03v2.58l2.11 2.11a.99.99 0 0 1 0 1.39zm9.79 1.79c-.38-.38-.4-.91-.11-1.3c.76-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6c-.3-.39-.27-.93.11-1.3a.989.989 0 0 1 1.48.09C23.4 8.52 24 10.19 24 12s-.6 3.48-1.62 4.82c-.36.47-1.06.5-1.48.08zm-2.52-2.52c-.36-.36-.37-.83-.16-1.23c.18-.34.28-.74.28-1.15s-.1-.81-.28-1.15c-.21-.4-.18-.89.14-1.21c.49-.49 1.26-.38 1.58.19c.36.64.56 1.39.56 2.17s-.2 1.53-.56 2.17c-.31.57-1.1.67-1.56.21z"
      />
    </Svg>
  );
}

export default IcRoundShareArrivalTime;
