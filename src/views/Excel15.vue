<template>
    <div class="excel excel14">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="5">特殊行业准备金纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue" rowspan="2">行次</td>
                        <td style="width:65%" class="blue" rowspan="2">项目</td>
                        <td style="width:10%" class="blue">账载金额</td>
                        <td style="width:10%" class="blue">税收金额</td>
                        <td style="width:10%" class="blue">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">一、保险公司（2+3+6+7+8+9+10）</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">（一）未到期责任准备金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">（二）未决赔款准备金（4+5）</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">其中：已发生已报案未决赔款准备金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">已发生未报案未决赔款准备金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">（三）巨灾风险准备金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">（四）寿险责任准备金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">（五）长期健康险责任准备金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">（六）保险保障基金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">（七）其他</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">二、证券行业（12+13+14+15）</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">（一）证券交易所风险基金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">（二）证券结算风险基金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">（三）证券投资者保护基金</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">（四）其他</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>

16	三、期货行业（17+18+19+20）	本列（17行加至20行）	本列（17行加至20行）	本行（1列-2列）
17	   （一）期货交易所风险准备金	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
18	   （二）期货公司风险准备金	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
19	   （三）期货投资者保障基金	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
20	   （四）其他	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
21	四、金融企业（22+23+24)	本列（22行加至24行）	本列（22行加至24行）	本行（1列-2列）
22	   （一）涉农和中小企业贷款损失准备金	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
23	   （二）贷款损失准备金	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
24	   （三）其他	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
25	五、中小企业信用担保机构(26+27+28)	本列（26行加至28行）	本列（26行加至28行）	本行（1列-2列）
26	   （一）担保赔偿准备	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
27	   （二）未到期责任准备	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
28	   （三）其他	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
29	六、其他	默认0.00，手工修改	默认0.00，手工修改	本行（1列-2列）
30	合计(1+11+16+21+25+29)	本列（1行+11行+16行+21行+25行+29行）	本列（1行+11行+16行+21行+25行+29行）	本行（1列-2列）

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
        name: 'excel14',
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
    .excel14{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>