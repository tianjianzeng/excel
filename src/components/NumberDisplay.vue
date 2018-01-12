<template>
    <p :class="{'error':error}">{{value/100|filter(filter,fixed)}}</p>
</template>
<script>
    import {formatCurrency, filter} from '../utils/filters'
    export default {
        data() {
            return {
                error: false
            }
        },
        filters: {filter},
        watch: {
            value(newVal){
                this.$parent.invalid>0 && this.$parent.invalid--
                this.error = false;
                if(this.min!=undefined && this.min > newVal){
                    this.error = true;
                    this.$parent.invalid++;
                    return;
                }
                if(this.max!=undefined && this.max < newVal){
                    this.error = true;
                    this.$parent.invalid++;
                    return;
                }
            }
        },
        methods:{
        },
        mounted() {
            this.$parent.invalid = 0;
        },
        props: {
            "fixed":{
                type: Number,
                default: 2
            },
            "value":{
                type: Number,
                default: 0
            },
            "min":{
                type: Number
            },
            "max":{
                type: Number
            },
            "filter":{
                type: Function,
                default: formatCurrency
            }
        }
    }
</script>
<style>
    .error{
        color: red;
    }
    p{
        margin: 0;
    }
</style>