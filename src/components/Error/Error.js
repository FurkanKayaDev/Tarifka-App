import React from 'react'
import LottieView from 'lottie-react-native';

function Error() {
  return <LottieView source={require('../../asstes/90569-error.json')} autoPlay />
}

function Loading() {
  return <LottieView source={require('../../asstes/9844-loading-40-paperplane.json')} autoPlay />
}
export default Error