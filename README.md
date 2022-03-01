# Front End Coding guidelines

This guidelines aim to provide a solid base for the development of this projects, and a shareable knowledge base for every developer.

## Branching

We should name the branches as follows:

-   feature/feature-or-component-name
-   bug/bug-name
-   hotfix/hotfix-name
-   test/PageName-or-ComponentName

## Gitflow

We start working in the `develop` branch and create features branches associated with a trello card that you are working on.

When it comes to reintegrate that, you will send a PR [pull request] from your branch into `develop` and your teammates will review your PR. You will need the approval from two teammates to merge the PR.

If you are working on an urgent feature or a bugfix in production, you should start working with a hotfix from `main`. There you will work on the `hotfix/really-important-fix` and then create a pull request into `main`.

After the PR is approved and you merged the `hotfix/really-important-fix` into `main`, you will need to reintegrate that into develop, so this means that you will create a PR from your hotfix branch into develop.

## File Structure

We should create a folder for each component in the components folder like this:

-   components
    -   ComponentName <- Using PascalCase
        -   i18n.ts <- All text and translates
        -   ComponentName.test.tsx <- Component testing
        -   index.tsx <- The component
        -   style.tsx <- All the styling should be here
        -   types.ts <- All the interfaces/types should be here
        -   utils.txs <- All the utility functions should be here
        -   hooks.tsx <- All the custom hooks should be here

-   pages
    -   PageName <- Using PascalCase
        -   PageName.test.tsx <- Page testing
        -   i18n.ts <- All text and translates
        -   index.tsx <- The page
        -   styles.tsx <- All the styling should be here
        -   utils.txs <- All the utility functions should be here
        -   types.ts

## Typescript

We will code in Typescript.

- All the types and interfaces should be in a separate file named `types.tsx` inside the component folder.

- The interfaces and types should be named in PascalCase with an Capital I followd by a descriptive name, .i.e. `ICarousel`.

- We prefer to use FC instead of FunctionComponent when we type a component, i.e. `const Component: React.FC = () => {}`

- We use arrow functions instead of functions

- Use hypens for route names if they have more than one word
i.e. `choose-profile`.

- Use <> instead of Fragment

## Styled Components

We will use Styled Components to style the app. We should name the styled components in PascalCase with the word "Styled" followed by a descriptive name, i.e. StyledTitle, StyledContainer, StyledButton, etc.
