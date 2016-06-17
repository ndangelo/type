---
layout: post
title: Aspire - Ghost
date: 8 June 16
categories: docs
type: ghost
comments: false
---

* * *

1. [Theme Information](#theme-information)
2. [Upload the Theme](#upload-the-theme)
  - [Upload to Self Hosted Ghost](#upload-to-self-hosted-ghost)
  - [Upload to Ghost.io](#upload-to-ghostio)
3. [Theme Features](#theme-features)
  - [Static Pages](#static-pages)
  - [Navigation](#navigation)
  - [Disqus Comments](#disqus-comments)
  - [Twitter](#twitter)
  - [Instagram](#instagram)
  - [Related Posts](#relatedposts)
  - [Google Analytics](#google-analytics)
  - [MailChimp](#mailchimp)
  - [Social Media Links](#social-media-links)
  - [Update favicon](#update-favicon)
  - [Copyright Information](#copyright-information)
  - [Theme Development](#theme-development)
4. [Support](#support)

* * *

## Theme Information

* Name: Aspire
* Description: Clean News & Magazine Ghost Theme [Ghost](https://ghost.org/) theme
* Current Version: 1.2.7
* Released: 17/June/2016

* * *

## Upload the Theme

### Upload to Self Hosted Ghost

1. Locate the theme directory within the download files. It can be found at **Theme/aspire**.
2. Login to FTP/SFTP of your blog, or the file browser of your provided hosting service.
3. Navigate to the **/content/themes** directory within your Ghost installation.
4. Upload the **aspire** file found in step one into the remote **/content/themes** directory.
5. Restart your Ghost server. The process for this will change dependent on your provider. If you are unaware how to restart the service please raise a support issue with your host.
6. Login to your Ghost admin panel. This can be found at **yourdomain.com/ghost**.
7. Navigate to the **Settings > General** tab.
8. In the **Theme** drop down, select the newly installed Aspire Theme. Click **Save** to save the theme changes.

Here is another guide that you may find useful.

* [How to Upload and Install a Ghost Theme](https://www.ghostforbeginners.com/how-to-upload-a-theme/)

* * *

### Upload to Ghost.io

1. Visit [Ghost.org](https://ghost.org/) and log in enter your login credentials.
2. From your Ghost(Pro) dashboard, select the **Settings** (“gear”) icon to the _right_ of the “Write a Post” button.
3. In your blog’s control panel, you can either "drag & drop" Aspire theme zip file into the **“Add a Theme”** drop zone, or click on the drag & drop zone to launch the traditional file upload prompt.
4. Upload the theme, and once uploaded, click on the **Save All Blog Settings** button. Your blog will automatically update with the new theme.

* * *

## Theme Features

### Static Pages

In order to create a static page you create a new post, just like you would any other post. Once you have opened up the new post, there is a cog wheel icon next to where it says "Save Draft" or "Update Post" depending on if you have published the post or not. Click on that cog, and check the "Turn this post into a static page" box. This will convert your post to a static page.

![static page](/images/docs/ghost/aspire/staticpage.png)

* * *

### Navigation

You can add, edit, delete and reorder menu links on your Ghost blog, directly from the navigation tool within the blog admin area, located at **/ghost/settings/navigation/**.

![navigation menu](/images/docs/ghost/aspire/navigation-edit.png)

To include a static page on your navigation menu, first type the name of the page as you'd like it to appear on your menu in the label field.

![label field](/images/docs/ghost/aspire/label-field.png)

Next, click inside the **URL field** of the menu item. The blog URL will auto-populate with http://yourdomain.com/. You will need to add in the page slug after the final **/**. Once satisfied with your page link, click the blue **Save button** to add the page to the navigation menu.

* * *

### Disqus Comments

Aspire Theme comes with Disqus comments enabled.

Open `partials/disqus.hbs` file, and change the `aspirethemes` value for the disqus_shortname variable to match your Disqus account shortname.

```
var disqus_shortname = "aspirethemes";
```

So, if your Disqus shortname is `exampleone`, the final code above should be

```
var disqus_shortname = "exampleone";
```

That's all what you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide)

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22) if you still have issues.

* * *

### Twitter

To setup the Twitter feed:

- Go to your [Twitter](https://twitter.com/) settings page.
- Go to "Widgets" on the left side.
- Create a new widget and customize it as your requirements.
- When you create a widget, Twitter will show you a box containing source code, from this code you will see a long number like: `678277339646664704`.
- Just copy and paste it in `assets/js/script.js` file, in the "Twitter widget" section for `twitterWidgetID` variable with it.

* * *

### Instagram

To generate a new Instagram feed for your account, please visit [Instansive](http://instansive.com/).

Customize the widget based on a username or hashtag, then you will get a code for the widget, open `partials/instagram.hbs` file and paste the code. That's it.

* * *

### RelatedPosts

Related posts will be visible on the single post page when there are similar posts with similar tags, and will be hidden otherwise.

* * *

### Google Analytics

To integrate Google Analytics, I would recommend reading [How do I add Google Analytics to my blog?](http://support.ghost.org/add-google-analytics-blog/) by Ghost.

* * *

### MailChimp

Steps to integrate MailChimp newsletter subscription form:

- Create a mailing list from your MailChimp account, fill all the fields required and save it.
- From the list page, select **Signup forms**, then select **Embeded forms**.
- You may want to change or edit the form fields, or customize the form in general, after you have done and everything is ok, you will be provided by HTML code, what we need to integrate with Aspire theme is the code in the action element, like the highlighted code in the image blow.
- Copy that code and paste it in the form element in the two places in the theme, one in the `partials/footer.hbs`, and the other in `partials/sidebar.hbs`, where you can find the newsletter form.
- Save your files and upload your theme.

![mailchimp-code](/images/docs/ghost/aspire/mailchimp-code.png)

#### Disable MailChimp

If you don't want to use the MailChimp news-letter feature, you can hide the subscription forms from two files:

- `partials/footer.hbs` (line 51 to 63)
- `partials/sidebar.hbs` (line 9 to 18)

You can delete or comment these lines, then upload the files to the server.

* * *

### Social Media Links

Social media links are placed in different files:

- `partials/footer.hbs`
- `partials/header.hbs`
- `partials/sidebar.hbs`

The theme is using [Evil Icons](http://evil-icons.io/), which contains very simple and clean icons. Here you can find a list of the social media icons to use:

**Twitter:**

```html
<span data-icon="ei-sc-twitter" data-size="s"></span>
```

**Facebook:**

```html
<span data-icon="ei-sc-facebook" data-size="s"></span>
```

**Instagram:**

```html
<span data-icon="ei-sc-instagram" data-size="s"></span>
```

**Pinterest:**

```html
<span data-icon="ei-sc-pinterest" data-size="s"></span>
```

**Vimeo:**

```html
<span data-icon="ei-sc-vimeo" data-size="s"></span>
```

**Google-plus:**

```html
<span data-icon="ei-sc-google-plus" data-size="s"></span>
```

**Soundcloud:**

```html
<span data-icon="ei-sc-soundcloud" data-size="s"></span>
```

**Tumblr:**

```html
<span data-icon="ei-sc-tumblr" data-size="s"></span>
```

**Youtube:**

```html
<span data-icon="ei-sc-youtube" data-size="s"></span>
```

* * *

### Update favicon

You can find the current favicon inside the theme **assets** directory, just replace it with your new favicon, then upload to the server.

![Update favicon](/images/docs/ghost/aspire/update-favicon.png)

* * *

### Copyright Information

You will find copyright information at the bottom of `partials/footer.hbs` file.

* * *

### Theme Development

If you are a developer and need to do a customization work, the theme is using [Gulp](https://github.com/gulpjs/gulp) to compile [Sass](http://sass-lang.com/) and JavaScript. This improve the development flow, and making it much faster.

First make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed, then run the the following commands in the theme root directory to install npm dependencies.

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

If you have any questions, I'd be happy to answer them. Please don't hesitate to contact at:

* _Email:_ [aspirethemes@gmail.com](mailto:aspirethemes@gmail.com)
* _Twitter:_ [@aspirethemes](https://twitter.com/aspirethemes)

* * *