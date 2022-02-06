import { Text } from '@ui-kitten/components';
import { useRef } from 'react';
import { TouchableOpacity, Dimensions, StyleSheet, TextInput, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function EditScreenInfo({ path }: { path: string }) {
  const inputRef = useRef();
  const sharedVal = useSharedValue(0);
  const buttonTranslateY = useSharedValue(0);
  const buttonOpacity = useSharedValue(0);
  const DEFAULT_WIDTH = Dimensions.get('screen').width - 40;
  const AnimatedWidth = useSharedValue(DEFAULT_WIDTH);

  const buttonAnimStyles = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
      transform: [{ translateY: buttonTranslateY.value }],
    }
  });

  const valHandler = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: sharedVal.value }],
      width: AnimatedWidth.value,
    }
  });

  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={{ flex: 1, width: '100%', paddingHorizontal: 20, }}>
      <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 100, }}>
        <AnimatedTextInput
          ref={inputRef}
          placeholder='Artists, songs or podcasts'
          onFocus={() => {
            sharedVal.value = withTiming(-40);
            buttonTranslateY.value = withTiming(-40);
            AnimatedWidth.value = withTiming(DEFAULT_WIDTH - 60);
            buttonOpacity.value = withTiming(1);
          }}
          onBlur={() => {
            sharedVal.value = withTiming(0);
            buttonTranslateY.value = withTiming(0);
            AnimatedWidth.value = withTiming(DEFAULT_WIDTH);
            buttonOpacity.value = withTiming(0);
          }}
          placeholderTextColor='grey'
          style={[{
            paddingLeft: 10,
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: 'white',
            borderRadius: 4,
            height: 45,
            marginRight: 18,
            width: DEFAULT_WIDTH,
          }, valHandler]} />

        <AnimatedButton style={[buttonAnimStyles]} onPress={() => {
          inputRef?.current?.blur()

        }}>
          <Text style={{ color: 'white' }}>cancel</Text>
        </AnimatedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
