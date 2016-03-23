# SWAP workshop

This is the code you need for the workshop. Make sure to clone the repo and see that you can get it up and running before
the workshop.

This repo contains three folders:

### oldsite
This is the old site, built using vanilla MVC, Razor, Bootstrap and jQuery. Run it by opening it up in Visual Studio and debug it.
You can reuse the C# code from this project, but you shouldn't use any frontend code.

### boilerplate
`boilerplate` contains just enough things to get you up and running. This folder is where you'll build your implementation.

### facit
Use this if you get stuck and nobody is around to ask for help, or if you just want to get inspiration.

## Getting started

1. Open the `boilerplate` folder
1. Run `SetupIIS.cmd` which creates an IIS site pointed to that folder
1. Run `npmw.cmd start` (which downloads Node and Npm and runs `npm install` and `npm start` to start the dev server)
1. Open the solution `boilerplate.sln` in Visual Studio and build it
1. Surf to `http://localhost:8088`
1. Start hacking!