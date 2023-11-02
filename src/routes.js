import App from "./App"
import Movies from "./pages/Movies"
import MovieCard from "./components/MovieCard"
import MovieForm from "./pages/MovieForm"
const routes =[
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Movies />
            },
            {
                path:'/movie/:id',
                element: <MovieCard />
            },
            {
                path:'/new-movie',
                element:<MovieForm />
            }
        ]
    }
]


export default routes