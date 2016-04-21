---
layout: post
title:  Aspire - WordPress
categories: docs
type: wordpress
comments: false
---

## Table of Contents

1. [Theme Information](#theme-information)
2. [Theme Activation & Installation](#theme-activation--installation)
3. [Theme Customizer](#theme-customizer)
4. [Widgets](#widgets)
5. [Menus](#menus)
6. [Translation](#translation)
7. [Theme Development](#theme-development)
8. [Support](#support)

* * *

## Theme Information

* Name: **Aspire** - WordPress Theme
* Description: Clean News & Magazine [WordPress](http://www.wordpress.org/) theme
* Current Version: 1.2.1
* Released: 16 April 2016

* * *

## Theme Activation & Installation

Locate the theme directory within the download files. It can be found at **Theme/aspire.zip**

Login to your WordPress website, go to **Appearance/Themes**, click **Add New**, then click **Upload Theme** to upload the Aspire theme

![Theme Activation](/images/docs/wordpress/aspire/upload-theme.png)

Upload **aspire.zip**, then click **Install Now**

![Theme Activation](/images/docs/wordpress/aspire/choose-theme-file.png)

Then click **Activate** to activate the Aspire theme.

![Theme Activation](/images/docs/wordpress/aspire/activate-theme.png)

### Installation via FTP

1. Login to the SFTP/FTP account for your site. You can also use any file explorer with upload capability, if your host provides one.
2. Navigate the to the WordPress directory, and follow the path **wp-content/themes**.
3. Upload the **aspire** (Unzipped) directory found in the downloaded Theme folder into the directory above.
4. Login to the admin panel of your WordPress site, which will be found at **yoursite.com/wp-admin** by default.
5. Once the theme upload has completed, navigate to the **Appearance -> Themes** section in the admin panel and activate the theme.

* * *

## Theme Customizer

WordPress customizer is a tool which allows you to edit all the style options from a theme and visualize changes live, as you edit them. To open it go to Appearance > Customize.

![Theme Customizer](/images/docs/wordpress/aspire/customizer.png)

#### 1\. Logo

From the customizer window, choose **Theme Options > Header** to upload you custom logo

#### 2\. Header Search Icon

You can hide or show the header search icon as:

From the customizer window, choose **Theme Options > Header** and then **Hide Search Icon**

#### 3\. Footer Copyright

From the customizer window, choose **Theme Options > Footer** to easily update the copyright text

* * *

## Widgets

Aspire theme includes multiple widgets areas.

Widgets can be added to these areas by navigating to "Appearance > Widgets".

![Widgets](/images/docs/wordpress/aspire/widgets.png)

The footer section have four registered widget sections you can drag widgets in.

![footer-widgets](/images/docs/wordpress/aspire/footer-widgets.png)

Aspire comes with 3 new custom widgets which are:

#### 1\. Recent Posts

The Recent Posts widget will show the latest posts with images.

![recent-posts-widget](/images/docs/wordpress/aspire/recent-posts.png)

To add this widget, drag the Sidebar recent posts widget to the sidebar section, then you can customize the widget title, how many posts to show, and the option to show the posts date or not.

![recent-posts-widget](/images/docs/wordpress/aspire/recent-posts-widget.png)

* * *

#### 2\. Twitter Feed

The Twitter Feed widget will show the latest tweets from your twitter account and a button to your Twitter account.

In order to activate the Twitter widget, we need to do some steps:

* Go to your [Twitter](https://twitter.com/) settings page.
* Go to "Widgets" on the left side.
* Create a new widget and customize it as your requirments.
* When you create a widget, Twitter will show you a box containing souce code, from this code you will see a long number like: `678277339646664704`.
* Just copy and paste it in the Twitter Feed widget as the below screenshot plus your Twitter username

![twitter-widget](/images/docs/wordpress/aspire/twitter-widget.png)

* * *

#### 3\. Ads Widget

The advertise widget enables you to add a sidebar add widget, simply provide the image link and the destination link.s

![ads-widget](/images/docs/wordpress/aspire/ads-widget.png)

* * *

## Menus

Aspire theme supports two custom menus:

* Primary Menu
* Social Menu

![menus](/images/docs/wordpress/aspire/menus.png)

You can create and manage these menus by navigating to Appearance > Menus.

#### Primary Menu

To create the header main navigation, create a WordPress normal menu. The [WordPress Menu User Guide](https://codex.wordpress.org/WordPress_Menu_User_Guide) will describe how to create a menu, add menu items, create multi-level menu items, and more. Then you can assign the menus you just created to the Primary Menu location in the Menu Settings section

![menu-settings](/images/docs/wordpress/aspire/menu-settings.png)

#### Social Menu

You can create a normal menu with custom link to the social media site. Then you can assign the menu to the Social Menu location in the Menu Settings section.

![social-media-menu](/images/docs/wordpress/aspire/social-media-menu.png)

The following are the social media sites and services where you can find an icon support. The theme is using [genericons](http://genericons.com/) icons.

<div class="row">
  <div class="column small-4">
    <ul>
      <li>Twitter</li>
      <li>CodePen</li>
      <li>Digg</li>
      <li>Dribbble</li>
      <li>Dropbox</li>
      <li>Email</li>
      <li>Facebook</li>
      <li>Foursquare</li>
    </ul>
  </div>
  <div class="column small-4">
    <ul>
      <li>GitHub</li>
      <li>Google Plus</li>
      <li>Instagram</li>
      <li>LinkedIn</li>
      <li>Path</li>
      <li>Pinterest</li>
      <li>Polldaddy</li>
      <li>Reddit</li>
    </ul>
  </div>
  <div class="column small-4">
    <ul>
      <li>RSS</li>
      <li>StumbleUpon</li>
      <li>Tumblr</li>
      <li>Twitch</li>
      <li>Twitter</li>
      <li>Vimeo</li>
      <li>Vine</li>
      <li>WordPress</li>
    </ul>
  </div>
</div>

* * *

### Translation

Magaz theme is full ready to be translated into other languages and could be easily translated with [poedit.net](https://poedit.net/) application.

The theme contains the main translation file aspire.pot inside the language directory which will be used by poedit application.

**Here are a simple steps:**

1. Install poedit and open it
2. Once the app is opened click Create new translation
3. Choose the **aspire.pot** file inside the theme **aspire/language** directory
4. Once translation is done, save the file according to your language code. Find a list of language codes at [WordPress in your Language](https://make.wordpress.org/polyglots/teams/). As an example, the language code for English (UK) is en_GB, so you will end up with two new files: en_GB.po and then en_GB.mo
5. When that’s done, simply upload the files to **aspire/language** folder using FTP

* * *

## Theme Development

If you are a developer and need to work with the theme Sass and Compiled JavaScript files, Aspire is using [Gulp](https://github.com/gulpjs/gulp) to compile [Sass](http://sass-lang.com/) and JavaScript code. This improve the development flow, and making it much faster.

First make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed then run the the following commands in the Aspire theme directory to install npm dependencies.

```
npm install
```

To start Gulp, run:

```
gulp
```

This will compile Sass and JavaScript files, and start watching changes as you edit files.

* * *

## Support

I tried to include all the information needed to install and customize the theme. If you have any question, please don't hesitate to contact at:

* _Email:_ [aspirethemes@gmail.com](mailto:aspirethemes@gmail.com)
* _Twitter:_ [@aspirethemes](https://twitter.com/aspirethemes)

* * *