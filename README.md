# Split html to letters for animation
Takes this:
```html
<h2>Some <strong>bold</strong> text<br> with<i>Tags</i></h2>
```
Invoked like this:
```js
import Splitter from 'split-html-to-chars';

Splitter(html,'<span class="letter">$</span>');
```
Will return this:
```html
<h2 class="js-splitme">
	<span class="letter">S</span>
	<span class="letter">o</span>
	<span class="letter">m</span>
	<span class="letter">e</span>
	<span class="letter"> </span>
	<strong>
		<span class="letter">b</span>
		<span class="letter">o</span>
		<span class="letter">l</span>
		<span class="letter">d</span>
	</strong>
	<span class="letter"> </span>
	<span class="letter">t</span>
	<span class="letter">e</span>
	<span class="letter">x</span>
	<span class="letter">t</span>
    <br>
	<span class="letter">w</span>
	<span class="letter">i</span>
	<span class="letter">t</span>
	<span class="letter">h</span>
	<i>
		<span class="letter">T</span>
		<span class="letter">a</span>
		<span class="letter">g</span>
		<span class="letter">s</span>
	</i>
</h2>
```