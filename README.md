# Frankslist

## Project Description

You work, you eat, you sleep - and that's about it... your life is boring. That's why we made Frankslist! Frankslist is the one stop web application for finding your dream hobby. Create an account, search for hobbies based on your unique lifestyle, and save your favorites! If you have a hobby you would like to share with the community, you can create a new page for that hobby!

Frankslist is optimized for web and mobile with full Back-End CRUD functionality. This project utilizes Mongoose, React, Express, and Node.

## Team Links

#### [Team Expectations Document](https://docs.google.com/document/d/1lDEXQ5Pm8ikYYdFSdEGdje6UNx6RS4BT0ljwfC3IXt4/edit)

#### [Kanban Board](https://trello.com/b/0nZGq3K3/tasks#)

#### [Color Pallete](https://coolors.co/ccd5ae-e9edc9-fefae0-faedcd-d4a37d-f9d150-f6c117-1f1f1f)

#### [Wireframe](https://www.figma.com/file/cVfhtMqJMW5fyUCsVsDBpH/frankslist---WireFrame?node-id=0%3A1)

#### [Component Hierarchy](https://whimsical.com/project-3-component-hierarchy-GCXHbyVzbsU1NDhVJqskgQ)

## Wireframes

### Desktop

![image](https://user-images.githubusercontent.com/89525025/141539662-0dbb0157-83e5-4bc5-a7d1-57918ab395d8.png)

### Mobile

![image](https://user-images.githubusercontent.com/89525025/141540750-3155c928-172b-4acd-8b06-865324e4f054.png)

## Component Hierarchy

![image](https://user-images.githubusercontent.com/89525025/141538449-e190ae99-b975-41c5-a001-7f4d1eafc715.png)

## API and Data Sample

### API Sample

```

```

### Schema

```
const hobbySchema = new Schema({
    name:  String,
    rating: Number,
    photo: String,
    price: Number,
    indoors: Boolean, // true is indoors, false is outdoors
    risk: Number, // 1 = not risky, 2 = medium 3 = risky 4 = extreme
    description: String,
    featured: Boolean, // default is false and if true then added to feature list on the frontend
  });

```

## MVP Goals

#### Planning

- [x] Have a thoroughly documented Team Expectations Google document
- [x] Have a thoroughly developed, beautiful README.md file
- [x] Take time for each team member to discuss where they feel strongest and weakest, in terms of coding ability
- [x] Create a Whimsical document to convey the data flow with component hierarchy included.
- [x] Create a detailed Figma wireframe.

#### Client (Front-End)

- [ ] Have a working, interactive React app, built using npx create-react-app client
- [ ] Have at least 6 separate, rendered components in an organized and understandable React file structure.
- [ ] Utilize functional and class React components appropriately.
- [ ] Use only React for DOM Manipulation.
- [ ] Consume data from your API, and render that data in your components.
- [ ] Utilize React Router, for client-side routing.
- [ ] Have user authentication.
- [ ] Have a home screen, listing screen, and detail screen.

#### Server (Back-End)

- [ ] Have working generic controller actions for full-CRUD using Express, Mongoose, and MongoDB.
- [ ] Utilize user authentication.

#### Styling

- [ ] Be styled with CSS.
- [ ] Use flexbox (display: flex) or CSS Grid.
- [ ] Implement responsive design on 2 screen sizes (including desktop) using a media query (mobile).

#### Linting

- [ ] Indent properly.
- [ ] Utilize high-quality, semantic variable names.
- [ ] Follow camelCase and kebab-case conventions.
- [ ] Remove unnecessary boilerplate React files and code.
- [ ] Remove all console.log()s and commented out code (functional notes/comments are okay).

#### Deployment

- [ ] Deploy the fully functional front-end via Netlify.
- [ ] Deploy the back-end via Heroku.
- [ ] Deploy the MongoDB database on MongoDB Atlas.

#### Procedural

- [x] Have frequent commits from every team member dating back to the very beginning of the project. These commits should total to or exceed 50.
- [ ] Use effective and safe branching and merging processes.

## Project Schedule

| Day        | Deliverable                                            | Status     |
| ---------- | ------------------------------------------------------ | ---------- |
| Wed Nov 10 | Team Expectation Approval / Project Idea Brainstorming | Incomplete |
| Thu Nov 11 | Figma Wireframe / Whimsical Component Heiarchy         | Incomplete |
| Fri Nov 12 | Project Approvals / Start Back-End                     | Incomplete |
| Sat Nov 13 |                                                        | Incomplete |
| Sun Nov 14 |                                                        | Incomplete |
| Mon Nov 15 | Back-End Complete / Front-End Boilerplate Complete     | Incomplete |
| Tue Nov 16 |                                                        | Incomplete |
| Wed Nov 17 | MVP Done                                               | Incomplete |
| Thu Nov 18 |                                                        | Incomplete |
| Fri Nov 19 |                                                        | Incomplete |
| Sat Nov 20 |                                                        | Incomplete |
| Sun Nov 21 | Practice Presentation                                  | Incomplete |
| Mon Nov 22 | Presentation                                           | Incomplete |

## Code Samples

### Code Sample 1

he circumstances. \* They land in their seats. BARRY (CONT’D) Well Adam, today we are men. "Bee Movie" - JS REVISIONS 8/13/07 5. ADAM We are. BARRY Bee-men. ADAM Amen! BARRY Hallelujah. Barry hits Adam’s forehead. Adam goes into the rapture. An announcement comes over the PA. ANNOUNCER (V.O) Students, faculty, distinguished bees...please welcome, Dean Buzzwell. ANGLE ON: DEAN BUZZWELL steps up to the

```

```

### Code Sample 2

he circumstances. \* They land in their seats. BARRY (CONT’D) Well Adam, today we are men. "Bee Movie" - JS REVISIONS 8/13/07 5. ADAM We are. BARRY Bee-men. ADAM Amen! BARRY Hallelujah. Barry hits Adam’s forehead. Adam goes into the rapture. An announcement comes over the PA. ANNOUNCER (V.O) Students, faculty, distinguished bees...please welcome, Dean Buzzwell. ANGLE ON: DEAN BUZZWELL steps up to the

```

```

### Code Sample 3

he circumstances. \* They land in their seats. BARRY (CONT’D) Well Adam, today we are men. "Bee Movie" - JS REVISIONS 8/13/07 5. ADAM We are. BARRY Bee-men. ADAM Amen! BARRY Hallelujah. Barry hits Adam’s forehead. Adam goes into the rapture. An announcement comes over the PA. ANNOUNCER (V.O) Students, faculty, distinguished bees...please welcome, Dean Buzzwell. ANGLE ON: DEAN BUZZWELL steps up to the

```

```

## Lessons Learned about Communication and Working on a Team

Here’s the graduate. We’re very proud of you, Son. And a perfect report card, all B’s. JANET BENSON (mushing Barry’s hair) Very proud. BARRY Ma! I’ve got a thing going here. Barry re-adjusts his hair, starts to leave. JANET BENSON You’ve got some lint on your fuzz. She picks it off. BARRY Ow, that’s me! MARTIN BENSON Wave to us. We’ll be in row 118,000. Barry zips off. BARRY Bye! JANET BENSON Barry, I told you, stop flying in the house! CUT TO: SEQ. 750 - DRIVING TO GRADUATION EXT. BEE SUBURB - MORNING A GARAGE DOOR OPENS. Barry drives out in his CAR. "Bee Movie" - JS REVISIONS 8/13
