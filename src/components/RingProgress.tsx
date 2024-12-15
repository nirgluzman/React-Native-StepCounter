// https://www.notjust.dev/projects/step-counter/animated-progress-ring

import { View } from 'react-native';
import Svg, { Circle, type CircleProps } from 'react-native-svg';
import Animated, {
  useAnimatedProps, // create an animated props object which can be animated using shared values.
  useSharedValue, // create a shared value which can be animated.
  withTiming, // create a timing animation (ensures that the animation is smooth and natural).
} from 'react-native-reanimated';

import FontAwesome from '@expo/vector-icons/FontAwesome'; // https://icons.expo.fyi/Index/FontAwesome/arrow-right

import { useEffect } from 'react';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

const color = '#EE0F55';

export const RingProgress = ({ radius = 100, strokeWidth = 35, progress }: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  useEffect(() => {
    // smoothly interpolate the fill.value from its current value to the progress value over a duration of 1000 milliseconds (1 second).
    fill.value = withTiming(progress, { duration: 1000 });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference], // defines a pattern of dashes and gaps
  }));

  const circleDefaultProps: CircleProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    originX: radius,
    originY: radius,
    fill: 'transparent', // defines the color of the shape inside its outline (the surface of the SVG shape, in other words) --> to ensure consistent stroke width !!
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    rotation: '-90',
  };

  return (
    <View
      style={{
        alignSelf: 'center',
        width: radius * 2,
        height: radius * 2,
      }}>
      <Svg>
        {/* background */}
        <Circle {...circleDefaultProps} opacity={0.15} />

        {/* foreground */}
        <AnimatedCircle {...circleDefaultProps} animatedProps={animatedProps} />
      </Svg>

      {/* arrow */}
      <FontAwesome
        name='arrow-right'
        size={strokeWidth * 0.7}
        color='black'
        style={{ position: 'absolute', alignSelf: 'center', top: strokeWidth * 0.15 }}
      />
    </View>
  );
};
