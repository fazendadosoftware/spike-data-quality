<template>
    <b-col v-on:click="select" v-bind:class="{active: isFiltered}" class="card">
        <div class='description'>{{text}}</div>
        {{number}}
    </b-col>
</template>

<script>
/* eslint-disable */ 

export default {
    props: {
        kpi: Number,
        facet: String,
        description: String
    },
    computed: {
        isFiltered () {
            return this.$store.state.cards[this.facet].isFiltered
        }
    },
    data () {
        return {
            number: this.kpi,
            text: this.description,
            filter: this.facet,
            isfiltered: this.isFiltered
        }
    },
    methods: {
        select () {
            this.$store.state.cards[this.facet].isFiltered = !this.$store.state.cards[this.facet].isFiltered

            if (!this.isFiltered) {
                console.log("Unfiltering for: ", this.filter)
                this.$store.commit('filter', this.filter)
            } else {
                console.log("Filtering for: ", this.filter)
                this.$store.commit('filter', this.filter)
            }
            
        }
    }
}
</script>

<style lang='stylus' scoped>
  @import '~@/stylus/material-color'
  @import '~@/stylus/material-shadows'

  .description
    font-size 1rem
    text-align center
    font-style itali

  .card
    flex 1 0 36%
    font-size 3.5rem
    font-weight bold
    text-align center
    display flex
    flex-flow column
    max-width 250px
    padding 0 1rem
    background #0095da
    margin-top 1rem
    margin-right 1rem
    color #0095da
    background white
    z-depth-6dp()
    cursor default
    transition background 0.2s
    &:hover
      color white
      background #0095da

  .active
    color white
    background #0095da

  .inactive
    color #0095da
    background white

  @media only screen and (max-width: 600px)
    .factsheet-card
      width 100%
      max-width 100%
</style>
