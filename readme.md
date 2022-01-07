# NodeRPG

![image](https://i.imgur.com/8ofNXK9.png)

<p align='center'>
    Role-Playing Game inside the terminal with Ink and React!
</p>

## Navigation

- [What?? React on the Terminal?](#what-react-on-the-terminal)
- [Structure](#structure)
- [Running in your machine](#running-in-your-machine)
  - [Requirements](#requirements)
  - [Commands](#commands)

## What?? React on the Terminal?

It is definitely **not even close** to a simple game-engine with pre-built functionalities, but React brings a lot of power to the table when it comes to dynamically rendering objects and dealing with events without the need to go for event-driven back-end designs.

It comes with a lot of downsides though:

- You don't have all the flex properties;
- You can't add styling to all components;
- Ink still has not that many libraries available to make your life easier (It was made to create interactive CLIs more easily, they are not very complex);
- If you don't name your components yourself in a separate file, it becomes really unreadable really fast;
- ...

**TL;DR**: React is not the right tool for the job, but this is a challenge. I don't recommend trying this out, but coding like this is fun.

## Structure

- Every "map" in your conventional RPG game is considered a `Scene`;
- Each `Scene` is rendered dynamically by a `SceneLoader` component;
- Every `Scene` has `Events`, and each one of them is rendered dynamically aswell;

This happens so we can easily travel between them without the need to go for a step-by-step approach and make things more independent.

## Running in your machine

### Requirements

- NodeJS
- TypeScript
- Yarn\*

<small>Everything can be done with NPM, but you better change the package.json scripts to match NPM instead of Yarn</small>

### Commands

To install the dependencies, run:

```
yarn
```

Once everything is installed and an auto-generated node_modules pop's up, run the following:

```
yarn start
```
