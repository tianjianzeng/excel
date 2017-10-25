<template>
    <div>
        <p v-if="showText" @click="click">{{text|formatCurrency}}</p>
        <input ref="valInput" v-else v-model="text" @blur="showText=true" @keyup="keyup">
    </div>
</template>
<script>
    import {formatCurrency} from '../utils/filters'
    export default {
        data() {
            return {
                text: "",
                showText: true
            }
        },
        filters: {formatCurrency},
        watch: {
            text(newVal,oldVal) {
                if(newVal){
                    let reg1 = new RegExp(`^[-]{0,1}[1-9]\\d*(\\.?\\d{0,${this.fixed}})?$`);
                    let reg2 = new RegExp(`^[-]{0,1}[0](\\.(\\d{0,${this.fixed}})?)?$`);
                 
                    if( !(reg1.test(newVal)) && !(reg2.test(newVal)) ) {
                        this.text = oldVal;
                        return;
                    }
                    this.$emit("input", Number(newVal));
                }
                else{
                    this.$emit("input","");
                }
            },
            value(newVal){
                this.text = this.value.toString(); 
            }
        },
        methods:{
            keyup(evt){
                console.log(evt);
            },
            click(evt){
                this.showText=false;
                this.$nextTick(()=>{
                    this.$refs.valInput.focus();
                });
            }
        },
        mounted() {
            this.text = this.value.toString();
        },
        props: {
            "fixed":{
                type: Number,
                default: 4
            },
            "value":{
                type: Number|String,
                default: 0
            }
        }
    }
</script>
<style>
    input{
        width: 100%;
    }
    p{
        margin: 0;
    }
</style>