# Playwright API Automation Testing

## Project Overview

This project contains automated API tests developed using **Playwright Test and TypeScript**. The tests use the ReqRes demo API to validate API responses, HTTP status codes, and response data for different request scenarios.

## Tools and Technologies

- **Playwright Test** — API automation framework
- **TypeScript** — Programming language
- **Node.js and npm** — Runtime and package management
- **ReqRes** — Demo API for testing

## Test Coverage

The project includes 9 automated test cases covering three HTTP methods.

| API Method | Test Cases | Coverage |
|---|---:|---|
| GET | 3 | Retrieve users, valid and invalid user IDs |
| POST | 3 | Create users, valid request body, empty body, and values containing spaces |
| PUT | 3 | Update users, empty request body, and an ID that is not found in the standard sample data |
| **Total** | **9** | **API response validation** |

The tests validate HTTP status codes, response fields, user data, and timestamps where applicable.

## Project Structure

```text
playwright-api-automation/
├── test-data/
├── tests/
│   └── api/
│       ├── users.get.spec.ts
│       ├── users.post.spec.ts
│       └── users.put.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

## Prerequisites

- Node.js and npm installed
- Git installed (optional, if cloning the repository)
- Access to the ReqRes API
- A ReqRes API key if required by the current API configuration

## Installation

Clone the repository:

```bash
git clone https://github.com/Afrian1/playwright-api-automation.git
cd playwright-api-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers only if required by your project or other browser-based tests:

```bash
npx playwright install
```

## Configuration

Review `playwright.config.ts` to confirm the base URL and any required authentication settings.

If the configuration requires an API key, provide it through the environment variable expected by the project. Do not commit API keys, passwords, or other secrets to GitHub.

## Running the Tests

Run all automated tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/api/users.get.spec.ts
```

Run tests with detailed list output:

```bash
npx playwright test --reporter=list
```

## Test Results

The test runner reports the number of passed, failed, and skipped tests.

A successful execution is expected to show all 9 tests passing when the API is available and its observed behavior matches the test assertions.

## Important Notes

ReqRes is a demo API. Its behavior may differ from a production API, especially for create and update operations. A successful assertion confirms that the observed response matches the test expectation; it does not necessarily confirm persistent data changes on the server.

## Author

Afrian Ramadhan

**Project:** API Automation Testing using Playwright and TypeScript
