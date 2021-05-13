var feed = new Instafeed({
    accessToken: 'IGQVJVblRJTWZAzUnJUVU12NHNnV1RndkdoWjR6dmNMdVNUdndGVTRncWNvMjBWS2hKdGhXeEpZASGVTSW9jdGpHVFpKVWFsWWJXWEVya0x1RkV4c3BiZADBIeWhsV0k0THpWeEg0NEtJZAnNoOFhOQm82MAZDZD'
  });
  feed.run();
  var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
  btnInstafeedLoad.addEventListener("click", function() {
    galleryFeed.next()
  });
  