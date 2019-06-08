<template>
    <div>
        <PetTable 
            species="cats"
            :pets="cats"
        />
    </div>
</template>

<script>
    //import cats from '@/data/cats' /* @ is the shortcut for src so you don't have to write .. etc. */
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
                'cats'  /* want to access cats from state from the vuex store */
            ])
        }
    }
</script>
