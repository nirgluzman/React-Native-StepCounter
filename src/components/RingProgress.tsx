import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

const color = '#EE0F55';

export const RingProgress = ({ radius = 100, strokeWidth = 35, progress }: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  return (
    <View
      style={{
        alignSelf: 'center',
        width: radius * 2,
        height: radius * 2,
      }}>
      <Svg>
        {/* background */}
        <Circle
          r={innerRadius}
          cx={radius}
          cy={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0.2}
        />
        {/* foreground */}
        <Circle
          r={innerRadius}
          cx={radius}
          cy={radius}
          originX={radius}
          originY={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[circumference * progress, circumference]} // defines a pattern of dashes and gaps
          strokeLinecap='round'
          rotation='-90'
        />
      </Svg>
    </View>
  );
};
