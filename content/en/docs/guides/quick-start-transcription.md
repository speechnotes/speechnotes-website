---
title: "Transcription Quick Start"
description: "Quick start guide on how to quickly automatically transcribe audio & video recordings"
date: 2023-02-16T13:59:39+01:00
lastmod: 2023-02-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 120
toc: true
---

<br/>

## Short Demo

<div style="margin: 30px auto; text-align: center; overflow-x: scroll">
  <iframe style="display: inline-block" width="560" height="315" src="https://www.youtube.com/embed/UIVHQpfnzkU" title="Speechnotes Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## See Real Life Examples

<p>For a quick overview of how Speechnotes Transcribe works, you can see some real life examples of transcriptions done by Speechnotes. <a href="/samples" target="_blank">Here are some samples</a></p>



## Start & Sign In

<br/>
<p>Go to Speechnotes Transcribe web page at <a href="https://speechnotes.co/transcribe/">
  <!--<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAaCAYAAABRhnV8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNWM4MWUxOS0zYWJmLTQyYWYtOTVhMi01MDBiZWU5NzAyMTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkNCQkJBMDlCNkRGMTFFM0JDMTdBQTgyNEFEQURCQTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkNCQkJBMDhCNkRGMTFFM0JDMTdBQTgyNEFEQURCQTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWFkZWM0M2YtMmFjMy00NTEyLTljNzQtYjVmMDJjMWNhNTkxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI1YzgxZTE5LTNhYmYtNDJhZi05NWEyLTUwMGJlZTk3MDIxOCIvPiA8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" />-->
  https://speechnotes.co/transcribe/
</a></p>
<p>Tap the 'SIGN IN' and sign in using your Google account. No need to remember new passwords. Speechnotes will not receive your password - it remains private - it only receives your email address and confirmation from Google that indeed you signed in.
<figure>
  <img  class="centered-img" src="/images/signin_button.webp" alt="Sign in using your gmail account" />
  <figcaption>Sign in using your gmail account</figcaption>
</figure>
</p>
<br/>

## Purchase Credit

<p>Once signed in, you will see a welcome message with your name. There you will see the main 2 action buttons you need. The first is to load credit minutes for transcription. Click on the 'ADD CREDIT' button, as seen in the image below.
<figure>
  <img class="centered-img" src="/images/pay_button.webp" alt="Click 'ADD CREDIT' to open the purchase dialog" />
  <figcaption>Click 'ADD CREDIT' to open the purchase dialog</figcaption>
</figure>
Then, the purchase dialog will open, where you can choose how many minutes you would like to purchase. This is a pre-paid method, where unused minutes stay as credit in your account for future transcription jobs.
<figure>
  <img class="centered-img" src="/images/pay_dialog.webp" alt="Purchase dialog" />
  <figcaption>Purchase dialog. Select how many minutes.</figcaption>
</figure>
Once purchased, you will see you credit-minutes added and updated on the main screen. It may take a few seconds for the payment and update to go through.
<b>Please note: for your convenience, we accept payments both from PayPal and from credit cards, whatever you choose. Payments are secured and processed by PayPal.</b>
</p>
<br/>

## Upload file, or link url


<p>Then - last step - simply upload your file. Speechnotes-Files accepts most types of both audio and video files. Although, for your own convenience it is much preferable to upload audio files and not videos as videos are much larger in size. Which means uploading a video file may take much more time and data (if you are on mobile) than uploading only the audio part. So, if upload of a video file is too slow, or fails altogether due to interrupts, it is recommended to extract the audio out of the video and upload the audio part alone.
<figure>
  <img class="centered-img" src="/images/upload_button.webp" alt="Click 'UPLOAD' to open the upload dialog" />
  <figcaption>Upload button</figcaption>
</figure>
Then, the upload dialog will open, where you can select your file, select the language of the audio in the recording and type if necessary.
<figure>
  <img class="centered-img" src="/images/upload_dialog.webp" alt="Upload dialog" />
  <figcaption>Upload dialog</figcaption>
</figure>
For your convenience, you can either upload a file stored on your local disk, or - you can simply paste the url to a file online or even a regular YouTube link. The url can be a direct url to an audio or video file, YouTube, or a Google Drive url. If your files are already on Google Drive - then this is the preferred option. Please note that Google-Drive links are limited to 100MB file size.
<br/><b>Please note: if you select to pass a Google Drive url - please make sure the file is less than 100MB and that it is indeed publicly shared and accessible through that link, as we do not ask for a specific permission to access it. <a href="https://www.howtogeek.com/299668/how-to-create-shareable-download-links-for-files-on-google-drive/" target="_blank">Here's how to get a public url for a file on Drive</a></b>

### Upload multiple files at once

<br>
For your convenience, you can even upload multiple files at once, or send multiple links at once. If you do send multiple links, please separate them with a comma.

<br/>


## Transcription results
<p>Results will show just a few minutes after upload finished on your dashboard at https://speechnotes.co/transcribe/  <br/>
  For your convenience you will be notified via email.
</p>


## Contact Us

Best way to contact us is through the chat message bot on speechnotes.co/transcribe/


