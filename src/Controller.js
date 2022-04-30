import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

export default function Controller({onNext, onPrv}) {
  const playbackState = usePlaybackState();
  const [isPlaying,setIsPlaying] = useState('paused'); //paused play loading

  useEffect(() => {
    //set the player state
    if (playbackState === 'playing' || playbackState === 3) {
      setIsPlaying('playing');
    } else if (playbackState === 'paused' || playbackState === 2) {
      setIsPlaying('paused');
    } else {
      setIsPlaying('loading');
    }
    console.log(playbackState);
  }, [playbackState]);

  const renderPlayPauseBtn = () => {
    console.log(isPlaying);
    switch (isPlaying) {
      case 'playing':
        return <Icon name="pause" color = "#fff" size={45} />;
      case 'paused':
        return <Icon name="play-arrow" color = "#fff" size={45} />;
      default:
        return <ActivityIndicator color = "#fff" size={45} />;
    }
  };

  const onPlayPause = () => {
    console.log(playbackState);
    if (playbackState === 'playing' || playbackState === 3) {
      TrackPlayer.pause();
    } else if (playbackState === 'paused' || playbackState === 2) {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <Icon name="skip-previous" color = "#fff" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        {renderPlayPauseBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Icon name="skip-next" color = "#fff" size={45} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250
  },
});
