## Aim
React Native Community haven't published any official document or source to realize drag-drop-swipe touch gestures on a component. I've some experiences on the touch gestures usage on a component some projects so, I've tried to show this features on a simple react native application. I hope it'll help to you.

![](https://media.giphy.com/media/Y3YG1j4dk7ErCVNPto/giphy.gif)

## Installation
Let's start to install required packages.
```sh
yarn install
```
There are some lines we need to add on the Android side.. This step does not required for IOS..
The lines to be added are indicated with "+".
The path is , _**_android/app/src/main/java/MainActivity.java_**_

```javascript
package com.gesturehandler;

import com.facebook.react.ReactActivity;

+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "gestureHandler";
  }

  + @Override
  + protected ReactActivityDelegate createReactActivityDelegate() {
  +   return new ReactActivityDelegate(this, getMainComponentName()) {
  +     @Override
  +     protected ReactRootView createRootView() {
  +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
  +     }
  +   };
  + }
  
}
```
Our example app ready!


```sh
yarn run android
```
We can run it with the above written command on an android emulator.
