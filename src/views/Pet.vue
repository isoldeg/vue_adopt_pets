<template>
    <div>
        <h1>{{ animal.name }} ({{ this.$route.params.species }})</h1>
        <p>Age: {{ animal.age }} years old</p>
        <p>Breed: {{ animal.breed }}</p>
    </div>
</template>

<script>
    //import cats from '@/data/cats' /* @ is the shortcut for src so you don't have to write .. etc. */
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                animal: {}
            }
        },
        computed: {
            /* listen to cats and dogs from here */
            ...mapState([
                'cats',  /* want to access cats from state from the vuex store */
                'dogs'
            ])

            /* won't see this but this is what ^ is like 
            cats() {
                return this.$store.state.cats
            }
            */
        },
        mounted() { /* when component is mounted */
            /* find out what pet it is */
            const animal = this[this.$route.params.species][this.$route.params.id]  /* will be cats or dogs, access it on this object */
            this.animal = animal
        }
        
    }
</script>
