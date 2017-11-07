<template>
    <div>
        <p v-if="showText" @click="click">{{text|formatCurrency(fixed)}}</p>
        <input ref="valInput" :class="{'error':error}" @focus="focus" v-else v-model="text" @blur="blur" @keyup="keyup">
    </div>
</template>
<script>
    import {formatCurrency} from '../utils/filters'
    export default {
        data() {
            return {
                text: "",
                showText: true,
                error: false
            }
        },
        filters: {formatCurrency},
        watch: {
            text(newVal,oldVal) {
                if(newVal){
                    let reg1 = new RegExp(`^[-]{0,1}[1-9]\\d*(\\.?\\d{0,${this.fixed}})?$`);
                    let reg2 = new RegExp(`^[-]{0,1}[0](\\.(\\d{0,${this.fixed}})?)?$`);

                    let reg3 = new RegExp(`^[-]$`);
                    let reg4 = new RegExp(`^[0][1-9]$`);
                    //匹配单独负号
                    if(reg3.test(newVal)){
                        return;
                    }
                    if(reg4.test(newVal)){
                        this.text = newVal.substring(1);
                        return;
                    }
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
                
            },
            blur(){
                this.$parent.invalid>0 && this.$parent.invalid--
                if(isNaN(Number(this.text))){
                    this.error = true;
                    this.$parent.invalid++;
                    return;
                }
                if(this.min!=undefined && this.min > Number(this.text)){
                    this.error = true;
                    this.$parent.invalid++;
                    return;
                }
                if(this.max!=undefined && this.max < Number(this.text)){
                    this.error = true;
                    this.$parent.invalid++;
                    return;
                }
                this.showText=true;
            },
            focus(){
                this.error = false;
            },
            click(evt){
                this.showText=false;
                let width = this.$el.offsetWidth;
                this.$nextTick(()=>{
                    this.$refs.valInput.focus();
                    this.$refs.valInput.style.width = `${width}px`;
                });
            }
        },
        mounted() {
            this.text = this.value.toString();
            this.$parent.invalid = 0;
        },
        props: {
            "fixed":{
                type: Number,
                default: 4
            },
            "value":{
                type: Number|String,
                default: 0
            },
            "min":{
                type: Number
            },
            "max":{
                type: Number
            }
        }
    }
</script>
<style>
    input{
        width: 100%;
    }
    .error{
        color: red;
    }
    p{
        margin: 0;
    }
</style>