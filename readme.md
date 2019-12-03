# Intellect: Math

Perform math calculations using [Intellect](http://github.com/makesites/intellect)


## Install

Using npm:
```
npm install intellect-math
```


## Usage

Once _intellect_ is loaded you may pass an equation to calculate, for example:

```
var math = require("intellect-math");

intellect.use( math() );

var equation = "1 + 1";

intellect.process( equation, function( req, res ){
	callback(res.data);
});

```

where _callback_ is a custom method to handle the response

For more information on loading _intellect_ please [refer to the main lib](https://github.com/makesites/intellect)


## Credits

Initiated by [Makis Tracend](http://github.com/tracend)

Part of [Intellect](http://github.com/makesites/intellect)

Distributed through [Makesites.org](http://makesites.org)


## License

Released under the [MIT license](http://makesites.org/licenses/MIT)
