<template>
    <div class="excel excel08">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width:5%" />
                <col style="width:30%"/>
                <col style="width:15%"/>
                <col style="width:10%"/>
                <col style="width:10%"/>
                <col style="width:10%"/>
                <col style="width:10%"/>
                <col style="width:10%"/>
                <tbody>
                    <tr>
                        <td colspan="8" class="ta-c">未按权责发生制确认收入纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="3">行次</td>
                        <td class="blue ta-c" rowspan="3">项目</td>
                        <td class="blue ta-c" rowspan="2">合同金额（交易金额）</td>
                        <td class="blue ta-c" colspan="2">账载金额</td>
                        <td class="blue ta-c" colspan="2">税收金额</td>
                        <td class="blue ta-c" rowspan="2">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">本年</td>
                        <td class="blue ta-c">累计</td>
                        <td class="blue ta-c">本年</td>
                        <td class="blue ta-c" style="border-right: 1px solid #dfe6ec;">累计</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3</td>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c">5</td>
                        <td class="blue ta-c">6（4-2）</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:30%" class="blue">一、跨期收取的租金、利息、特许权使用费收入（2+3+4）</td>
                        <td style="width:15%"><number-display :value="a1_1"></number-display></td>
                        <td style="width:10%"><number-display :value="a1_2"></number-display></td>
                        <td style="width:10%"><number-display :value="a1_3"></number-display></td>
                        <td style="width:10%"><number-display :value="a1_4"></number-display></td>
                        <td style="width:10%"><number-display :value="a1_5"></number-display></td>
                        <td style="width:10%"><number-display :value="a1_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">（一）租金</td>
                        <td class="green"><number-input v-model="a2_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">（二）利息</td>
                        <td class="green"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a3_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">（三）特许权使用费</td>
                        <td class="green"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">二、分期确认收入（6+7+8）</td>
                        <td><number-display :value="a5_1"></number-display></td>
                        <td><number-display :value="a5_2"></number-display></td>
                        <td><number-display :value="a5_3"></number-display></td>
                        <td><number-display :value="a5_4"></number-display></td>
                        <td><number-display :value="a5_5"></number-display></td>
                        <td><number-display :value="a5_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">（一）分期收款方式销售货物收入</td>
                        <td class="green"><number-input v-model="a6_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a6_1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">（二）持续时间超过12个月的建造合同收入</td>
                        <td class="green"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a7_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">（三）其他分期确认收入</td>
                        <td class="green"><number-input v-model="a8_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a8_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">三、政府补助递延收入（10+11+12）</td>
                        <td><number-display :value="a9_1"></number-display></td>
                        <td><number-display :value="a9_2"></number-display></td>
                        <td><number-display :value="a9_3"></number-display></td>
                        <td><number-display :value="a9_4"></number-display></td>
                        <td><number-display :value="a9_5"></number-display></td>
                        <td><number-display :value="a9_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">（一）与收益相关的政府补助</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a10_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">（二）与资产相关的政府补助</td>
                        <td class="green"><number-input v-model="a11_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a11_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">（三）其他</td>
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a12_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">四、其他未按权责发生制确认收入</td>
                        <td class="green"><number-input v-model="a13_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a13_6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">合计（1+5+9+13）</td>
                        <td><number-display :value="a14_1"></number-display></td>
                        <td><number-display :value="a14_2"></number-display></td>
                        <td><number-display :value="a14_3"></number-display></td>
                        <td><number-display :value="a14_4"></number-display></td>
                        <td><number-display :value="a14_5"></number-display></td>
                        <td><number-display :value="a14_6"></number-display></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button v-if="false" type="primary" @click="refresh">刷新</el-button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import store from '../store'
    import NumberInput from '../components/NumberInput'
    import NumberDisplay from '../components/NumberDisplay'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel08',
        data() {
            return {
                fixed:2,
                year:0,
                uid:0,
                userId:0,
                a2_1:0,
                a2_2:0,
                a2_3:0,
                a2_4:0,
                a2_5:0,
                a3_1:0,
                a3_2:0,
                a3_3:0,
                a3_4:0,
                a3_5:0,
                a4_1:0,
                a4_2:0,
                a4_3:0,
                a4_4:0,
                a4_5:0,
                a6_1:0,
                a6_2:0,
                a6_3:0,
                a6_4:0,
                a6_5:0,
                a7_1:0,
                a7_2:0,
                a7_3:0,
                a7_4:0,
                a7_5:0,
                a8_1:0,
                a8_2:0,
                a8_3:0,
                a8_4:0,
                a8_5:0,
                a10_1:0,
                a10_2:0,
                a10_3:0,
                a10_4:0,
                a10_5:0,
                a11_1:0,
                a11_2:0,
                a11_3:0,
                a11_4:0,
                a11_5:0,
                a12_1:0,
                a12_2:0,
                a12_3:0,
                a12_4:0,
                a12_5:0,
                a13_1:0,
                a13_2:0,
                a13_3:0,
                a13_4:0,
                a13_5:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA105020"]),
            a1_1(){
                let rst = 0;
                for(var i=2;i<=4;i++){
                    rst += this[`a${i}_1`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a1_2(){
                let rst = 0;
                for(var i=2;i<=4;i++){
                    rst += this[`a${i}_2`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a1_3(){
                let rst = 0;
                for(var i=2;i<=4;i++){
                    rst += this[`a${i}_3`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a1_4(){
                let rst = 0;
                for(var i=2;i<=4;i++){
                    rst += this[`a${i}_4`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a1_5(){
                let rst = 0;
                for(var i=2;i<=4;i++){
                    rst += this[`a${i}_5`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a1_6(){
                return (this.a1_4 * Math.pow(10, this.fixed) - this.a1_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a2_6(){
                return (this.a2_4 * Math.pow(10, this.fixed) - this.a2_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a3_6(){
                return (this.a3_4 * Math.pow(10, this.fixed) - this.a3_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a4_6(){
                return (this.a4_4 * Math.pow(10, this.fixed) - this.a4_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a5_1(){
                let rst = 0;
                for(var i=6;i<=8;i++){
                    rst += this[`a${i}_1`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a5_2(){
                let rst = 0;
                for(var i=6;i<=8;i++){
                    rst += this[`a${i}_2`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a5_3(){
                let rst = 0;
                for(var i=6;i<=8;i++){
                    rst += this[`a${i}_3`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a5_4(){
                let rst = 0;
                for(var i=6;i<=8;i++){
                    rst += this[`a${i}_4`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a5_5(){
                let rst = 0;
                for(var i=6;i<=8;i++){
                    rst += this[`a${i}_5`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a5_6(){
                return (this.a5_4 * Math.pow(10, this.fixed) - this.a5_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a6_6(){
                return (this.a6_4 * Math.pow(10, this.fixed) - this.a6_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a7_6(){
                return (this.a7_4 * Math.pow(10, this.fixed) - this.a7_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_6(){
                return (this.a8_4 * Math.pow(10, this.fixed) - this.a8_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a9_1(){
                let rst = 0;
                for(var i=10;i<=12;i++){
                    rst += this[`a${i}_1`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a9_2(){
                let rst = 0;
                for(var i=10;i<=12;i++){
                    rst += this[`a${i}_1`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a9_3(){
                let rst = 0;
                for(var i=10;i<=12;i++){
                    rst += this[`a${i}_1`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a9_4(){
                let rst = 0;
                for(var i=10;i<=12;i++){
                    rst += this[`a${i}_1`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a9_5(){
                let rst = 0;
                for(var i=10;i<=12;i++){
                    rst += this[`a${i}_1`] * Math.pow(10, this.fixed);
                }
                return rst * 1.0 / Math.pow(10, this.fixed);
            },
            a9_6(){
                return (this.a9_4 * Math.pow(10, this.fixed) - this.a9_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a10_6(){
                return (this.a10_4 * Math.pow(10, this.fixed) - this.a10_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a11_6(){
                return (this.a11_4 * Math.pow(10, this.fixed) - this.a11_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a12_6(){
                return (this.a12_4 * Math.pow(10, this.fixed) - this.a12_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a13_6(){
                return (this.a13_4 * Math.pow(10, this.fixed) - this.a13_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_1(){
                return (this.a1_1 * Math.pow(10, this.fixed) + this.a5_1 * Math.pow(10, this.fixed) + this.a9_1 * Math.pow(10, this.fixed) + this.a13_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_2(){
                return (this.a1_2 * Math.pow(10, this.fixed) + this.a5_2 * Math.pow(10, this.fixed) + this.a9_2 * Math.pow(10, this.fixed) + this.a13_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_3(){
                return (this.a1_3 * Math.pow(10, this.fixed) + this.a5_3 * Math.pow(10, this.fixed) + this.a9_3 * Math.pow(10, this.fixed) + this.a13_3 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_4(){
                return (this.a1_4 * Math.pow(10, this.fixed) + this.a5_4 * Math.pow(10, this.fixed) + this.a9_4 * Math.pow(10, this.fixed) + this.a13_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_5(){
                return (this.a1_5 * Math.pow(10, this.fixed) + this.a5_5 * Math.pow(10, this.fixed) + this.a9_5 * Math.pow(10, this.fixed) + this.a13_5 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_6(){
                return (this.a14_4 * Math.pow(10, this.fixed) - this.a14_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            }
        },
        watch: {
            getTableA105020(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                }
            },
        },
        methods:{
            save(){
                let postData = {
                    "uid": this.uid,
                    "year": this.year,
                    "userId":this.userId
                };
                for(let i=1;i<=14;i++){
                    for(let j=1;j<=6;j++){
                        let p = `a${i}_${j}`
                        postData[p]=this[p];
                    }
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA105020", {
                    data: postData,
                    callback:(rst)=>{
                        if(rst.status==0){
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                        }
                    },
                    always:()=>{
                        loading.close();
                    }
                });
            },
            load(){
                this.uid = this.$route.query.uid;
                this.year = this.$route.query.year;
                this.userId = this.$route.query.userId;
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableA105020",{
                    data:{
                        "uid": this.uid,
                        "year": this.year,
                        "userId":this.userId
                    },
                    always:()=>{
                        loading.close();
                    }
                });
            },
            refresh(){
                store.dispatch("flush",{
                    data:{
                        "year": this.year,
                        "uid": this.uid,
                        "userId": this.userId
                    },
                    urlParam:"a105020",
                    always:()=>{
                        this.load();
                    }
                })
            }
        },
        mounted() {
            this.load();
        }
    }
</script>

<style lang="scss" scoped>
</style>