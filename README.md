# Front End Coding guidelines

This guidelines aim to provide a solid base for the development of this projects, and a shareable knowledge base for every developer.

## Branching
We should name the branches as follows:
- feature/feature-or-component-name
- bug/bug-name
- hotfix/hotfix-name

## Gitflow
We start working in the `develop` branch and create features branches associated with a trello card that you are working on.

When it comes to reintegrate that, you will send a PR [pull request] from your branch into `develop` and your teammates will review your PR. You will need the approval from two teammates to merge the PR.

If you are working on an urgent feature or a bugfix in production, you should start working with a hotfix from `main`. There you will work on the `hotfix/really-important-fix` and then create a pull request into `main`.

After the PR is approved and you merged the `hotfix/really-important-fix` into `main`, you will need to reintegrate that into develop, so this means that you will create a PR from your hotfix branch into develop.

## File Structure

### Page
If we develop a component that has its own path, it must be in the pages folder using the same structure as the components.

### Component
We should create a folder for each component in the components folder like this:

- components
	- ComponentName <- Using PascalCase
		- index.tsx <- The component
		- style.tsx <- All the styling should be here
		- types.ts <- All the interfaces/types should be here
		- utils.txs <- All the utility functions should be here
		- hooks.tsx <- All the custom hooks should be here


	
## Typescript
We will code in Typescript. All the types and interfaces should be in a separate file named `types.tsx` inside the component folder.
The interfaces and types should be named in PascalCase with an Capital I followd by a descriptive name, .i.e. `ICarousel`.

## Styled Components
We will use Styled Components to style the app. We should name the styled components in PascalCase with the word "Styled" followed by a descriptive name, i.e. StyledTitle, StyledContainer, StyledButton, etc.

## Styles
 - We use all logos/images in SGV, no libraries for that
 - We have common/styles file, in there we put all fontSizes, colors and all that are reusable in scss.
