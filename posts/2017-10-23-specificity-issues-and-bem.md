---
title: "BEM CSS meets a link color change"
date: "2017-10-23"
excerpt: "A cautionary tale."
---

Recently at work we had an issue pop up where in some cases it was difficult (impossible without hovering) to distinguish between text that was a link and text that was bold. I raised this as an accessibility/usability issue and we discussed a bunch of options, which eventually turned to us deciding to change the default link styling to be a dark teal with an underline.

Changing something as basic as a link style can be pretty scary in CSS. Links are used all over a website -- call to action buttons, text links, navigation links, footer links, etc. Just changing the `a` tag had a lot of implications across the entire site.

So it ends up being super tempting to be like... well, this issue looks to only be in the body content. All of the HTML content blocks in the CMS get a class of `.htmlcontentblock` so let's just style all links in there.

**Don't do it!**

The website in question was built with BEM CSS principles in mind, which means that pretty much everything has a really low specificity. When you add a rule like `.htmlcontentblock a`, it's going to have much further implications than it might seem.

I was consulted as a lead dev and asked my opinion on what to do, which was not to involve higher specificity because I was worried about what might happen. However, timelines were considered and development moved forward with adding the `.htmlcontentblock a` rule.

Ultimately all `.btn` components within content blocks ended up getting affected, and some links that should have been caught weren't because they were within an accordion but not in a content block. More changes were made to try to override those issues, which then led to a pagination component having the wrong color, and a bunch of news article headlines turned white (on a white background).

Welcome to... specificity hell.

Once the new set of issues appeared, all CSS changes were reverted. So now we're back to the initial problem.

In a case like this, the best thing to do is to fix the root of the problem - which is that the default link styles are not appropriate for standard links. We had lots of links all over the site (buttons, navigation, news article links, etc) but they were all used in specific situations, so it made sense that those links should be the ones to override the default style, not the default style needing to override all of them.

Once the developer went in and implemented the new default style and the overrides, all was well! While it's definitely not fun to think that you might have to go into a series of components and update the link styles for all of them, it was the right way to go and prevented the specificity issues that the "quick" fix brought in.

So I think the main takeaways from this are:

1) When using BEM, going with a global fix that involves a higher specificity is rarely the way to go.

2) With any development problem, consider not only the time investment to implement your fix but also the implications of your fix. If your fix is particularly risky (like adding a lot of specificity for all links within a certain html block) you may need to consider how far reaching the consequences could be if things go south. In this case, the quick fix was definitely not worth the time - particularly since the comprehensive fix had to be implemented in the end anyway.
