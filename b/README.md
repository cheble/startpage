# Decaux
### A material style, keyboard friendly and easily customizable startpage.

![Demo Image](https://u.teknik.io/gHzZf.png)

<div align="center">
	<h3><a href="https://decaux.capuno.cat/">Live Demo</a></h3>
</div>

### Usage

|Key|Command|
|:-:|---|
|`h`| Show Help |
|`w` `↑`| Move Up |
|`a` `←`| Move Left |
|`s` `↓`| Move Down |
|`d` `→`| Move Right |
|`Space`| Focus Search |
|`Esc`| Back to Blocks |

### Customization

Colors in lines `12-14` inside `style.css`.

Link blocks are in lines `69-128` inside `index.html`, the syntax for the links is the following:

```html
<td>
	<a href="{URL HERE}" id="{x}">
		<img src="src/{IMAGE HERE}">
		<h3>{NAME HERE}</h3>
		<p>{SUBTEXT HERE}</p>
	</a>
</td>

<!-- Change everything in brackets. -->
```

For the moment, there is only possible to have 8 blocks in 2 lines of 4 blocks, so if you want to add your links, just edit the ones already in there.

To make a new image for the block, the ones I used are 75x75 pixels and 72ppi, and are inside the `src/` folder
