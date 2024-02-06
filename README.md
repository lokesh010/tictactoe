# Tic Tac Toe

Tic Tac Toe is a simple web-based game built with Next.js. It allows users to play the classic game of Tic Tac Toe against another player.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Deployment](#deployment)
- [Code Structure and Functionality](#code-structure-and-functionality)
  - [Components](#components)
  - [Custom Hooks](#custom-hooks)

## Features

- Play Tic Tac Toe against another player.
- Support for Player X and Player O.
- Keeps track of rounds and ultimate winner.
- PWA (Progressive Web App) support for offline usage.

## Installation

1. Clone the repository:

   ```bash
     git clone git@github.com:lokesh010/tictactoe.git

   ```

2. Navigate to the project directory:

   ```bash
   cd tictactoe

   ```

3. Install dependencies:

   ```bash
   yarn
   ```

## Usage

1. To start the development server, run:

   ```bash
   yarn dev

   ```

2. To build and start

   ```bash
     yarn build && yarn start

   ```

## Tests

1. Unit Test

   To run unit tests, execute:

   ```bash
   yarn test

   ```

2. End-to-End Test

   The E2E tests are run using Cypress in headless mode. There are separate scripts for running tests against different environments:

- Local: (make sure local server is running)
  ```bash
    yarn test:headless-local
  ```
- Development:
  ```bash
    yarn test:headless-dev
  ```
- Stage:

  ```bash
    yarn test:headless-stage

  ```

## Deployment

The project includes workflows for deploying to development and stage environments using GitHub Actions.

### Development Deployment

The development deployment workflow runs on every push to the `development` branch. It builds the project, runs unit tests, and performs end-to-end tests against the development environment. If all tests pass, it deploys the application to the development server.

### Stage Deployment

The stage deployment workflow runs on every push to the `stage` branch. Similar to the development deployment workflow, it builds the project, runs tests, and deploys the application to the stage server.

## Code Structure and Functionality

The codebase follows a modular structure and utilizes various Next.js features and hooks to build the Tic Tac Toe game.

### Components

- **Board**: The main component responsible for rendering the game board and handling player moves. It utilizes dynamic imports for lazy loading components like `WinnerModal`, `PlayerX`, `PlayerO`, and `Square`. The `useRoundHandler` and `useScoreHandler` custom hooks manage game state and logic.
- **Square**: Represents each square in the Tic Tac Toe grid. Clicking on a square triggers the `squareClickHandler` function in the `Board` component.

- **PlayerX, PlayerO**: Components for displaying the X and O symbols respectively.

- **WinnerModal**: A modal component displayed when the game ends and announces the ultimate winner.

### Custom Hooks

- **useRoundHandler**: Manages round-related functionality such as retrieving previous rounds, determining the ultimate winner, and storing rounds in local storage.

- **useScoreHandler**: Handles game logic including determining the round winner, processing square clicks, and managing the ultimate winner.
