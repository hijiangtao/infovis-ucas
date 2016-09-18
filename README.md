# infovis-ucas

Repository Programming Assignments for Information Visualization Course on University of Chinese  Academy of Sciences.

## Introduction

In order to utilize GitHub Pages services, this is almost a static website repository for infovis-ucas course assigments, you can access pages by url with `https://iscas-vis.github.io/infovis-ucas/views/CUSTOMIZE_URL`, among which **CUSTOMIZE_URL** should be an existing file path in `views` folder, such as `TA/d3-tutorial-bar-chart.html`. However, you can also set up a http server to host this repo locally if some content in your page needs to connect with local server, but it doesn't work in Github Pages. A light http server is recommended and will be introduced in **[Install](#Install)** chapter.

## Before Install

You can access the pages via <https://iscas-vis.github.io/infovis-ucas/> directly, and you need to confirm the **Node** environment before you start the Installation steps.
Some simple install commands to get node for some platforms shows below:

```
# OSX
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

# Arch Linux
pacman -S nodejs npm

# Debian and Ubuntu based Linux distributions
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
# Optional: install build tools
sudo apt-get install -y build-essential
```

You can get the complete guidance from [here](https://nodejs.org/en/download/package-manager/#osx). You can also use recommended Node version management such as [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) to set up the node environment. Once you complete it, you can install immediately.

## Install

[Fork](https://github.com/ISCAS-VIS/infovis-ucas#fork-destination-box) your own copy of ISCAS-VIS/infovis-ucas to your account, and git clone it from github (suppose your name is *ISCAS-VIS*):

```
git clone git@github.com:ISCAS-VIS/infovis-ucas.git
```

Enter the folder and install dependencies:

```
npm install
```

After that, you can start the server via command:

```
npm start
```

The command start [http-server](https://github.com/indexzero/http-server) locally, now you can visit `http://localhost:8080` to view your server, the default page should be *index.html* in the root path, you can change the server path by following command instead of `npm start`:

```
http-server [path] [options]
```

`[path]` defaults to `./public` if the folder exists, and `./` otherwise. However, you need to confirm that you already have http-server installed globally before run the command above, the global install command is:

```
npm install http-server -g
```

After include your own codes into the repository, you can open a pull request to `develop` branch. You can open issues to discuss about your ideas about the repository with us, and contribute your visualization resources to our [WIKI](https://github.com/ISCAS-VIS/infovis-ucas/wiki).

## Notifications

* Public libraries are stored in `/public` folder, such as jQuery, Bootstrap and Vue, you can directly include them in your html file or use their offical CDN paths, in order to control the total repository size.
* Please follow Github Pages Basics](https://help.github.com/categories/github-pages-basics/) to organize your codes, in order to make it run nicely via github pages service.

## License

[Apache-2.0](https://github.com/ISCAS-VIS/infovis-ucas/blob/master/LICENSE)