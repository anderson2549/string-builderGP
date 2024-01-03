# StringBuilder
[![Known Vulnerabilities](https://snyk.io/test/github/halil/StringBuilder/badge.svg?targetFile=package.json)](https://snyk.io/test/github/halil/StringBuilder?targetFile=package.json)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhalil%2FStringBuilder.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fhalil%2FStringBuilder?ref=badge_shield)

[![NPM](https://nodei.co/npm/string-builder.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/string-builder/)

An string builder for [Node.js](http://nodejs.org/)

### Installation

```
npm install string-builder
```

### Usage

```js
const StringBuilder = require("string-builder");
const sb = new StringBuilder();

const buffer = Buffer.from([0x30, 0x31, 0x32]); // 012

sb.append("normal text");
sb.appendLine();
sb.appendFormat("formatted text {0}, {1}", "format 1", "format 2");
sb.appendLine()
sb.append(12)
sb.appendLine()
sb.append(1)
sb.appendLine()
sb.append(0)
sb.appendLine()
sb.appendFormat("formatted text {0}, {1}", 3.6745674, 12);
sb.appendLine()
sb.appendLine(true)
sb.appendLine(false)
sb.appendLine(buffer)
sb.appendLine()
sb.append(undefined);
sb.appendLine()
sb.append(null);
sb.appendLine()
sb.appendFormat("formatted text {0}, {1}", 3.6745674, 1);

console.log("======")
console.log(sb.toString());
console.log("======")

/*
console =>
======
normal text
formatted text format 1, format 2
12
1
0
formatted text 3.6745674, 12

true
false
012


formatted text 3.6745674, 1
======
*/

```
## License
The MIT License (MIT)

Copyright © 2014 Halil İbrahim ŞAFAK

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhalil%2FStringBuilder.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fhalil%2FStringBuilder?ref=badge_large)