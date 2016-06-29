---
layout: doc
title: East - Jekyll
categories: docs
type: jekyll
---

* Name: East
* Description: Minimal and Clean Blog Jekyll Theme
* Current Version: 1.0.0
* Released: 25 April 2016

---

## Table of Contents

1. [Configurations](#configurations)
2. [Deployment](#deployment)
3. [Static Pages](#static-pages)
4. [Navigation](#navigation)
5. [Disqus Comments](#disqus-comments)
6. [MailChimp](#mailchimp)
7. [Google Analytics](#google-analytics)
8. [Social Media Links](#social-media-links)
9. [Update favicon](#update-favicon)
10. [Support](#support)

## Configurations

East theme comes with different customizations in the `_config.yml` file:

```
# Site settings
title: East
email: your-email@domain.com
description: Minimal and Clean Blog Jekyll Theme
baseurl: '' # the subpath of your site, e.g. /blog
url: 'http://aspirethemes.com' # the base hostname & protocol for your site
twitter_username: aspirethemes
github_username:  aspirethemes
instagram_username: aspirethemes

# Build settings
markdown: kramdown
gems: [jekyll-paginate]
permalink: pretty
include: [_pages]
exclude: ['Gemfile', 'Gemfile.lock']

# Pagination
paginate: 12

# Tags
tag_page_layout: tag_page
tag_page_dir: tag
tag_permalink_style: pretty

authors:
  john:
    name: John Adam
    display_name: John Adam
    bio: Adam has over 5 years of experience as a web writer, and also a photographer.
    gravatar: http://east.aspirethemes.com/content/images/2016/01/smiles-man.jpg
    email: john@aspirethemes.com
    web: http://aspirethemes.com
    twitter: aspirethemes
    github: aspirethemes
```

---

## Deployment

To install locally, more to the theme root and run `bundle install` to install the dependencies, then run `jekyll serve` to start the Jekyll server.

I would recommend checking the [Deployment methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

East is [configured](https://www.aerobatic.com/docs/automated-builds#jekyll) to work with [Aerobatic](http://aerobatic.com/)

---

### Posts

To create a new post, you can create a new markdown file inside the `_posts` directory, following the [recommended file structure](https://jekyllrb.com/docs/posts/#creating-post-files), these are the page configuration you can add.

The following is an example post file.

```
---
layout: post
title: Welcome to Jekyll!
featured: true
author: john
tags: [python, ruby, java]
image: '/images/posts/image.jpeg'
---
```

You can set the author, featured or not, tags, and the post image

The `featured` key is to mark the post as a featured post, this will add a simple star icon (☆) to the post created.

To keep things more organized, add post images to **/images/pages** directory, and add add page images to **/images/pages** directory.

To create a draft post, create your draft file under the **_drafts** directory, and you can find more information at [Working with drafts](http://jekyllrb.com/docs/drafts/)

### Pages

To create a new page, just create a new markdown file inside the `_pages` directory, and these are the page configuration you can add.

The following is the `about.md` file that you can find as an example included in the theme.

```
---
layout: page
title: About
permalink: /about
image: '/images/pages/about.jpeg'
---
```

Things you can change are: `title`, `permalink`, and `image` path.

---

### Navigation

The navigation on the sidebar will include all the links to the pages you have created.

---

### Disqus Comments

East Theme comes with Disqus comments enabled.

Open `_includes/disqus.html` file, and change the `aspirethemes` value on line 15 with your Disqus account shortname.

```
s.src = '//aspirethemes.disqus.com/embed.js';
```

So, if your Disqus shortname is `exampleone`, the final code above should be

```
s.src = '//exampleone.disqus.com/embed.js';
```

That's all you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First, make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide)

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22) if you still have issues.

---

### MailChimp

Steps to integrate MailChimp newsletter subscription form:

* Create a mailing list from your MailChimp account, fill all the fields required and save it.
* From the list page, select **Signup forms**, then select **Embedded forms**.
* You may want to change or edit the form fields, or customize the form in general, after you have done and everything is ok, you will be provided by HTML code, what we need to integrate with East theme is the code in the action element, like the highlighted code in the image blow.
* Copy that code and paste it in the form element in `_includes/subscribe-form.html` where you can find the newsletter form.
* Save your files and upload your theme.

![mailchimp-code](/images/docs/jekyll/east/mailchimp-code.png)

---

### Google Analytics

To integrate Google Analytics, open `_includes/analytics.html` and add your Google Analytics code.

### Social Media Links

Social media links are placed in:

- `_includes/sidebar.html`

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

---

### Update favicon

You can find the current favicon (favicon.ico) inside the theme root directory, just replace it with your new favicon.

---

### Copyright Information

You will find copyright information at the bottom of `_includes/sidebar.html` file.

---

## Support

If you have any questions, I'd be happy to answer them. Please don't hesitate to contact at:

* _Email:_ [aspirethemes@gmail.com](mailto:aspirethemes@gmail.com)
* _Twitter:_ [@aspirethemes](https://twitter.com/aspirethemes)