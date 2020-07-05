
## Kurulum
Gerekli paketlerimizi kuralım.
```sh
yarn install
```
Android kısmında bir takım eklemelerimiz olacaktır. IOS için ekstra bir işleme gerek yoktur.
_**_android/app/src/main/java_**_ içerisinde bulunan **MainActivity.java** dosyasına eklenecek satırlar "+" ile belirtilmiştir.
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
Uygulamamız hazır
```sh
yarn run android
```
komutu ile android emülatörümüzde uygulamamızı açabiliriz.
