import React from 'react'
import { Form, Grid, Radio, Search } from 'semantic-ui-react'

const FilterMovies = ({ sortBy, setSortBy, titleSearch, setTitleSearch, genreSearch, setGenreSearch }) => {
    const handleSort = (e, data) => {
        setSortBy(data.value)
    }
    const handleSearch = (e) => {
        if (e.target.name === 'title') {
            setTitleSearch(e.target.value)
        } else {
            setGenreSearch(e.target.value)
        }
    }
    return (
        <Form>
            <Grid textAlign='center'>
                <Grid.Row>
                    <Search
                        placeholder='Search Title...'
                        value={titleSearch}
                        name='title'
                        onSearchChange={handleSearch}
                        showNoResults={false}
                    />
                    <Search
                        placeholder='Search Genre...'
                        value={genreSearch}
                        name='genre'
                        onSearchChange={handleSearch}
                        showNoResults={false}
                    />
                </Grid.Row>
                <Form.Field>
                    Sort By:
                </Form.Field>
                <Radio
                    label='Alphabet'
                    name='sort'
                    value='Alphabet'
                    checked={sortBy === 'Alphabet'}
                    onChange={handleSort}
                />
                <Radio
                    label='Rating'
                    name='sort'
                    value='Rating'
                    checked={sortBy === 'Rating'}
                    onChange={handleSort}
                />
            </Grid>
        </Form>
    )
}

export default FilterMovies
