# Automation roadmap project

Skill tree for automated QA wannabies.

## First steps

Download repo, then in the project directory run:

### `yarn`

to install all the required packages. Then to run the project locally use command:

### `yarn start`

It should automatically open the browser, otherwise open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

Before you'll merge the PR, use command:

### `yarn build`

to build statics off the app (this will update the /app folder on the github pages).

## Contributing

Main file with the skill data: **/src/services/roadmapData.json**

The skill structure is following:

```
~learning track~ [main skill level - for now "begginer" "intermediate" "expert"; array]
└─── ~topic~ [name of the topic (i.e. "Api automation") which is displayed; array]
│   │   "name": [displayed name of lesson; object - mandatory],
│   │   "optional":  [should lesson be displayed as optional?; boolean - optional, otherwise false],
│   │   "ngOnly": 	[should lesson be displayed as available only for Netguru?; boolean - optional, otherwise false],
│   │   "wip": 	    [should lesson be displayed as work in progress?; boolean - optional, otherwise false],
│   └───  "data": [set of links and descriptions; array]
│   │    │	"description" [description of link provided below; string object]
│   │    │	"url" [link to materials; string object, should provide full link]
│   │    │	"urlLabel" [label of the button on the link; string object]
```

**"description"** field can parse [Markdown](https://www.markdownguide.org/getting-started/) language, so proper formatting is available.

Project created using [Create React App](https://github.com/facebook/create-react-app), [styled-components](https://styled-components.com/) and [headlessui](https://headlessui.dev/).

## Using this repo as a template for your own roadmap

You can fork this repo and use it as a template for your own roadmap. To do so, you need to:

1. Fork this repo
2. Pick a data roadmap data. The app implements the the following interfaces:

   ```
   LearningTrack {
       id: string;
       name: string;
       topics: Topic[];
   }
   IRoadmapDAO {
       getLearningTracks(): Promise<LearningTrack[]>;
   }
   ```

   - A JSON data access layer is provided in `src/services/jsonDAO.ts`
   - Alternatively, you can implement your own data access layer (REST API or SDK-based db access) by implementing the `IRoadmapDAO` interface
