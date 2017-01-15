---
layout: doc
title: Maxima
categories: docs
platform: WordPress
---

* Name: **Maxima**
* Description: Minimal Blog & Magazine WordPress Theme
* Current Version: 1.0.0
* Released: 13 Jan 2016

---

* [Theme Activation & Import Demo Data (Video)](#theme-activation--import-demo-data-video)
  * [Installation via WordPress Theme Installer](#installation-via-wordpress-theme-installer)
  * [Installation via FTP](#installation-via-ftp)
  * [Import Demo Data](#import-demo-data)
* [Theme Customizer](#theme-customizer)
* [Widgets](#widgets)
* [Menus](#menus)
* [Translation](#translation)
* [Theme Development](#theme-development)
* [Support](#Support)

---

### Theme Activation & Import Demo Data (Video)

This is a queck video showing how to install the theme and import the demo content. For installation steps, you can check the process below.

<script src="//fast.wistia.com/embed/medias/y78esomvvl.jsonp" async></script><script src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_y78esomvvl videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>

---

### Installation via WordPress Theme Installer

Log into your WordPress Dashboard → Appearance → Themes

- Login to your WordPress Dashboard, go to **Appearance → Themes**.
- At the top, click **Add New**, then click **Upload Theme**.
- Choose the **maxima.zip** zip file you will find within the whole package that you downloaded from Themforest.
- Click **Install Now**.
- The last step is to click activate once all the files are correctly uploaded.

![Upload Theme](/images/docs/wordpress/maxima/upload-theme.png)

![Choose Theme](/images/docs/wordpress/maxima/choose-theme-file.png)

![Activate Theme](/images/docs/wordpress/maxima/activate-theme.png)

---

### Installation via FTP

1. Login to the SFTP/FTP account for your site.
2. Navigate the to the WordPress directory, and follow the path `wp-content/themes.`
3. Extract `maxima.zip` file (it’s in the zip file you downloaded) and upload the maxima folder.
4. Once it’s uploaded, go to your WordPress Admin, browse to `Appearance > Themes.`
5. Click the `Activate` link.

---

### Import Demo Data

The theme comes with the demo content that you can import with one click button.

First, you will need to install the [One Click Demo Import](https://wordpress.org/plugins/one-click-demo-import/) then activate it.

Second, go to `Appearance > Import Demo Data` and only click the `Import Demo Data` button, and It will take a few seconds then you are done and have demo content.

![Import Demo Data](/images/docs/wordpress/maxima/demo-import.png)

---

### Theme Customizer

WordPress customizer is a tool which allows you to edit all the style options from a theme and visualize changes live, as you edit them. To open it go to Appearance > Customize.

![Theme Customizer](/images/docs/wordpress/maxima/customizer.png)

#### Footer Copyright

Maxima has an option to edit the footer copy right options, from the customizer window, choose `Site Identity > Footer Copyright` to easily update the copyright text.

---

### Widgets

Maxima theme includes multiple widgets areas.

Widgets can be added to these areas by navigating to "Appearance > Widgets".

The footer section has four registered widget sections and the Sidebar (Off canvas) area has widgets support

![Widgets](/images/docs/wordpress/maxima/widgets.png)

---

### Menus

Maxima theme comes with a custom social media icons menu, you can create and manage by navigating to `Appearance > Menus`.

You can create a normal menu with a custom link to the social media site, then you can assign the menu to the `Social Icons (Footer)` location in the Menu Settings section.

![social-media-menu](/images/docs/wordpress/maxima/social-menu.png)

The following are the social media sites and services where you can find an icon support. The theme is using [genericons](http://genericons.com/) icons.

<div class="o-grid">
  <div class="o-grid__col o-grid__col--1-3">
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
  <div class="o-grid__col o-grid__col--1-3">
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
  <div class="o-grid__col o-grid__col--1-3">
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

---

### Translation

Maxima theme is full ready to be translated into other languages and could be easily translated with [poedit.net](https://poedit.net/) application.

The theme contains the main translation file `maxima.pot` inside the languages directory which will be used by poedit application.

Here are simple steps:

1. Install poedit and open it
2. Once the app is opened click Create new translation
3. Choose the `maxima.pot` file inside the theme `maxima/language` directory
4. Once the translation is done, save the file according to your language code. Find a list of language codes at [WordPress in your Language](https://make.wordpress.org/polyglots/teams/). As an example, the language code for English (UK) is en_GB, so you will end up with two new files: en_GB.po and then en_GB.mo
5. When that’s done, simply upload the files to `maxima/language` folder using FTP

---

### Theme Development

If you are a developer and need to do customization work, the theme is using [Gulp](https://github.com/gulpjs/gulp) to compile [Sass](http://sass-lang.com/) and JavaScript. This improves the development flow and making it much faster.

First, make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed, then run the-the following commands in the theme root directory to install *npm* dependencies.

{% highlight shell %}
npm install
{% endhighlight %}

To start Gulp, run:

{% highlight shell %}
gulp
{% endhighlight %}

This will compile Sass and JavaScript files, and start watching changes as you edit files.

---

### Support

If you have any questions, I'd be happy to answer them.

* _Email:_ [aspirethemes@gmail.com](mailto:aspirethemes@gmail.com)
* _Twitter:_ [@aspirethemes](https://twitter.com/aspirethemes)