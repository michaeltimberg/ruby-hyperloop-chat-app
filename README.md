# Chat-App Tutorial
## with Hyperloop.js

I am following [this][1] guide.

I will make a commit after completing each Step, denoted by `<h5>` elements on the guide page.
 
For ease and debugging, I am using [Gulp][2].

## Notes
I ran into trouble when using Gulp to serve my app, because I didn't rename `hyperloop-chatapp.html` to `index.html`.

After tons of research, I finally found my answer [here][3].

The value for the `cwd` key in the second argument of `gulp.watch()` was pointing to the nonexistent `./app` dir.
It is now correctly pointed at `./`.

I never experienced the

>Warning: Failed propType: In component `Nav`
>
>Required prop `login` was not specified Check the render method of `ChatApp`.

warning during my completion of step 6; whose changes can be found in commit, "Step 6 - Talking to Your Parents." 

[1]: http://ruby-hyperloop.io/tutorials/hyperloopjs/chatapp/
[2]: http://gulpjs.com
[3]: https://browsersync.io/docs/options#option-server
