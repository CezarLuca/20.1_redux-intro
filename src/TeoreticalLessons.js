// In JavaScript, the difference between importing from a package that is a simple string (e.g., import {} from "redux")
//  and importing from a package that starts with an @ (e.g., import {} from "@redux-devtools/extension") lies in the way
//  these packages are named and organized within the npm ecosystem.

// Simple String Imports:

// These are typically the names of packages that are published directly to the npm registry.
// Example: import { createStore } from "redux";
// The package name is redux, and it is located at the top level of the npm registry.
// Scoped Package Imports:

// Scoped packages start with an @ symbol followed by a scope name and a package name.
// Example: import { composeWithDevTools } from "@redux-devtools/extension";
// The package name is extension, and it is under the scope @redux-devtools.
// Scoped packages are often used to group related packages together, usually by an organization or a specific project.
// They help in organizing and managing packages, especially when there are many related packages or when different
//  versions of the same package need to be maintained.
// Example:

// redux is a top-level package.
// @redux-devtools/extension is a scoped package under the @redux-devtools scope.
// Benefits of Scoped Packages:

// Namespace Management: Helps avoid naming conflicts by grouping related packages under a common scope.
// Organization: Makes it clear which organization or project the package belongs to.
// Versioning: Easier to manage versions and dependencies within the scope.
// In summary, the main difference is organizational: scoped packages provide a way to group related packages together
//  under a common namespace, which can help with managing dependencies and avoiding naming conflicts.
/*

    What is REDUX TOOLKIT?

    REDUX TOOLKIT:
        - The modern and preferred way to write Redux logic.
        - An opininated approach, forcing us to use Redux best practices.
        - 100% compatible with existing Redux code, allowing us to use them together.
        - Allows us to write a lot less code to achieve the same result (less boilerplate).
        - Gives us 3 big features (but there are more):
            - We can write code that "mutates" state inside reducers (will be converted to immutable logic behind the 
            scenes by "Immer" library).
            - Action creators are automatically generated for us.
            - Automatic setup of thunk middleware and DevTools.
*/
