# MessageTunnel

Very simple and lightweight message tunnel for sending and receiving events between components in ReactJS.

I dont like complex libs for such a simple things, therefore I developed this library in some minutes :) Enjoy!

## How to install?

download latest MT.js and save it into your src folder! Done! No dependency! 100% standalone and just about 100 lines of code!

## How to use it?

1- Import it!

```
  import MT from './MT'
```

2- Subscribe to a channel in any commponent you like and at anytime!!
> channel name should follow variable naming resterictions! 
```
   MT.Subscribe("my_channel", this.myEventHandler.bind(this));
```

3- Dispatach an envelope to channel in any commponent you like and at anytime!! all subscribers will get it one by one!
```
   let envelope = { key : "sample value"};
   MT.Dispatch("my_channel", envelope);
```

4- Done!
