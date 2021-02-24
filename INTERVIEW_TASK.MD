# Zilch Interview Task

## Details

Using the GitHub API defined in [githubAPI.ts](./src/app/api/githubAPI.ts), create an interface to browse the issues of a GitHub repository.

Repos are fetched jointly by their organisation names and repo names:

```
https://github.com/discord/focus-rings
```

`discord` is the org name, `focus-rings` is the repo name.

Your interface must allow the input of both values, and then dipslay the issues for that repository.

Navigating to view an issue can then show the comments on that issue, as well as details about the issue.

## Your Solution

Your solution must leverage Redux for state management, as well as Sagas for asynchronous fetching.

You must also write tests - test coverage of the whole application does not matter, please focus on having at least one test for each different part, such as for UI, reducers, actions, selectors, sagas, etc.
