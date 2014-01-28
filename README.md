A repo for learning how to refactor callback style code into promises. I've committed my versions of the code in promise-stylee, but the idea is that you check out what's here and refactor it into promises, and hopefully it looks nicer once you've finished.

We're using [q](https://github.com/kriskowal/q) so that we get the full chaining behaviour of promises, as the jquery implementation doesn't chain promises as per the A+ spec (and IMHO that's a lot of the benefit of this refactor)

simple.html - really basic example with divide function with callbacks, that can be rejigged into promise style

promises_dogeo.html - complicated, and more callback-hell-tastic example, which can be refactored to promises style, which should make the error handling nicer.

Helpful resources:

- [You're missing the point of promises](http://domenic.me/2012/10/14/youre-missing-the-point-of-promises/)
- [q api reference](https://github.com/kriskowal/q/wiki/API-Reference)
- [q promises compared with jquery](https://github.com/kriskowal/q/wiki/Coming-from-jQuery)
- [my talk on them](http://vikki.github.io/presentations/promises/)
- [A talk by someone who actually understands them](http://lanyrd.com/2012/londonjs-16/szwkp/)