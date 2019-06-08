export default {
    animalsCount: (state) => {
        return state.cats.length + state.dogs.length
    },
    getAllCats: (state) => {
        /* filter takes a function */
        return state.pets.filter((pet) => {
            return pet.species === 'cat'
        })
    }
}