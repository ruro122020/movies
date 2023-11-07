# Welcome to the Movies application

This application has a couple features. 

Feature #1: You can add a movie   
 ![gif of filter search](./public/assets/filter%20feature.gif)  
Feature #2: You can see a list of movies  
Feature #3: You can view each movie individually with more information about the movie   
<ol>
  <li>The App component will render the NavBar component. </li>
    <ul>
      <li>The Navbar component will have: </li>
            <ul>
                <li>A Movies NavLink (renders the Movies Component)</li>
                <li>A Add Movie NavLink (renders the MovieForm component)  </li>
            </ul>
    </ul>
  
  <li>The Movies Component will render:</li>
    <ul>
        <li>Search by title input </li>
        <li>Search by genre input </li>
        <li>Sort by ratings from greatest to least and alphabetically </li>
        <li>A collection of movieCard component for each movie</li>
    </ul>
  <li>The MovieCard component will render: </li>
    <ul>
        <li>Movie Title </li>
        <li>Movie Genre</li>
        <li>Movie Rating</li>
        <li>A 'View Movie' Link that will render the MovieProfile component</li>
        <li>The MovieProfile component will have more details about the movie</li>
    </ul>
  <li>The MovieForm component will have: </li>
        <ul>
            <li>Title input field  </li>
            <li>Year input field </li>
            <li>Time input field  </li>
            <li>Genre input field </li>
            <li>Rating dropdown menu numbered 1 - 5  </li>
            <li>Submit button </li>
        </ul>
</ol> 
 

