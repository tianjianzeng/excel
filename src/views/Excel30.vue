<template>
    <div class="excel excel30">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="4">利润表</td>
                   </tr>
                    <tr>
                        <td colspan="4">（适用执行小企业会计准则的企业）</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>单位：元</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:30%">项目</td>
                        <td class="blue" style="width:10%">行次</td>
                        <td class="blue" style="width:30%">本年累计金额</td>
                        <td class="blue" style="width:30%">上年金额</td>
                    </tr>
                    <tr>
                        <td class="blue">一、营业收入</td>
                        <td class="blue">1</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">减：营业成本</td>
                        <td class="blue">2</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">营业税金及附加</td>
                        <td class="blue">3</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：消费税</td>
                        <td class="blue">4</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">营业税</td>
                        <td class="blue">5</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">城市维护建设税</td>
                        <td class="blue">6</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">资源税</td>
                        <td class="blue">7</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">土地增值税</td>
                        <td class="blue">8</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">城镇土地使用税、房产税、车船税、印花税</td>
                        <td class="blue">9</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">教育费附加、矿产资源补偿费、排污费</td>
                        <td class="blue">10</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">销售费用</td>
                        <td class="blue">11</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：商品维修费</td>
                        <td class="blue">12</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">广告费和业务宣传费</td>
                        <td class="blue">13</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">管理费用</td>
                        <td class="blue">14</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：开办费</td>
                        <td class="blue">15</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">业务招待费</td>
                        <td class="blue">16</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">研究费用</td>
                        <td class="blue">17</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">财务费用</td>
                        <td class="blue">18</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">其中：利息费用（收入以“-”号填列）</td>
                        <td class="blue">19</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 加：投资收益（亏损以“-”号填列）</td>
                        <td class="blue">20</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 二、营业利润（亏损以“-”号填列）</td>
                        <td class="blue">21</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue"> 加：营业外收入</td>
                        <td class="blue">22</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 其中：政府补助</td>
                        <td class="blue">23</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">减：营业外支出</td>
                        <td class="blue">24</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">其中：坏账损失</td>
                        <td class="blue">25</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">无法收回的长期债券投资损失</td>
                        <td class="blue">26</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue"> 无法收回的长期股权投资损失</td>
                        <td class="blue">27</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">自然灾害等不可抗力因素造成的损失</td>
                        <td class="blue">28</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 税收滞纳金</td>
                        <td class="blue">29</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                     <tr>
                        <td class="blue">三、利润总额（亏损总额以“-”号填列）</td>
                        <td class="blue">30</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">减：所得税费用</td>
                        <td class="blue">31</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">四、净利润（净亏损以“-”号填列）</td>
                        <td class="blue">32</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>                 


                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import store from '../store'
    import NumberInput from '../components/NumberInput'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel30',
        data() {
            return {
                fixed:2,
                a106:true,
                a107:false,
                "a3_1": 0,
                "a3_2": 0,
                "a3_3": 0,
                "a3_4": 0,
                "a3_5": 0,
                "a3_7": 0,
                "a4_1": 0,
                "a4_2": 0,
                "a4_3": 0,
                "a4_4": 0,
                "a4_5": 0,
                "a4_7": 0,
                "a5_1": 0,
                "a5_2": 0,
                "a5_3": 0,
                "a5_4": 0,
                "a5_5": 0,
                "a5_7": 0,
                "a6_1": 0,
                "a6_2": 0,
                "a6_3": 0,
                "a6_4": 0,
                "a6_5": 0,
                "a6_7": 0,
                "a7_1": 0,
                "a7_2": 0,
                "a7_3": 0,
                "a7_4": 0,
                "a7_5": 0,
                "a7_7": 0,
                "a8_1": 0,
                "a8_2": 0,
                "a8_3": 0,
                "a8_4": 0,
                "a8_5": 0,
                "a8_7": 0,
                "a9_1": 0,
                "a9_2": 0,
                "a9_3": 0,
                "a9_4": 0,
                "a9_5": 0,
                "a9_7": 0,
                "a10_1": 0,
                "a10_2": 0,
                "a10_3": 0,
                "a10_4": 0,
                "a10_5": 0,
                "a10_7": 0,
                "a11_1": 0,
                "a11_2": 0,
                "a11_3": 0,
                "a11_4": 0,
                "a11_5": 0,
                "a11_7": 0,
                "a12_1": 0,
                "a12_2": 0,
                "a12_3": 0,
                "a12_4": 0,
                "a12_5": 0,
                "a12_7": 0,
                "a14_1": 0,
                "a14_2": 0,
                "a14_3": 0,
                "a14_4": 0,
                "a14_5": 0,
                "a14_7": 0,
                "a15_1": 0,
                "a15_2": 0,
                "a15_3": 0,
                "a15_4": 0,
                "a15_5": 0,
                "a15_7": 0,
                "a16_1": 0,
                "a16_2": 0,
                "a16_3": 0,
                "a16_4": 0,
                "a16_5": 0,
                "a16_7": 0,
                "a18_1": 0,
                "a18_2": 0,
                "a18_3": 0,
                "a18_4": 0,
                "a18_5": 0,
                "a18_7": 0,
                "a19_1": 0,
                "a19_2": 0,
                "a19_3": 0,
                "a19_4": 0,
                "a19_5": 0,
                "a19_7": 0,
                "a20_1": 0,
                "a20_2": 0,
                "a20_3": 0,
                "a20_4": 0,
                "a20_5": 0,
                "a20_7": 0,
                "a21_1": 0,
                "a21_2": 0,
                "a21_3": 0,
                "a21_4": 0,
                "a21_5": 0,
                "a21_7": 0,
                "a22_1": 0,
                "a22_2": 0,
                "a22_3": 0,
                "a22_4": 0,
                "a22_5": 0,
                "a22_7": 0,
                "a23_1": 0,
                "a23_2": 0,
                "a23_3": 0,
                "a23_4": 0,
                "a23_5": 0,
                "a23_7": 0,
                "a24_1": 0,
                "a24_2": 0,
                "a24_3": 0,
                "a24_4": 0,
                "a24_5": 0,
                "a24_7": 0,
                "a25_1": 0,
                "a25_2": 0,
                "a25_3": 0,
                "a25_4": 0,
                "a25_5": 0,
                "a25_7": 0,
                "a27_1": 0,
                "a27_2": 0,
                "a27_3": 0,
                "a27_4": 0,
                "a27_5": 0,
                "a27_7": 0,
                "a28_1": 0,
                "a28_2": 0,
                "a28_3": 0,
                "a28_4": 0,
                "a28_5": 0,
                "a28_7": 0,
                "a29_1": 0,
                "a29_2": 0,
                "a29_3": 0,
                "a29_4": 0,
                "a29_5": 0,
                "a29_7": 0,
                "a30_1": 0,
                "a30_2": 0,
                "a30_3": 0,
                "a30_4": 0,
                "a30_5": 0,
                "a30_7": 0,
                "a31_1": 0,
                "a31_2": 0,
                "a31_3": 0,
                "a31_4": 0,
                "a31_5": 0,
                "a31_7": 0,
                "a32_1": 0,
                "a32_2": 0,
                "a32_3": 0,
                "a32_4": 0,
                "a32_5": 0,
                "a32_7": 0,
                "a33_1": 0,
                "a33_2": 0,
                "a33_3": 0,
                "a33_4": 0,
                "a33_5": 0,
                "a33_6": 0,
                "a34_1": 0,
                "a34_2": 0,
                "a34_3": 0,
                "a34_4": 0,
                "a34_5": 0,
                "a34_6": 0,
                "a34_7": 0,
                "a35_1": 0,
                "a35_2": 0,
                "a35_3": 0,
                "a35_4": 0,
                "a35_5": 0,
                "a35_6": 0,
                "a35_7": 0,
                "a36_6": 0,
                "a37_1": 0,
                "a37_2": 0,
                "a37_3": 0,
                "a37_4": 0,
                "a37_5": 0,
                "a37_6": 0,
                "a37_7": 0,
                "a38_1": 0,
                "a38_2": 0,
                "a38_3": 0,
                "a38_4": 0,
                "a38_5": 0,
                "a38_6": 0,
                "a38_7": 0,
                "a39_1": 0,
                "a39_2": 0,
                "a39_3": 0,
                "a39_4": 0,
                "a39_5": 0,
                "a39_6": 0,
                "a39_7": 0,
                "a40_6": 0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAproA"]),
            a7_1() {
                return ((this.a1_1 || 0) * Math.pow(10,this.fixed) + (this.a2_1 || 0) * Math.pow(10,this.fixed) - (this.a3_1 || 0) * Math.pow(10,this.fixed) - (this.a4_1 || 0) * Math.pow(10,this.fixed) - (this.a5_1 || 0) * Math.pow(10,this.fixed) - (this.a6_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a7_2() {
                return ((this.a1_2 || 0) * Math.pow(10,this.fixed) + (this.a2_2 || 0) * Math.pow(10,this.fixed) - (this.a3_2 || 0) * Math.pow(10,this.fixed) - (this.a4_2 || 0) * Math.pow(10,this.fixed) - (this.a5_2 || 0) * Math.pow(10,this.fixed) - (this.a6_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a13_1() {
                return ((this.a8_1 || 0) * Math.pow(10,this.fixed) + (this.a9_1 || 0) * Math.pow(10,this.fixed) + (this.a10_1 || 0) * Math.pow(10,this.fixed) - (this.a11_1 || 0) * Math.pow(10,this.fixed) + (this.a12_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a13_2() {
                return ((this.a8_2 || 0) * Math.pow(10,this.fixed) + (this.a9_2 || 0) * Math.pow(10,this.fixed) + (this.a10_2 || 0) * Math.pow(10,this.fixed) - (this.a11_2 || 0) * Math.pow(10,this.fixed) + (this.a12_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a19_1() {
                return ((this.a14_1 || 0) * Math.pow(10,this.fixed) + (this.a15_1 || 0) * Math.pow(10,this.fixed) - (this.a16_1 || 0) * Math.pow(10,this.fixed) - (this.a11_1 || 0) * Math.pow(10,this.fixed) - (this.a17_1 || 0) * Math.pow(10,this.fixed) - (this.a18_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a19_2() {
                return ((this.a14_2 || 0) * Math.pow(10,this.fixed) + (this.a15_2 || 0) * Math.pow(10,this.fixed) - (this.a16_2 || 0) * Math.pow(10,this.fixed) - (this.a11_1 || 0) * Math.pow(10,this.fixed) - (this.a17_2 || 0) * Math.pow(10,this.fixed) - (this.a18_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a20_1() {
                return ((this.a7_1 || 0) * Math.pow(10,this.fixed) + (this.a13_1 || 0) * Math.pow(10,this.fixed) + (this.a119_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a20_2() {
                return ((this.a7_2 || 0) * Math.pow(10,this.fixed) + (this.a13_2 || 0) * Math.pow(10,this.fixed) + (this.a119_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a22_1() {
                return ((this.a20_1 || 0) * Math.pow(10,this.fixed) + (this.a21_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a22_2() {
                return ((this.a20_2 || 0) * Math.pow(10,this.fixed) + (this.a21_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            }

        },
        watch: {
            getTableAproA(newVal) {
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
                    "uid": "545",
                    "mon": "2017-09-07",
                    "year": "2017",
                    "userId": "1",
                    "id":this.id
                };
                for(let i=1;i<=22;i++){
                    for(let j=1;j<=2;j++){
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
                store.dispatch("editAproA", {
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
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableAproA",{
                data:{
                    "uid": 1,
                    "mon": 12,
                    "year": 2016,
                    "userId":104
                },
                always:()=>{
                    loading.close();
                }
            }); 
        }
    }
</script>

<style lang="scss" scoped>
    .excel30{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>