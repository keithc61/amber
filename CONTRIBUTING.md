Setup your Amber clone
====

You need at least npm@5 (bundled with node 8) because of its `npm install <local-path>` creating symlinks.
Works in Windows as well, trying junctions and/or true symlinks, so no fear.

Amber repository contains more parts:

1. Amber language itself (in `lang/` directory). This is released.
1. Amber development helpers, project scaffolding and CLI tool (in `sdk/`, `grunt-init-project` and `cli/` subdirectories). They have their own release track.
1. Development files (`index.html`, `Gruntfile.js` and its friends).  Not part of release.

To get your clone, follow this list:

1. Create a fork of the repository on lolg.it (create account first if you don't have one).
1. Clone the fork in a "project" directory where you can create sibling directories for other parts.
Go into cloned amber directory (`<project-path>/amber`).
1. Install the tools: ```npm install -g @ambers/cli```.
1. Run ```npm install``` to install dependencies listed in package.json. Used by development tools. See [here](https://www.npmjs.org/doc/cli/npm-install.html) for more info.
1. Run ```cd lang && npm install && cd ..``` to install dependencies of `lang` component.
1. Run ```cd sdk && npm install && cd ..``` to install dependencies of `sdk` component.
1. Get your copy of Helios IDE into directory `<project-path>/helios`, choosing among using your own fork / using the stock version:
    - ```git clone git@lolg.it:<your username>/helios.git ../helios``` to use your own fork, or
    - ```git clone git@lolg.it:amber/helios.git ../helios``` to use stock version.
1. Install Helios' dependencies: ```cd ../helios && bower install && cd ../amber```.
1. Get your copy of legacy IDE into directory `<project-path>/amber-contrib-legacy`:
  ```git clone git@lolg.it:amber/amber-contrib-legacy.git ../amber-contrib-legacy```.
1. Optionally, get (your fork of) other amber libs you want to develop in parallel in similar manner.
1. Link those libs into amber's dependencies using `npm install ../helios ../amber-contrib-legacy <maybe others> --no-save`.
1. Run ```grunt devel```. Prepares some transient files.
1. Run ```amber serve```. Starts the integrated development server.

Now you should be able to start Amber devlopment page at `http://localhost:4000/` and commit changes you do to disk.

Start Contributing by talking about Amber
=========================================

* Join us on amber-lang chat: https://chat.amber-lang.net.
* Join our [Mailinglist/Google Group](http://groups.google.com/group/amber-lang)
* Follow [@AmberSmalltalk](https://twitter.com/AmberSmalltalk) on Twitter


Filing Issues
=============

If you think Amber is not working as expected, You can start by asking on gitter room, IRC or the Mailinglist.
Please make sure that you have first checked the following guides:

* Getting Started (TBD, if you want to help, contribute to https://lolg.it/amber/amber-documentation.git)
* [Amber FAQ](https://github.com/amber-smalltalk/amber/wiki/FAQ) Old, but something still holds.

If the issue can not be resolved you should file an issue on the respective tracker.

Before reporting an issue, try to reduce the issue to the bare minimum required to reproduce it.
This allows us to track down and fix the issue in an easier and faster way.

Additionally, you should give us enough information to reproduce the issue.
Therefore, include versions of your OS, Amber, Node.js, Grunt, and possibly used libraries as well as sample code.
If you don't list the exact steps required to reproduce the issue we won't be able to fix it.

Afterwards, report the issue on one of the following trackers:

* [Amber Issues](https://lolg.it/amber/amber/issues)
* [Helios IDE Issues](https://lolg.it/amber/helios/issues)
* [Amber Examples Issues](https://lolg.it/amber/amber-examples/issues)
* [Amber Website Issues](https://lolg.it/amber/amber-website/issues)


Developing Amber
================

If you want to get started developing Amber itself there are a few links to get you started

* [The Amber FAQ](https://github.com/amber-smalltalk/amber/wiki/FAQ) contains Answers to commonly arising questions; old
* [The Amber CookBook](https://github.com/amber-smalltalk/amber/wiki/Amber-cookbook) contains recipies about working with Amber and its IDE
* [The Amber Porting Guide](https://github.com/amber-smalltalk/amber/wiki/Porting-code-from-other-Smalltalk-dialects) contains information about porting code from other Smalltalk dialects
* [The Amber JavaScript Guide](https://github.com/amber-smalltalk/amber/wiki/From-smalltalk-to-javascript-and-back) contains information about how Amber and JavaScript are mapped to each other

If you want to get serious with Amber development you should read the [Coding Conventions](https://github.com/amber-smalltalk/amber/wiki/Coding-conventions)
and check if you have all development dependencies installed (as indicated in README):

* Git (to get a clone of the repository, use Git for Windows in Windows)
* Node.js (to run the Amber development server)
* NPM (to install required Node.js packages, in most of setups included with Node.js)
* Bower (to install required client side libraries)
* Grunt-Cli (to compile Amber on the commandline)

Creating a Pull Request
-----------------------

The Amber development model currently revolves around Pull Requests

1. Update to latest Amber master (```git pull```)
2. Develop your feature or bugfix in a local branch (not in ```master```)
3. Create unittest for your feature or bugfix (your feature/fix will be integrated a lot faster if unittests are present)
4. Enhance/fix Amber
5. Run the unittests
6. Commit your changes to disk if all tests are green
7. Try to split your fix into small Git commits if multiple changes are involved (this makes it easier for us to review the changes)
8. If you created / deleted / moved API, update API-CHANGES.txt appropriately and commit.
8. Push the changes to your fork on lolg.it ```git push <your repo> <your branchname>```
9. Submit Pull Request (usually for the Amber master branch)


Compiling Amber with Grunt
--------------------------

Amber uses [Grunt.js](http://gruntjs.com/) as build system since version `0.10.0` (in case of Windows issues check the [Grunt.js on Windows](http://gruntjs.com/frequently-asked-questions#does-grunt-work-on-windows)).

If you created your clone according to the "Setting up your Amber clone", you should run

    grunt

in Amber directory to start building from CLI.
