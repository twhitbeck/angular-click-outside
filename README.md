angular-click-outside
=====================

A simple angular 1.x directive to execute code when clicking outside of an element

### Get it
`npm install angular-click-outside --save`

### Use it
* Include script in your html
```html
<script src="node_modules/angular-click-outside/angular-click-outside.js"></script>
```

* Add the `tw.directives.clickOutside` module to your module's list of dependencies:

```js
angular.module('app', ['tw.directives.clickOutside'])
```

* Use the `twClickOutside` directive.

```html
<div class="menu" tw-click-outside="hideMenu()">
...
</div>
```

#### Ignoring the event
If you don't want the `twClickOutside` to fire under certain circumstances (e.g. you don't need to hide the menu if it's already hidden), use the `ignoreIf` attribute:

```html
<button ng-click="showMenu()">Show Menu</button>
<div class="menu" tw-click-outside="hideMenu()" ignore-if="menuAlreadyHidden()">
...
</div>
```

Use this to:
* avoid side effects of `hideMenu()`
* avoid cost of `hideMenu()` if it is more expensive to run than `menuAlreadyHidden()`

#### Developing/testing
Use `npm install && npm start` to open the example in your browser with live reloading via `browserSync`
