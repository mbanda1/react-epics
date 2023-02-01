# **React Epic**

<h1> v ~ 0.1 </h1>

> Developing react Web App like ME, with techs that aim at providing better scalabality, lightness, security etc.

# React Redux
- For centrolized state managment while maintaining good developer expirience when things get complex.
- Applying Redux tool-kit - Embrassing immutable state prodivided by react immer.

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

# v ~ 1.0

- React Query - One centrol place for Fetching, cache and updating data while avoid Global centrol state wich could be heavy.
- React-router-dom useNavigate to navigate to primary page and refresh data(by api call) instead of updating store (reduce data cacheing lag). 
- Deprecated react-redux incluing `UseDispatch` & `useSelector`.
