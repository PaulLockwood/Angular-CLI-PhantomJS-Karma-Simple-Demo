# Angular-CLI-PhantomJS-Karma-Simple-Demo

Demo showing Karma running via PhantomJS in an Angular CLI Project.

Simplest possible changes to a Angular CLI project.


```
# PhantomJS is only package the needs to be global
# Today I still install global packages via npm (yarn has had issues with global packages)
npm install -g phantomjs-prebuilt

yarn install

ng test --watch false
```
