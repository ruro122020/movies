
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