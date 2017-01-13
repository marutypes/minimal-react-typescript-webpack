## React / Typescript / Webpack Minimal Boilerplate
This boilerplate is meant to be the smallest possible boilerplate for using react with typescript and webpack. It's not really meant to be a production ready application framework or anything. I just wanted a quick thing to use to let me hack on stuff with this stack.

It uses live-server for auto reloading, and only includes the core react libs. If you want to use redux and stuff like that add them or whatever.

If you want to have your app be universal, great! It's actually like, pretty easy to do. Maybe I'll make a version of this that does it, but it's sort of against the mentality of this one.

## A word on Editors
I'd suggest [VSCode](https://code.visualstudio.com/), it's hands down the best of the bunch of sublime-esque editors for typescript autocompletion. It also has all the hotkeys you know and love from sublime / atom / brackets / whatever. VIM people, I dunno. Aren't you programming drone armies anyway?

## Commands
Ok so, like, use [yarn](https://yarnpkg.com) instead of npm. It's better. It's also easier to use. Just do it. Once you do that you can use these commands to do cool stuff. They're all defined in `package.json` so you can see how they work there.

- `yarn run build`: outputs your bundle
- `yarn run build:watch`: output your bundle, watch for changes
- `yarn run server`: starts lite-server
- `yarn run start`: runs `build:watch` and `server` simultaneously, with output from both... this is the one you use for happy development times.

If you want to use npm(😞) you can just substitute `yarn run` for `npm run` in all the above commands. But seriously, use yarn. It's like exactly the same except faster and less error prone defaults.

## License
Nobody likes when a boilerplate has a license file they need to keep around. This project uses the [Whatever The Fuck You Want Public License](http://wtfpl.com). Just like, do whatever. I don't care. Delete it if you want, or not.
