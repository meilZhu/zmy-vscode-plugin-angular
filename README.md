# VS Code Angular Files

This extension allows **quickly scaffold angular 2 file templates** in VS Code project.

> Inspired by angular-cli (https://github.com/angular/angular-cli)

![](https://user-images.githubusercontent.com/1618071/38100803-0bb64a90-3387-11e8-80c9-b5c5883bfb38.gif)

## Changelog

### 0.0.3
You can now leverage angular-cli resource generation options without remembering their names, while keeping things simple and fast!

* `"my-component -o"` - Use "-o" flag to specify which options to override
* `"my-component --inline-style -t"` - Specify resource generation options without invoking options window
* `"my-component --inline-style --prefix dsdds -o"` - Use both modes together

![](https://user-images.githubusercontent.com/1618071/42040409-3706b35c-7af8-11e8-971b-5bc2bfddb9c3.gif)

![](https://user-images.githubusercontent.com/1618071/42040410-37308272-7af8-11e8-89c7-dc239179b4a4.gif)

![](https://user-images.githubusercontent.com/1618071/41873503-cfe04250-78cd-11e8-8828-0073e219c4cc.jpg)

Angular Files will automatically scan you angular.json to determine which default options you have already set and will let you to override them while displaying the current values

### 0.0.2
* Added configuration to hide some menu names, thanks to roknow for contribution!
```json
  "dt.menu.class": false,
  "dt.menu.component": true,
  "dt.menu.directive": true,
  "dt.menu.enum": false,
  "dt.menu.interface": false,
  "dt.menu.module": false,
  "dt.menu.pipe": true,
  "dt.menu.route": false,
  "dt.menu.service": true
```

### 0.0.1

* **angular-cli** removed due to slowness
* **app.module** added automatic import of dependencies 


## Features

Right click on a file or a folder in your current project. 
You can find multiple options been added to the context menu:

Menu Options  |
---           | 
New Component |
New Directive | 
New Pipe      |
New Service   | 
New Module    |

Menu Options  |
---           | 
New Class     | 
New Interface |
New Enum      | 

** Override default configuration like app prefix and style:
** Create a angular-cli.json (can be used without angular-cli):

```json
{
   "apps":[
      {
         "root":"src",
         "prefix":"app"
      }
   ],
   "defaults":{
      "styleExt":"css"
   }
}
```

**The naming of the files as well as the (boilerplate) snippets are based on the [official Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)**

## Installation

1. Install Visual Studio Code 1.5.0 or higher
2. Launch Code
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Type `angular files` and press enter
6. Reload Visual Studio Code

# Disclaimer

**Important:** This extension due to the nature of it's purpose will create
files on your hard drive and if necessary create the respective folder structure.
While it should not override any files during this process, I'm not giving any guarantees
or take any responsibility in case of lost data. 

# License

MIT
