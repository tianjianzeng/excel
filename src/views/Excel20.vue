<template>
    <div class="excel excel20">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="20">研发费用加计扣除优惠明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%"class="blue" rowspan="3">行次</td>
                        <td style="width:75%" class="blue" rowspan="2">研发项目</td>
                        <td style="width:20%" class="blue" colspan="9">本年研发费用明细</td>
                        <td style="width:75%" class="blue" rowspan="2">减:作为不征税收入处理的财政性资金用于研发的部分</td>
                        <td style="width:75%" class="blue" rowspan="2">可加计扣除的研发费用合计</td>
                        <td style="width:20%" class="blue" colspan="2">费用化部分</td>
                        <td style="width:20%" class="blue" colspan="4">资本化部分</td>
                        <td style="width:20%" class="blue" rowspan="2">本年研发费用加计扣除额合计</td>
                    </tr>
                    <tr>
                        <td class="blue">研发活动直接消耗的材料、燃料和动力费用</td>
                        <td class="blue">直接从事研发活动的本企业在职人员费用</td>
                        <td class="blue">专门用于研发活动的有关折旧费、租赁费、运行维护费</td>
                        <td class="blue">专门用于研发活动的有关无形资产摊销费</td>
                        <td class="blue">中间试验和产品试制的有关费用，样品、样机及一般测试手段购置费</td>
                        <td class="blue">研发成果论证、评审、验收、鉴定费用</td>
                        <td class="blue">勘探开发技术的现场试验费，新药研制的临床试验费</td>
                        <td class="blue">设计、制定、资料和翻译费用</td>
                        <td class="blue">年度研发费用合计</td>
                        <td class="blue">计入本年损益的金额</td>
                        <td class="blue">计入本年研发费用加计扣除额</td>
                        <td class="blue">本年形成无形资产的金额</td>
                        <td class="blue">本年形成无形资产加计摊销额</td>
                        <td class="blue">以前年度形成无形资产本年加计摊销额</td>
                        <td class="blue">无形资产本年加计摊销额</td>
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
                        <td class="blue">10（2+3+4+5+6+7+8+9）</td>
                        <td class="blue">11</td>
                        <td class="blue">12（10-11）</td>
                        <td class="blue">13</td>
                        <td class="blue">14（13×50%）</td>
                        <td class="blue">15</td>
                        <td class="blue">16</td>
                        <td class="blue">17</td>
                        <td class="blue">18（16+17）</td>
                        <td class="blue">19（14+18）</td>
                    </tr>
                    <tr>
                        <td class="blue">001</td>
                        <td>研发费用</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%;" class="blue"></td>
                        <td style="width:5%;" class="blue">合计</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
                        <td style="width:5%;">{{0|formatCurrency}}</td>
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
        name: 'excel20',
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
    .excel20{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="20"]{
            text-align: center;
        }
    }
</style>