import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";
import { Container } from "@/components/common";

const videoSource = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

const VideoPlayer = () => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <Container edgeToEdge>
      <VideoView
        style={styles.video}
        player={player}
        fullscreenOptions={{
          enable: true,
        }}
        allowsPictureInPicture
        nativeControls
      />
    </Container>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 300,
  },
});
