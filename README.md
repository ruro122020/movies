# Welcome to the Movies application

This application has a couple features. 

Feature #1: You can add a movie  

 ![gif of add movie feature](./public/assets/add%20movie.gif)    
Feature #2: You can see a list of movies and search by title, genre, alphabet, and ratings   

 ![gif of filter search](./public/assets/filter%20feature.gif)   
Feature #3: You can view each movie individually with more information about the movie  

![gif of movie details](./public/assets/movie%20dets.gif) 

<ol>
  <li>The App component renders the NavBar component. </li>
    <ul>
      <li>The Navbar component has: </li>
            <ul>
                <li>A Movies NavLink (renders the Movies Component)</li>
                <li>A Add Movie NavLink (renders the MovieForm component)  </li>
            </ul>
    </ul>
  
  <li>The Movies Component renders:</li>
    <ul>
        <li>A Search by title input </li>
        <li>A Search by genre input </li>
        <li>A Sort by ratings from greatest to least and alphabetically </li>
        <li>A collection of movieCard component for each movie</li>
    </ul>
  <li>The MovieCard component renders: </li>
    <ul>
        <li>The movie Title </li>
        <li>The movie Genre</li>
        <li>The movie Rating</li>
        <li>A 'View Movie' Link renders the MovieProfile component</li>
        <li>The MovieProfile component has more details about the movie</li>
    </ul>
  <li>The MovieForm component has: </li>
        <ul>
            <li>A Title input field  </li>
            <li>A Year input field </li>
            <li>A Time input field  </li>
            <li>A Genre input field </li>
            <li>A Rating dropdown menu numbered 1 - 5  </li>
            <li>A Submit button </li>
        </ul>
</ol> 
 

