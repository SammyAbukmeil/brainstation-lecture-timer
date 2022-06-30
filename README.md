# Brainstation Lecture Timer

A tool to help educators keep track of how much time & lectures they've got left.

# Features

Provide the following details via the form:

- **How much time** you have (in minutes)
- **How many slides** you need to get through
- Click "Start Timer"

To help you keep track of how many slides you've finished / have remaining:

- You can click each slide to mark it as done

## Potential Future Features

- Some slides take longer to go through (inc. a code along for that slides material), so perhaps a "weight" can be added to each slide. A higher weight would be seen visiaully by a bigger slide block.

- (If possible) An API connection to google sheets to automatically check off a slide as done

  - Resources:
    - [google.com/slides/api/reference/rest#rest-resource:-v1.presentations](https://developers.google.com/slides/api/reference/rest#rest-resource:-v1.presentations)
    - [stackoverflow.com/questions/54138971/is-there-a-way-to-get-the-current-slide-the-user-is-on-google-slides-and-apps](https://stackoverflow.com/questions/54138971/is-there-a-way-to-get-the-current-slide-the-user-is-on-google-slides-and-apps)

- Add another timer to calculate how much time you have left PER SLIDE (based on how many slides are remaining, and how much overall time you have left)

- Add colour coding to the overall timer and/or the time remaining timer (mentioned in the point above) - e.g.
  - Green - you have lots of time left
  - Amber - You're running low on time
  - Red - You're about to run over
