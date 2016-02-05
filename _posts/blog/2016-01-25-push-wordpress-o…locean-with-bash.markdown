---
layout: post
title:  Push WordPress and Ghost themes to DigitalOcean with bash script
categories: post
---

Today I have discovered a very productive way to push a theme to DigitalOcean with a simple command added to a bash file, all of theses commands I was doing one by one and it may require loging to WordPress to activate or upload a theme, and the same case with Ghost. But I have searched on how I can automate the creation of pushing a theme to a remote server, then we can do anything we do on the server, for example we can restart the Ghost server so the new changes will take affect, and so on.

This is the script I did to push a WordPress theme from local machine to a remote server

<pre>
#!/bin/bash

IP_ADDRESS='104.236.15.3'

cd /Users/ahmadajmi/www/ghost/content/themes/

zip -r aspire.zip aspire -x *node_modules* *git* *.DS_Store*

echo '===>> Zipped'

scp aspire.zip root@$IP_ADDRESS:/var/www/ghost/content/themes/

echo '===>> Pushed'

ssh -t -t root@$IP_ADDRESS << EOT

cd /var/www/ghost/content/themes/

unzip -o aspire.zip

echo '===>> Un Zipped'

sudo service ghost restart

echo '===>> Ghost Restarted'

exit 1

EOT
</pre>

<a href="https://gist.github.com/ahmadajmi/2a15e1ed8ea5e984d437" target="_blank">Check the script on GitHub</a>

<strong>For Ghost</strong>

<pre>
#!/bin/bash

IP_ADDRESS='104.23.15.33'

cd /Users/ahmadajmi/www/ghost/content/themes/

zip -r theme_name.zip theme_name -x *node_modules* *git* *.DS_Store*

echo '===>> Zipped'

scp theme_name.zip root@$IP_ADDRESS:/var/www/ghost/content/themes/

echo '===>> Pushed'

ssh -t -t root@$IP_ADDRESS << EOT

cd /var/www/ghost/content/themes/

unzip -o theme_name.zip

echo '===>> Un Zipped'

sudo service ghost restart

echo '===>> Ghost Restarted'

exit 1

EOT
</pre>

<a href="https://gist.github.com/ahmadajmi/4700819ad2707fbe0813" target="_blank">Check the script on GitHub</a>

I hope you find it useful.