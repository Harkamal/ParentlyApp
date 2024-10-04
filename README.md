# ParentlyApp

## Getting Started

### 1. Install Dependencies

Run the following command to install all the required dependencies for the project:

```bash
npm install
```
#### What does npm install do?
This command reads the package.json file and installs all the necessary packages listed under "dependencies" and "devDependencies".
It creates a node_modules folder, where the downloaded libraries will be stored, making them available for use in the app.


### 2. Install iOS Dependencies
If you're working on macOS and need to run the iOS version of the app, you also need to install the iOS project dependencies by running:

```bash
cd ios && pod install
```
#### What does `pod install` do?
- `pod install` uses CocoaPods to download and integrate iOS-specific libraries. It ensures that all native iOS dependencies like UI components and gesture handlers are properly installed.
- It creates a `Pods` directory in the `ios` folder, containing all the required libraries and their configurations.

---

### 3. Run the iOS App

After installing all dependencies, you can start the iOS version of the app using the following command:
```bash
npx react-native run-ios
```

#### What does `npx react-native run-ios` do?
- This command compiles and launches the app in the iOS simulator (or on a connected iOS device if properly set up).
- It uses Xcode to build the project and runs the app in the development environment for testing.

---

## Libraries Used

### Dependencies
- **@ant-design/icons-react-native**: Provides a set of customizable vector icons specifically for React Native.
- **@react-navigation/native** & **@react-navigation/bottom-tabs**: These libraries manage navigation within the app and implement a bottom tab navigation structure.
- **@react-navigation/stack**: Enables stack-based navigation, allowing screens to be pushed and popped from the stack.
- **lottie-react-native**: Used for animations, providing support for complex animations designed in Lottie.
- **react-native-gesture-handler**: Provides better gesture handling, enhancing the touch response in React Native apps.
- **react-native-linear-gradient**: Allows the use of linear gradient backgrounds in the app.
- **react-native-markdown-display**: Renders Markdown content as styled components in React Native.
- **react-native-render-html**: Safely renders HTML content in React Native.
- **react-native-safe-area-context**: Manages safe area views, ensuring the app content doesn't overlap with system bars.
- **react-native-screens**: Optimizes navigation performance by using native screens for rendering.
- **react-native-splash-screen**: Handles the splash screen, shown while the app is loading.
- **react-native-vector-icons**: Offers a wide variety of icons that can be used throughout the app.

### Dev Dependencies
- **@babel/core** & **@babel/preset-env**: Used for transpiling modern JavaScript (ES6+) to a version compatible with older environments.
- **eslint**: Helps to identify and fix problems in your JavaScript code.
- **jest**: A testing framework for running unit tests in your app.
- **typescript**: Provides static typing for JavaScript, helping with catching errors early.
- **prettier**: A code formatter to ensure consistent style in your codebase.

---

### Using Custom fonts
Font files are places inside assets/fonts folder. Link them using below command and use the filename as font-family. [Refer](https://docs.expo.dev/develop/user-interface/fonts/)
```bash
npx react-native-asset
```

### Node.js Version
Make sure you're using Node.js version `>=18`, as specified in the `package.json` file.
---
