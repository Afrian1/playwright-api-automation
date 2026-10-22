# Playwright API Automation Testing

## Project Overview

This project contains automated API tests developed using **Playwright Test and TypeScript**. The tests use the ReqRes demo API to validate HTTP status codes, response data, and API behavior across positive and negative scenarios.

The project also uses **GitHub Actions** to execute API tests automatically in a CI environment.

## Tools and Technologies

- **Playwright Test** — API automation framework
- **TypeScript** — Programming language
- **Node.js and npm** — Runtime and package management
- **ReqRes** — Demo API for testing
- **GitHub Actions** — Continuous integration and automated test execution

## Test Coverage

The project contains 9 automated test cases covering three HTTP methods.

| API Method | Test Cases | Coverage |
|---|---:|---|
| GET | 3 | Retrieve a user, handle a user ID that is not found, and handle a nonnumeric user ID |
| POST | 3 | Create a user with valid data, submit an empty JSON body, and submit values containing spaces |
| PUT | 3 | Update a user with valid data, submit an empty JSON body, and validate the response for a user ID that is not found |
| **Total** | **9** | **API response validation** |

The tests validate HTTP status codes, response fields, and returned data according to the assertions defined in each test case.

## Project Structure

```text
playwright-api-automation/
├── .github/
│   └── workflows/
│       └── api-tests.yml
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

- Node.js and npm
- Git, if cloning the repository
- Network access to the ReqRes API
- API credentials if required by the current endpoint configuration

## Installation

Clone the repository:

```bash
git clone https://github.com/Afrian1/playwright-api-automation.git
```

Navigate to the project directory:

```bash
cd playwright-api-automation
```

Install dependencies:

```bash
npm ci
```

## Configuration

Review `playwright.config.ts` to confirm the API base URL and any required authentication settings.

If the API configuration requires an API key, provide it through the environment variable expected by the project. Do not commit API keys, passwords, or other secrets to GitHub.

## Running the Tests

Run all API tests:

```bash
npx playwright test
```

Run the GET test file:

```bash
npx playwright test tests/api/users.get.spec.ts
```

Run tests with detailed list output:

```bash
npx playwright test --reporter=list
```

## Automated Execution with GitHub Actions

The workflow is defined in `.github/workflows/api-tests.yml`.

The workflow runs automatically when code is pushed to the repository or when a pull request is opened. It can also be triggered manually from the **Actions** tab using **Run workflow**.

To view the execution results:

1. Open the GitHub repository.
2. Select the **Actions** tab.
3. Open the latest **API Tests** workflow run.
4. Review the `Run API tests` step.

Repository: https://github.com/Afrian1/playwright-api-automation

## Test Results

**Latest confirmed execution:**

- Total test cases: 9
- Passed: 9
- Failed: 0
- Test execution time: 1.6 seconds
- Workers: 2

All 9 automated tests passed in the reported GitHub Actions execution.

## Important Notes

ReqRes is a demo API. Its behavior may differ from a production API, particularly for create and update operations.

A passing assertion confirms that the observed response matches the defined test expectation. It does not necessarily confirm that created or updated data is permanently stored on the server.

## Author

**Afrian Ramadhan**

Project: API Automation Testing using Playwright and TypeScript