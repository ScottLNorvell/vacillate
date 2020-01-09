# vacillate

See blog post: https://scottlnorvell.com/vacillate

## Install
```sh
npm install vacillate
# - OR -
yarn add vacillate
```

## Command Line
```sh
> npx vacillate cookies cake "ice cream"
cookies
What I really meant was: ice cream
Just kidding: cake
No wait: cookies
Just kidding: ice cream
Actually: cake
What I really meant was: cookies
No wait: cake
Just kidding: ice cream
Actually: cookies
What I really meant was: ice cream
No wait: cake
Actually: cookies
cake! (vacillated 14 times)

I choose: cake
```

## Running tests

```sh
yarn
yarn test
yarn test --watch
```

## Dev mode

When developing you can run:

```
yarn watch
```

This will regenerate the build files each time a source file is changed and serve on http://127.0.0.1:5000.

### Previewing umd build in the browser

You can open `dev/index.html` to try it out.

