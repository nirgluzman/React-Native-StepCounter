# Health Application with React Native: Step Counter

## Resources:

https://www.notjust.dev/projects/step-counter
https://www.youtube.com/live/VVoXcr18mdo?si=nZ2dFhJPteiiflMT
https://github.com/notJust-dev/StepCounter

## My repo on GitHub:

https://github.com/nirgluzman/React-Native-StepCounter.git

## Get Started with React Native

https://reactnative.dev/docs/environment-setup

https://docs.expo.dev/more/create-expo/#options

```bash
npx create-expo-app@latest --template blank-typescript
```

## Metro Bundler

https://docs.expo.dev/guides/customizing-metro/

- Purpose: Handles the bundling process, combining multiple JavaScript files into a single bundle
  that can be executed by the device or simulator.

- Metro Bundler is the default JavaScript bundler for React Native projects.
- It's responsible for transforming, bundling, and serving your JavaScript code to the development
  server or packaging it for production.
- Metro is highly optimized for the React Native environment, providing a seamless development
  experience.

## Babel configuration file

https://docs.expo.dev/versions/latest/config/babel/

- Purpose: Babel is used as the JavaScript compiler to transform modern JavaScript (ES6+) into a
  version compatible with the JavaScript engine on mobile devices.

## Expo DevClient

https://docs.expo.dev/versions/latest/sdk/dev-client/

- `expo-dev-client` adds various useful development tools to your debug builds.

## React Native Health --> package cannot be used in the Expo Go app !!

- Interface for reading and writing a user’s health and fitness data.

https://github.com/agencyenterprise/react-native-health (Apple)

https://github.com/matinzd/react-native-health-connect (Android)
https://matinzd.github.io/react-native-health-connect/docs/intro
https://developer.android.com/reference/kotlin/androidx/health/connect/client/records/package-summary#classes
https://www.notjust.dev/projects/step-counter/android-health-connect

- Google Health Connect itself doesn't collect data. It's a tool that allows different health and
  fitness apps to share data with each other in a secure and organized way.

https://support.google.com/fit/answer/12830119?hl=en-GB&dark=1&sjid=1763338138388400782-EU
https://stackoverflow.com/questions/79288279/why-doesnt-android-health-connect-capture-any-data/79290938#79290938

## React Native Reanimated

https://docs.expo.dev/versions/latest/sdk/reanimated/

https://docs.swmansion.com/react-native-reanimated/

- Installation includes `react-native-reanimated` package from npm and babel plugin.
- Reanimated babel plugin automatically converts special JavaScript functions (called worklets) to
  allow them to be passed and run on the UI thread.

## React Native animations - Tutorial

https://www.animatereactnative.com/

https://www.youtube.com/@CatalinMironDev/featured

## SVG

https://docs.expo.dev/versions/latest/sdk/svg/

- `react-native-svg` allows you to use SVGs in your app, with support for interactivity and
  animation.

## Icons

https://docs.expo.dev/guides/icons/
