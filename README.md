## Client README

# Koa Sleep Client

The frontend client for Koa Sleep - an open-source web dashboard for viewing and analyzing your Fitbit sleep data. Built with React, Next.js, and TypeScript.

[Live Deployment](https://koasleep.dev)

## Development Setup

This section outlines the steps required to set up your local development environment for the frontend.

### 1. Prerequisites

Ensure your system meets the following requirements:

* **Node.js:** `v20.0.0` or later.
    * _Recommendation:_ Use a Node.js version manager like [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) for easy switching between Node.js versions.
* **npm:** `v8.0.0` or later (usually bundled with Node.js).

### 2. Getting the Code

1.  **Clone the repository:**
    ```
    git clone https://github.com/Koa-Sleep/koa-sleep-client.git
    cd koa-sleep-client
    ```

### 3. Environment Configuration

The application uses environment variables for configuration.

1.  **Create `.env` file:**
    * **`.env` (example):**
        ```
        EXPRESS_URL=http://localhost:5000
        ```

### 4. Install Dependencies

Install the project's dependencies.

```
npm install
```

## Versioning

1. Check-out a new branch (Ex. `chore/bump-version`).
2. Run `npm version patch --no-git-tag-version -m "chore: bump version to %s"`
3. Push to remote and create a PR.
