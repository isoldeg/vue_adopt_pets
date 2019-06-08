<template>
    <div>
        <PetTable 
            species="dogs"
            :pets="dogs"
        />
    </div>
</template>

<script>
    //import dogs from '@/data/dogs' /* @ is the shortcut for src so you don't have to write .. etc. */
    import { mapState } from 'vuex'
    import PetTable from '@/components/PetTable.vue'

    export default {
        components: {
            PetTable
        },
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'dogs'  /* want to access cats from state from the vuex store */
            ])
        }
    }
</script>