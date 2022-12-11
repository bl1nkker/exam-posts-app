import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'
import { bootstrap } from './src/bootstrap'
import { LayOut } from './src/components/layOut/LayOut'
import store from './src/redux/store/store'
//const Stack = createNativeStackNavigator(); /////navigation for APP

export default function App() {
  const [font, setFont] = useState(false)
  if (font) {
    return (
      <Provider store={store}>
        <LayOut />
      </Provider>

    )
  } else {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setFont(true)}
        onError={err => console.log(err)}
      />
    )
  }

}
// const fonts = !isReady ? <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} onError={err => console.log(err)} /> : null


