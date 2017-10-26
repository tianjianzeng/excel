<template>
    <div class="excel excel09">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="16">专项用途财政性资金纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="4">行次</td>
                        <td class="blue" rowspan="4">项目</td>
                        <td class="blue" rowspan="3">取得年度</td>
                        <td class="blue" rowspan="3">财政性资金</td>
                        <td class="blue" colspan="2" rowspan="2">其中：符合不征税收入条件的财政性资金</td>
                        <td class="blue" colspan="5">以前年度支出情况</td>
                        <td class="blue" colspan="2">本年支出情况</td>
                        <td class="blue" colspan="3">本年结余情况</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="2">前五年度</td>
                        <td class="blue" rowspan="2">前四年度</td>
                        <td class="blue" rowspan="2">前三年度</td>
                        <td class="blue" rowspan="2">前二年度</td>
                        <td class="blue" rowspan="2">前一年度</td>
                        <td class="blue" rowspan="2">支出金额</td>
                        <td class="blue" rowspan="2">其中：费用化支出金额</td>
                        <td class="blue" rowspan="2">结余金额</td>
                        <td class="blue" rowspan="2">其中：上缴财政金额</td>
                        <td class="blue" rowspan="2">应计入本年应税收入金额</td>
                    </tr>
                    <tr>
                        <td class="blue">金额</td>
                        <td class="blue" style="border-right: 1px solid #dfe6ec;">其中：计入本年损益的金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                        <td class="blue">4</td>
                        <td class="blue">5</td>
                        <td class="blue">6</td>
                        <td class="blue">7</td>
                        <td class="blue">8</td>
                        <td class="blue">9</td>
                        <td class="blue">10</td>
                        <td class="blue">11</td>
                        <td class="blue">12</td>
                        <td class="blue">13</td>
                        <td class="blue">14</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:5%" class="blue">前五年度</td>
                        <td style="width:5%">所得税汇缴所属年度-5</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:5%" class="blue">前四年度</td>
                        <td style="width:5%">所得税汇缴所属年度-4</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:5%" class="blue">前三年度</td>
                        <td style="width:5%">所得税汇缴所属年度-3</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:5%" class="blue">前二年度</td>
                        <td style="width:5%">所得税汇缴所属年度-2</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:5%" class="blue">前一年度</td>
                        <td style="width:5%">所得税汇缴所属年度-1</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:5%" class="blue">本    年</td>
                        <td style="width:5%">所得税汇缴所属年度-1</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td style="width:5%" class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:5%" class="blue">合计（1+2+3+4+5+6）</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%">{{0|formatCurrency}}</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:5%" class="blue">*</td>
                        <td style="width:10%">{{0|formatCurrency}}</td>
                        <td style="width:10%">{{0|formatCurrency}}</td>
                        <td style="width:5%">{{0|formatCurrency}}</td>
                        <td style="width:10%">{{0|formatCurrency}}</td>
                        <td style="width:10%">{{0|formatCurrency}}</td>
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
        name: 'excel09',
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
    .excel09{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="16"]{
            text-align: center;
        }
    }
</style>