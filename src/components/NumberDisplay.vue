<template>
    <p :class="{'error':error}">{{value|formatCurrency}}</p>
</template>
<script>
    import {formatCurrency} from '../utils/filters'
    export default {
        data() {
            return {
                error: false
            }
        },
        filters: {formatCurrency},
        watch: {
            value(newVal){
                this.$parent.invalid>0 && this.$parent.invalid--
                this.error = false;
                if(this.min!=undefined && this.min > newVal){
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
            "value":{
                type: Number,
                default: 0
            },
            "min":{
                type: Number
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