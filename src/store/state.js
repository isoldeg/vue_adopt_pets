import cats from '../data/cats'
import dogs from '../data/dogs'

export default {
    cats,
    dogs,
    pets: [...cats, ...dogs]    /* gets all of the pets together in one array */
}