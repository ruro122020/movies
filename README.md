# Welcome to the Rate-Movies application

This application has a couple features. 

Feature #1: You will be able to add a movie  
Feature #2: You will be able to see a list of movies  
Freature #3: You will be able to view each movie individually with more information about the movie  
The App component:  
    -App component will render the NavBar component  
        - The Navbar component will have:  
            -A Home NavLink (renders the Home Component)  
            -A Add Movie NavLink (renders the MovieForm component)  
The Home Component:    
    -Search by title  
    -Filter by genre  
    -Sort by ratings from greatest to least and alphabetically  
    -A collection of movieCard component for each movie that a user has added  
        --The MovieCard component:  
            - Will render the movies:  
                -title   
                -a 'view movie' link  
                    -user will be able to see:  
                        -year it was made  
                        -time(how long it is)  
                        -average rating number  

The MovieForm component:  
    -A form that will have:   
        -Title input field  
        -year input field  
        -time input field  
        -genre input field  
        -rating dropdown menu numbered 1 - 5  
        -submit button  

