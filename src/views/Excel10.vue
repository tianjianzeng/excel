<template>
    <div class="excel excel10">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width:5%" />
                <col style="width:50%" />
                <col style="width:15%"/>
                <col style="width:15%"/>
                <col style="width:15%" />
                <tbody>
                    <tr>
                        <td colspan="5" class="ta-c">资产损失税前扣除及纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c" rowspan="2">行次</td>
                        <td style="width:50%" class="blue ta-c" rowspan="2">项目</td>
                        <td style="width:15%" class="blue ta-c">账载金额</td>
                        <td style="width:15%" class="blue ta-c">税收金额</td>
                        <td style="width:15%" class="blue ta-c">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3(1-2)</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">一、清单申报资产损失（2+3+4+5+6+7+8）</td>
                        <td><number-display :value="a1_1"></number-display></td>
                        <td><number-display :value="a1_2"></number-display></td>
                        <td><number-display :value="a1_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">（一）正常经营管理活动中，按照公允价格销售、转让、变卖非货币资产的损失</td>
                        <td class="green"><number-input v-model="a2_1" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_2" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">（二）存货发生的正常损耗</td>
                        <td class="green"><number-input v-model="a3_1" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_2" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a3_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">（三）固定资产达到或超过使用年限而正常报废清理的损失</td>
                        <td class="green"><number-input v-model="a4_1" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_2" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">（四）生产性生物资产达到或超过使用年限而正常死亡发生的资产损失</td>
                        <td class="green"><number-input v-model="a5_1" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_2" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a5_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">（五）按照市场公平交易原则，通过各种交易场所、市场等买卖债券、股票、期货、基金以及金融衍生产品等发生的损失</td>
                        <td class="green"><number-input v-model="a6_1" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_2" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a6_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">（六）分支机构上报的资产损失</td>
                        <td class="green"><number-input v-model="a7_1" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_2" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a7_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">（七）其他</td>
                        <td class="green"><number-input v-model="a8_1" :min="0" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_2" :min="0" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a8_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">二、专项申报资产损失（填写A105091）</td>
                        <td><number-display :value="a9_1"></number-display></td>
                        <td><number-display :value="a9_2"></number-display></td>
                        <td><number-display :value="a9_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">（一）货币资产损失（填写A105091）</td>
                        <td><number-display :value="a10_1"></number-display></td>
                        <td><number-display :value="a10_2"></number-display></td>
                        <td><number-display :value="a10_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">（二）非货币资产损失（填写A105091）</td>
                        <td><number-display :value="a11_1"></number-display></td>
                        <td><number-display :value="a11_2"></number-display></td>
                        <td><number-display :value="a11_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">（三）投资损失（填写A105091）</td>
                        <td><number-display :value="a12_1"></number-display></td>
                        <td><number-display :value="a12_2"></number-display></td>
                        <td><number-display :value="a12_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">（四）其他（填写A105091）</td>
                        <td><number-display :value="a13_1"></number-display></td>
                        <td><number-display :value="a13_2"></number-display></td>
                        <td><number-display :value="a13_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">合计（1+9）</td>
                        <td><number-display :value="a14_1"></number-display></td>
                        <td><number-display :value="a14_2"></number-display></td>
                        <td><number-display :value="a14_3"></number-display></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button type="primary" @click="refresh">刷新</el-button>
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
        name: 'excel10',
        data() {
            return {
                fixed:2,
                id:0,
                a2_1:0,
                a3_1:0,
                a4_1:0,
                a5_1:0,
                a6_1:0,
                a7_1:0,
                a8_1:0,
                a9_1:0,
                a10_1:0,
                a11_1:0,
                a12_1:0,
                a13_1:0,
                a2_2:0,
                a3_2:0,
                a4_2:0,
                a5_2:0,
                a6_2:0,
                a7_2:0,
                a8_2:0,
                a9_2:0,
                a10_2:0,
                a11_2:0,
                a12_2:0,
                a13_2:0,
                a9_3:0,
                a10_3:0,
                a11_3:0,
                a12_3:0,
                a13_3:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA105090"]),
            a1_1(){
                let rst = 0;
                for(let i=2;i<=8;i++){
                    rst += this[`a${i}_1`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a1_2(){
                let rst = 0;
                for(let i=2;i<=8;i++){
                    rst += this[`a${i}_2`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a1_3(){
                return (this.a1_1 * Math.pow(10,this.fixed) - this.a1_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2_3(){
                return (this.a2_1 * Math.pow(10,this.fixed) - this.a2_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a3_3(){
                return (this.a3_1 * Math.pow(10,this.fixed) - this.a3_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a4_3(){
                return (this.a4_1 * Math.pow(10,this.fixed) - this.a4_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a5_3(){
                return (this.a5_1 * Math.pow(10,this.fixed) - this.a5_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a6_3(){
                return (this.a6_1 * Math.pow(10,this.fixed) - this.a6_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a7_3(){
                return (this.a7_1 * Math.pow(10,this.fixed) - this.a7_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a8_3(){
                return (this.a8_1 * Math.pow(10,this.fixed) - this.a8_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a14_1(){
                return  (this.a1_1 * Math.pow(10,this.fixed) + this.a9_1 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a14_2(){
                 return  (this.a1_2 * Math.pow(10,this.fixed) + this.a9_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a14_3(){
                return (this.a14_1 * Math.pow(10,this.fixed) - this.a14_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableA105090(newVal) {
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
                if(this.invalid>0){
                    window.root && window.root.$emit("bizError",'请修改不和规范的字段后再进行保存');
                    return;
                }
                let postData = {
                    "uid": this.uid,
                    "year": this.year,
                    "userId": this.userId,
                    "id":this.id
                };
                for(let i=1;i<=14;i++){
                    for(let j=1;j<=3;j++){
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
                store.dispatch("editA105090", {
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
                store.dispatch("getTableA105090",{
                    data:{
                        "uid": this.uid,
                        "year": this.year,
                        "userId": this.userId
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
                    urlParam:"a105090",
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