# **React Epic**

> Developing react Web App the way i like with technolgies that aim at providing better scalabality, lightness, security etc.

# State Managment

- Redux tool-kit - Embrassing immutable state prodivided by react immer.

# Redux-saga

- For asynchronous data fetching and update plus browser cache managment.

# Rooting

- React v6 comes with more POWER and great flexibility.

> Client Side routing

    const router = createBrowserRouter([
    {
        path: "/",
        element: (
        <div>
            <h1>Hello Client Side render</h1>
            <Link to="about">About Nixon</Link>
        </div>
        ),
    },
    ]);

> Dynamic Segments

    <Route path="projects/:projectId/tasks/:taskId" />

> Pending Navigation UI

-- When users navigate around the app, the data for the next page is loaded before the page is rendered.

# Forms

- React Hooks form - riding on **useForm** and many more.
- Yup - for Values and Schema validation

# Code consistency

- ESLint, Prettier and Husky
