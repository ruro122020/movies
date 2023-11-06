import App from "./App"
import Movies from "./pages/Movies"
import MovieForm from "./pages/MovieForm"
import MovieProfile from './pages/MovieProfile'
const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Movies />
            },
            {
                path: '/movie/:id',
                element: <MovieProfile />
            },
            {
                path: '/new-movie',
                element: <MovieForm />
            }
        ]
    }
]


export default routes