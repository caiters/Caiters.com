---
title: "Book Club Nominations Web App"
date: "2014-11-06"
excerpt: "I built a web app to help my online book club with our book nomination and voting process."
---
Well, I almost never remember to actually write something in here!

I’m going to try to write a little bit about my projects after they launch, just so I can remember some of the cool stuff I did. As a bonus, it will also give me something to write about!

So. The Book Club Fiction web app.

I’ve been an admin in an online book club for a few years. Becca, a good friend of mine started up the club and invited me to mod it with her. For a long time we just operated the club on LiveJournal, but the population on LiveJournal seemed pretty static so as we lost people over time, it was difficult to find new members. It was difficult to convince people to join LiveJournal just to be in our club, and if by some stroke of luck we could do that, it was difficult to get them to remember they had an account and log in to participate. We decided recently to make the switch to GoodReads, but that meant a lot of the process we had developed for voting for books was not visually appealing anymore, due to HTML restrictions on GoodReads, and it had always been a lot of work for the mods every time voting came around.

Becca and I had been kicking around the idea for a website for our book club for a long time, and it seemed like the switch to GoodReads would make for a great time to build out some of the functionality we had been talking about for years. I’ve also been wanting to learn AngularJS, so this was the perfect project to do so.

After a few weeks, [BookClubFiction.net](https://www.bookclubfiction.net/) was born! It’s the result of my own wireframes and overall design work (not so much make-things-pretty design, but how-does-it-work design), pair programming the AngularJS front end, and my husband’s back end work in Ruby on Rails. I had a lot of help from Becca and Mags, one of the newer additions to our moderator team, helping to clean up the functionality and make everything work the way we wanted to.

It’s still a work in progress; in fact, even though we “launched” with it yesterday, there’s still work I need to complete before the next phase of voting starts on Friday to make sure I have streamlined the voting process as much as I can.

Anyway, the app is pretty cool because it allows us to take a whole bunch of work that was 100% manual and managed by the mods and automate 90% of it!

First, an admin chooses which genre we’ll be reading for the next round. This is whatever genre the club votes on via a poll on GoodReads.com. As soon as the genre is entered, the Nominations phase begins.

At this time, any member of the club who logs in to the app can nominate up to three books. We use the GoodReads search API so users can search for books and select them into a list of their selections, and then the user can choose up to three of those selections to nominate for consideration for the club to read. The nominations phase generally lasts for two days.

After nominations are closed, seconding begins. At this point, any member of the book club who logs in is able to second any book that any other member has nominated. Each time a user seconds a book, that book gets +1 vote, and a graph on the page updates immediately to show the new standings. That part is pretty cool looking and was also an opportunity for me to play with D3.js for the first time. Users can also use extra votes (which are special votes that members can get by participating in discussions) on any book in order to give a book yet another vote. These votes can be changed for up to 5 minutes after being made, after which point they lock in and cannot be removed.

That was a bit of a design challenge – trying to decide how we would handle both a normal second and an extra vote, and how we would display a timer for when that vote would lock in. I’m looking forward to Friday when Seconding begins so we can see it in action for the first time with normal users (vs BCF mods) to see if there are any pain points in the app that need to be fixed.

At the end, an admin can select the top two books as our main and bonus selection, and then we can go back to GoodReads to discuss the book over the coming weeks.

It was really fun to work on this project for the past few weeks, and I’m looking forward to iterating on it more as time goes on. Right now the design is definitely more functional than anything else, so I’m looking forward to making it prettier as well as making the design more mobile friendly.

I learned a lot about Angular, but a lot of the Angular work was done while pair programming with my husband. I’m looking forward to going it solo on my next Angular project so I can get more comfortable with it. My first simple Angular project is probably going to be a roster page for my World of Warcraft guild. We’ll see what’s next after that!

Things I learned about: AngularJS, d3.js, css flexbox
