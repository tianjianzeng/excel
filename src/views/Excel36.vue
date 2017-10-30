<template>
    <div class="excel excel36">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="3">利润表</td>
                   </tr>
                    <tr>
                        <td colspan="3">（适用执行企业会计准则的一般企业）</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td></td>
                        <td>单位：元</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:40%">项目</td>
                        <td class="blue" style="width:30%">本期金额</td>
                        <td class="blue" style="width:30%">上期金额</td>
                    </tr>
                    <tr>
                        <td class="blue">一、营业收入</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">减：营业成本</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue" >营业税金及附加/td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">  销售费用</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 管理费用</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">财务费用</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">资产减值损失</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">加：公允价值变动收益（损失以“-”号填列）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">投资收益/td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：对联营企业和合营企业的投资收益</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">二、营业利润（亏损以“-”号填列）</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">加：营业外收入</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">其中：非流动资产处置利得</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">减：营业外支出</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：非流动资产处置损失</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">三、利润总额（亏损总额以“-”号填列）</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">减：所得税费用</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">四、净利润（净亏损以“-”号填列）</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">五、其他综合收益的税后净额</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">（一）以后不能重分类进损益的其他综合收益</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">1.重新计量设定收益计划净负债或净资产的变动</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">2.权益法下在被投资单位不能重分类进损益的其他综合收益中享有的份额</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">（二）以后将重分类进损益的其他综合收益</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">1.权益法下在被投资单位以后将重分类进损益的其他综合收益中享有的份额</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">2.可供出售金融资产公允价值变动损益</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">3.将有至到期投资重分类可供出售金融资产损益</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">4.现金流经套期损益的有效部分</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">5.外币财务报表折算差额</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">六、综合收益总额</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                     <tr>
                        <td class="blue" colspan="3">七、每股收益：</td>
                    </tr> 
                    <tr>
                        <td class="blue">（一）基本每股收益</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">（二）稀释每股收益</td>
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
        name: 'excel36',
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
            
        },
        watch: {
            
        },
        methods:{
            save(){}
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>
    .excel36{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>