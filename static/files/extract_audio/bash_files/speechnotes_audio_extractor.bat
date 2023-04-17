:: videos: .avi, .mp4, .mpeg, .mov
:: audios: .aac, .m4a, .mp3, .ogg, .raw, .flac, .wav, .amr

if not exist "speechnotes-output-audio-only" mkdir speechnotes-output-audio-only

for %%F in (*.avi) do (
    c://speechnotes_ffmpeg/bin/ffmpeg -i "%%F" -vn -acodec copy "speechnotes-output-audio-only/%%~nxF"
)

for %%F in (*.mp4) do (
    c://speechnotes_ffmpeg/bin/ffmpeg -i "%%F" -vn -acodec copy "speechnotes-output-audio-only/%%~nxF"
)


for %%F in (*.mpeg) do (
    c://speechnotes_ffmpeg/bin/ffmpeg -i "%%F" -vn -acodec copy "speechnotes-output-audio-only/%%~nxF"
)


for %%F in (*.mov) do (
    c://speechnotes_ffmpeg/bin/ffmpeg -i "%%F" -vn -acodec copy "speechnotes-output-audio-only/%%~nxF"
)