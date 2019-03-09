# OBS-Stream-App
React Web app to stream let people stream from their computer using [OBS](https://obsproject.com/)

## How to use?
Clone the repository
```
git clone git@github.com:Bennyhwanggggg/OBS-Stream-App.git
```

Start frontend
```
cd client
npm install
npm start
```

Start RTMP server
```
cd rtmp
npm start
```

Setup OBS
1. Install and start OBS
2. In OBS setting, under Stream, change service to custom and change the url to your url you set in `StreamShow.js` in `client/src/components/streams/StreamShow.js`
```
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
```
3. The `id` is the `Stream Key`you set on OBS
4. Start streaming and see your own stream on the respective id on the web page

