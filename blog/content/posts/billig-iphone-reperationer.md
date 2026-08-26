+++
date = '2025-09-30T09:42:50+02:00'
draft = true
title = 'Cheap iPhone Rep'
+++

Today's project is finishing a project I started on for a friend, but was so slow to make that he didn't need it, when I finished.

It's a basic idea. I am scraping different websites for prices on iPhone reparations and making a simple view for displaying it.

I think I will keep it very simple for now. 

So the project is going to be:
1. Launch the java scraping tool and getting it to save the scraped data once a day to a managed postgres database
2. Make a super simple website with a table of the data. 
3. Add a simple search function for types of fixes.
4. Add google ads to make those big money, jk I have just never tried setting it up before so might as well see if it can cover the server.

## Launch the app
So the app has been on ice for a while, so I will start checking everything is still working. Thankfully I build the app for someone else so I have done some error handling and the code is nice and clean.

Yup, status was decent. A single company had changed the base url for their fixes but my structure made it easy to update.
As always there was some setup issues. New computer which didn't have my usual intellij setup meant it used jdk 25 and that meant lombok didn't use the correct package and that wouldn't let me build, then there was new updates to the db handling, I no longer had intellij ultimate, etc etc. This is not my first rodeo and the amazing AIs can help with translating error codes so it only took me 30-45 min to get it up and running which I think is decent for such an old project.


