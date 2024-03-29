Amber
====

[![Build Status](https://ci.lolg.it/api/badges/amber/amber/status.svg)](https://ci.lolg.it/amber/amber)

Copyright 2011-2015 Nicolas Petton

Copyright 2014-2019 Herbert Vojčík and [Amber contributors](CONTRIBUTORS)

Amber is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.

Try Amber online and learn more on [project page](http://amber-lang.net).

Overview
--------

Amber is written in itself, including the parser and compiler. Amber compiles into efficient JavaScript, mapping one-to-one with the equivalent JavaScript. There is no interpretation at runtime.

Some highlights:

- Amber features an IDE with a Class browser, Workspace, Transcript, a ReferencesBrowser supporting senders/implementors and class references, basic Inspector and even a beginning of a Debugger and a unit TestRunner.
- [Pharo Smalltalk](http://www.pharo-project.org) is considered as the reference implementation.
- Amber is extendable with libraries, installable preferably via `npm`:
    - `@ambers/contrib-web` with a canvas to generate HTML, like [Seaside](http://www.seaside.st), included in a new project by default,
    - `@ambers/silk` with a stream-like wrapping of DOM elements, included in a new project by default,
    - `@ambers/helios` IDE, included in a new project by default,
    - `@ambers/contrib-legacy` with smaller in-page "classic" IDE and some miscellany, included in a new project by default,
    - `@ambers/prof-stef`, containing [Prof Stef](http://amber-lang.net/learn.html) interactive crash course.
    - and others. You can easily write an Amber library yourself.
- Amber can use Javascript libraries; the "classic" IDE as well as Helios are built on [jQuery](http://www.jquery.com)
- You can inline Javascript code and there are many ways to interact between Amber and Javascript


Prerequisities
-------------

Amber cli tool to create new projects and assist with development tasks
is in a [npm](http://npmjs.org) package  `@ambers/cli`.
Amber engine and core library to be used in projects
is in a npm package `@ambers/lang`.

For the installation to work, you need to have installed `node`, `npm` and `git`.
Default `node` installers may install `npm` as well.
To have `git` in Windows, use Git for Windows and select "Run Git from Windows Command Prompt" and "Checkout Windows-style, commit Unix-style" installation options.

For UNIX-based OS (Linux distibutions, FreeBSD, ...) do

    npm config set prefix=~/npm
    export PATH="$PATH:$HOME/npm/bin"
   
to have the installation in a local subdirectory in order to avoid the otherwise necessary ``sudo`` installation of Amber. The export line needs to be added to the ~/.profile file as well so that after a new login the path is set.



Getting Amber and setting up an initial project
-----------------------------------------------

Do this to install Amber

    # Install the CLI tool `@ambers/cli` and supporting tools
    npm install -g grunt-cli grunt-init @ambers/cli


Use ``amber init``  to create a project of your own

    # Initialize your project (directory must be empty)
    cd /path/to/myproject
    amber init

The new project has its own `.gitignore` and is ready to use with git as-is.
Eg. just run `git init` and your Amber project is under version control.

If you want to run Amber in older environments,
you should install additional polyfills (`Promise` polyfill
is included by default) and link them up in `Gruntfile.js`.

Amber officially only runs in ES5-compliant environments.

Start developing in Amber Smalltalk

    # Serve amber on localhost:4000
    amber serve


What this repo contains and what it does not
--------------

It must be noted this repo contains only core functionality of Amber system
as well as accompanying tooling (`sdk`, `grunt-init-project` and `cli`).

The initial project comes with some libraries (`amber/web`, `domite`, `silk` etc.)
included; these libraries are not part of this repo, though. You can find them either in
[Amber organization](https://lolg.it/amber) or, for some of them, in their own pages:
[DOMite](https://lolg.it/herby/domite), [Silk](https://lolg.it/herby/silk).

In case something fails...
--------------

  - Amber hackers can be found on the Rocket.chat instance here: https://chat.amber-lang.net
  - Most of Amber discussion and help happens on the [Google group](http://groups.google.com/group/amber-lang)

  - Report issues with the www.amber-lang.net _website only_ here: https://lolg.it/amber/amber-website/issues.
  - Report issues with the docs.amber-lang.net _website only_ here: https://lolg.it/amber/documentation/issues.
  - Report issues with Amber engine, core library, as well as with `amber` / `amberc` cli tools here: https://lolg.it/amber/amber/issues.
  - Report issues with the Helios IDE here: https://lolg.it/amber/helios/issues.

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for further details.


Developing Amber
--------------

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for further details.
It explains the Amber development setup and how to contribute.


License
-------

Amber is released under the MIT license. All contributions made for inclusion are considered to be under MIT.
