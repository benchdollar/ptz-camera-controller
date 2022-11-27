# PTZ Camera Controller

A web app to easily control preset PTZ camera positions.

## Compatible PTZ Camera

This app is intended for controlling the SMTAV PTZ camera, as available in stores, for example at [Amazon](https://www.amazon.de/dp/B085L8PJ9N).

## How it works

The PTZ camera offers a simple web GUI, that can be opened in a web browser. 
The buttons for storing and recalling a camera position issue a HTTP request.

The endpoint for recalling a position is
```
http://IP_ADDRESS/cgi-bin/ptzctrl.cgi?ptzcmd&poscall&PRESET
```
where `IP_ADDRESS` is the hostname or IP address of the camera and `PRESET` is the integer number of the preset.

For example, recalling the preset 1 would be the HTTP GET request to
```
http://192.168.178.200/cgi-bin/ptzctrl.cgi?ptzcmd&poscall&1
```

To store the current position as a preset, simply exchange the command `poscall` by `posset`.

## Picture Credits

The icon is from [shmector.com](https://shmector.com/free-vector/web/camera_icon/6-0-1221), licensed under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).

