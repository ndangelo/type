---
layout: doc
title: Magaz
categories: docs
platform: Ghost
---

* Name: Magaz
* Description: Magazine and Multipurpose Clean [Ghost](https://ghost.org/) Theme
* Current Version: 1.1.8
* Released: 18 Dec 2016

---

* [Upload to Self Hosted Ghost](#upload-to-self-hosted-ghost)
* [Upload to Ghost.io](#upload-to-ghostio)
* [Static Pages](#static-pages)
* [Navigation](#navigation)
* [Disqus Comments](#disqus-comments)
* [Subscribe Form](#subscribe-form)
* [Google Analytics](#google-analytics)
* [Related Posts](#relatedposts)
* [Social Media Links](#social-media-links)
* [Update favicon](#update-favicon)
* [Copyright Information](#copyright-information)
* [Theme Development](#theme-development)
* [Support](#support)

---

### Upload to Self Hosted Ghost

1. Locate the theme directory within the download files. It can be found at **Theme/magaz**.
2. Login to FTP/SFTP of your blog, or the file browser of your provided hosting service.
3. Navigate to the **/content/themes** directory within your Ghost installation.
4. Upload the **magaz** file found in step one into the remote **/content/themes** directory.
5. Restart your Ghost server. The process for this will change dependent on your provider. If you are unaware how to restart the service please raise a support issue with your host.
6. Login to your Ghost admin panel. This can be found at **yourdomain.com/ghost**.
7. Navigate to the **Settings > General** tab.
8. In the **Theme** drop down, select the newly installed Magaz Theme. Click **Save** to save the theme changes.

Here is another guide that you may find useful.

* [How to Upload and Install a Ghost Theme](https://www.ghostforbeginners.com/how-to-upload-a-theme/)

---

### Upload to Ghost.io

1. Visit [Ghost.org](https://ghost.org/) and log in entering your login credentials.
2. From your Ghost(Pro) dashboard, select the **Settings** (“gear”) icon to the _right_ of the “Write a Post” button.
3. In your blog’s control panel, you can either "drag & drop" magaz theme zip file into the **“Add a Theme”** drop zone, or click on the drag & drop zone to launch the traditional file upload prompt.
4. Upload the theme, and once uploaded, click on the **Save All Blog Settings** button. Your blog will automatically update with the new theme.

---

### Static Pages

In order to create a static page you create a new post, just like you would any other post. Once you have opened up the new post, there is a cog wheel icon next to where it says "Save Draft" or "Update Post" depending on if you have published the post or not. Click on that cog, and check the "Turn this post into a static page" box. This will convert your post to a static page.

![static page](/images/docs/ghost/shared/staticpage.png)

---

### Navigation

You can add, edit, delete and reorder menu links on your Ghost blog, directly from the navigation tool within the blog admin area, located at **/ghost/settings/navigation/**.

![navigation menu](/images/docs/ghost/shared/navigation-edit.png)

To include a static page on your navigation menu, first, type the name of the page as you'd like it to appear on your menu in the label field.

![label field](/images/docs/ghost/shared/label-field.png)

Next, click inside the **URL field** of the menu item. The blog URL will auto-populate with http://yourdomain.com/. You will need to add in the page slug after the final **/**. Once satisfied with your page link, click the blue **Save button** to add the page to the navigation menu.

---

### Disqus Comments

Magaz Theme comes with Disqus comments enabled.

Open `partials/disqus.hbs` file, and change the `aspirethemes-demo` value for the `disqus_shortname` variable to match your Disqus account shortname.

{% highlight js %}
var disqus_shortname = "aspirethemes-demo";
{% endhighlight %}

So, if your Disqus shortname is `exampleone`, the final code above should be

{% highlight js %}
var disqus_shortname = "exampleone";
{% endhighlight %}

That's all you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First, make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide)

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22) if you still have issues.

---

### Subscribe Form

Subscribers can be enabled via a checkbox on the Labs page, in your Ghost admin panel:

![enable subscribers](/images/docs/ghost/shared/subscribers-enable.png)

Once you enabled this feature, the form will appear in two places:

* Footer
* Single post page sidebar widget

You can read more about [Subscribers](http://support.ghost.org/subscribers-beta/)

---

### Google Analytics

To integrate Google Analytics, I would recommend reading [How do I add Google Analytics to my blog?](http://support.ghost.org/add-google-analytics-blog/) by Ghost.

---

### RelatedPosts

Related posts will be visible on the single post page when there are similar posts with similar tags, and will be hidden otherwise.

You will need to enable the Public Api from Ghost admin. Go to `Settings > Labs` and check the *Public Api* mark to enable it.

![enable-public-api](/images/docs/ghost/shared/enable-public-api.png)

---

### Social Media Links

Social media links are placed in different places (files):

* `partials/footer.hbs`
* `partials/header.hbs`

Ghost 0.8.0 supports adding Facebook and Twitter profile urls from the admin panel, go to **Settings > General** and add your URLs, and this will update the Facebook and Twitter URLs in the locations mentioned above, other social media URLs you can add it from the files.

The theme is using [Evil Icons](http://evil-icons.io/), which contains very simple and clean icons. Here you can find a list of the social media icons to use:

**Twitter**

{% highlight html %}
<span data-icon="ei-sc-twitter" data-size="s"></span>
{% endhighlight %}

**Facebook**

{% highlight html %}
<span data-icon="ei-sc-facebook" data-size="s"></span>
{% endhighlight %}

**Instagram**

{% highlight html %}
<span data-icon="ei-sc-instagram" data-size="s"></span>
{% endhighlight %}

**Pinterest**

{% highlight html %}
<span data-icon="ei-sc-pinterest" data-size="s"></span>
{% endhighlight %}

**Vimeo**

{% highlight html %}
<span data-icon="ei-sc-vimeo" data-size="s"></span>
{% endhighlight %}

**Google-plus**

{% highlight html %}
<span data-icon="ei-sc-google-plus" data-size="s"></span>
{% endhighlight %}

**Soundcloud**

{% highlight html %}
<span data-icon="ei-sc-soundcloud" data-size="s"></span>
{% endhighlight %}

**Tumblr**

{% highlight html %}
<span data-icon="ei-sc-tumblr" data-size="s"></span>
{% endhighlight %}

**Youtube**

{% highlight html %}
<span data-icon="ei-sc-youtube" data-size="s"></span>
{% endhighlight %}

---

### Update favicon

You can find the current favicon inside the theme **assets** directory, just replace it with your new favicon, then upload to the server.

![Update favicon](/images/docs/ghost/shared/update-favicon.png)

---

### Copyright Information

You will find copyright information at the bottom of `partials/footer.hbs` file.

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

If you have any questions, I'd be happy to answer them. Please don't hesitate to contact at:

* _Email:_ [aspirethemes@gmail.com](mailto:aspirethemes@gmail.com)
* _Twitter:_ [@aspirethemes](https://twitter.com/aspirethemes)