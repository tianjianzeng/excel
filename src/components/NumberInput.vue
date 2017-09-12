<template>
    <input v-model="text">
</template>
<script>
    export default {
        data() {
            return {
                text: ""
            }
        },
        watch: {
            text(newVal,oldVal) {
                if(newVal){
                    let reg1 = new RegExp(`^[-]{0,1}[1-9]\\d*(\\.?\\d{0,${this.fixed}})?$`);
                    let reg2 = new RegExp(`^[-]{0,1}[0](\\.(\\d{0,${this.fixed}})?)?$`);
                    console.log(1);
                    console.log(newVal);
                    if( !(reg1.test(newVal)) && !(reg2.test(newVal)) ) {
                        this.text = oldVal;
                        return;
                    }
                    console.log(3);
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