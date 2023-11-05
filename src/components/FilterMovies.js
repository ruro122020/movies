import React from 'react'

const FilterMovies = ({ sortBy, setSortBy, titleSearch, setTitleSearch, genreSearch, setGenreSearch }) => {
    const handleSort = (e) => {
        setSortBy(e.target.value)
    }
    const handleSearch = (e) => {
        if (e.target.name === 'title') {
            setTitleSearch(e.target.value)
        } else {
            setGenreSearch(e.target.value)
        }
    }
    return (
        <form>
            <input
                type='search'
                placeholder='Search Title...'
                name='title'
                value={titleSearch}
                onChange={handleSearch} />
            <input
                type='search'
                placeholder='Search Genre...'
                name='genre'
                value={genreSearch}
                onChange={handleSearch}
            />
            <div>
                <strong>Sort By</strong>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="Alphabet"
                        checked={sortBy === 'Alphabet'}
                        onChange={handleSort} />
                    Alphabet
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="Rating"
                        checked={sortBy === 'Rating'}
                        onChange={handleSort}
                    />
                    Rating
                </label>
            </div>
        </form>
    )
}

export default FilterMovies
