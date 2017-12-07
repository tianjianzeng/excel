<template>
    <div class="excel excel12">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="9">企业重组纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="3">行次</td>
                        <td class="blue" rowspan="3">项目</td>
                        <td class="blue" colspan="3">一般性税务处理</td>
                        <td class="blue" colspan="3">特殊性税务处理</td>
                        <td class="blue" rowspan="2">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue">账载金额</td>
                        <td class="blue">税收金额</td>
                        <td class="blue">纳税调整金额</td>
                        <td class="blue">账载金额</td>
                        <td class="blue">税收金额</td>
                        <td class="blue">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3(2-1)</td>
                        <td class="blue">4</td>
                        <td class="blue">5</td>
                        <td class="blue">6(5-4)</td>
                        <td class="blue">7(3+6)</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">1</td>
                        <td style="width:25%" class="blue">一、债务重组</td>
                        <td class="green"><number-input v-model="a1_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td>{{a1_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_5" :fixed="fixed"></number-input></td>
                        <td>{{a1_6|formatCurrency}}</td>
                        <td>{{a1_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">2</td>
                        <td style="width:25%" class="blue">其中：以非货币性资产清偿债务</td>
                        <td class="green"><number-input v-model="a2_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                        <td>{{a2_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a2_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_5" :fixed="fixed"></number-input></td>
                        <td>{{a2_6|formatCurrency}}</td>
                        <td>{{a2_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">3</td>
                        <td style="width:25%" class="blue">债转股</td>
                        <td class="green"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                        <td>{{a3_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{a3_6|formatCurrency}}</td>
                        <td>{{a3_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">4</td>
                        <td style="width:25%" class="blue">二、股权收购</td>
                        <td class="green"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                        <td>{{a4_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a4_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_5" :fixed="fixed"></number-input></td>
                        <td>{{a4_6|formatCurrency}}</td>
                        <td>{{a4_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">5</td>
                        <td style="width:25%" class="blue">其中：涉及跨境重组的股权收购</td>
                        <td class="green"><number-input v-model="a5_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                        <td>{{a5_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a5_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_5" :fixed="fixed"></number-input></td>
                        <td>{{a5_6|formatCurrency}}</td>
                        <td>{{a5_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">6</td>
                        <td style="width:25%" class="blue">三、资产收购</td>
                        <td class="green"><number-input v-model="a6_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                        <td>{{a6_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a6_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_5" :fixed="fixed"></number-input></td>
                        <td>{{a6_6|formatCurrency}}</td>
                        <td>{{a6_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">7</td>
                        <td style="width:25%" class="blue">其中：涉及跨境重组的资产收购</td>
                        <td class="green"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                        <td>{{a7_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a7_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_5" :fixed="fixed"></number-input></td>
                        <td>{{a7_6|formatCurrency}}</td>
                        <td>{{a7_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">8</td>
                        <td style="width:25%" class="blue">四、企业合并（9+10）</td>
                        <td>{{a8_1|formatCurrency}}</td>
                        <td>{{a8_2|formatCurrency}}</td>
                        <td>{{a8_3|formatCurrency}}</td>
                        <td>{{a8_4|formatCurrency}}</td>
                        <td>{{a8_5|formatCurrency}}</td>
                        <td>{{a8_6|formatCurrency}}</td>
                        <td>{{a8_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">9</td>
                        <td style="width:25%" class="blue">其中：同一控制下企业合并</td>
                        <td class="green"><number-input v-model="a9_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                        <td>{{a9_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a9_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_5" :fixed="fixed"></number-input></td>
                        <td>{{a9_6|formatCurrency}}</td>
                        <td>{{a9_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">10</td>
                        <td style="width:25%" class="blue">非同一控制下企业合并</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                        <td>{{a10_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a10_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_5" :fixed="fixed"></number-input></td>
                        <td>{{a10_6|formatCurrency}}</td>
                        <td>{{a10_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">11</td>
                        <td style="width:25%" class="blue">五、企业分立</td>
                        <td class="green"><number-input v-model="a11_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                        <td>{{a11_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a11_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_5" :fixed="fixed"></number-input></td>
                        <td>{{a11_6|formatCurrency}}</td>
                        <td>{{a11_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">12</td>
                        <td style="width:25%" class="blue">六、其他</td>
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                        <td>{{a12_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a12_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_5" :fixed="fixed"></number-input></td>
                        <td>{{a12_6|formatCurrency}}</td>
                        <td>{{a12_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">13</td>
                        <td style="width:25%" class="blue">其中：以非货币性资产对外投资</td>
                        <td class="green"><number-input v-model="a13_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed"></number-input></td>
                        <td>{{a13_3|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a13_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_5" :fixed="fixed"></number-input></td>
                        <td>{{a13_6|formatCurrency}}</td>
                        <td>{{a13_7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue">14</td>
                        <td style="width:25%" class="blue">合计（1+4+6+8+11+12）</td>
                        <td>{{a14_1|formatCurrency}}</td>
                        <td>{{a14_2|formatCurrency}}</td>
                        <td>{{a14_3|formatCurrency}}</td>
                        <td>{{a14_4|formatCurrency}}</td>
                        <td>{{a14_5|formatCurrency}}</td>
                        <td>{{a14_6|formatCurrency}}</td>
                        <td>{{a14_7|formatCurrency}}</td>
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
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel12',
        data() {
            return {
                fixed:2,
                a1_1:0,
                a2_1:0,
                a3_1:0,
                a4_1:0,
                a5_1:0,
                a6_1:0,
                a7_1:0,
                a9_1:0,
                a10_1:0,
                a11_1:0,
                a12_1:0,
                a13_1:0,
                a1_2:0,
                a2_2:0,
                a3_2:0,
                a4_2:0,
                a5_2:0,
                a6_2:0,
                a7_2:0,
                a9_2:0,
                a10_2:0,
                a11_2:0,
                a12_2:0,
                a13_2:0,
                a1_4:0,
                a2_4:0,
                a3_4:0,
                a4_4:0,
                a5_4:0,
                a6_4:0,
                a7_4:0,
                a9_4:0,
                a10_4:0,
                a11_4:0,
                a12_4:0,
                a13_4:0,
                a1_5:0,
                a2_5:0,
                a3_5:0,
                a4_5:0,
                a5_5:0,
                a6_5:0,
                a7_5:0,
                a9_5:0,
                a10_5:0,
                a11_5:0,
                a12_5:0,
                a13_5:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA105100"]),
            a1_3(){
                return (this.a1_2 * Math.pow(10, this.fixed) - this.a1_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a2_3(){
                return (this.a2_2 * Math.pow(10, this.fixed) - this.a2_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a3_3(){
                return (this.a3_2 * Math.pow(10, this.fixed) - this.a3_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a4_3(){
                return (this.a4_2 * Math.pow(10, this.fixed) - this.a4_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a5_3(){
                return (this.a5_2 * Math.pow(10, this.fixed) - this.a5_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a6_3(){
                return (this.a6_2 * Math.pow(10, this.fixed) - this.a6_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a7_3(){
                return (this.a7_2 * Math.pow(10, this.fixed) - this.a7_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_1(){
                return (this.a9_1 * Math.pow(10, this.fixed) + this.a10_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_2(){
                return (this.a9_2 * Math.pow(10, this.fixed) + this.a10_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_3(){
                return (this.a8_2 * Math.pow(10, this.fixed) - this.a8_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_4(){
                return (this.a9_4 * Math.pow(10, this.fixed) + this.a10_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_5(){
                return (this.a9_5 * Math.pow(10, this.fixed) + this.a10_5 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a9_3(){
                return (this.a9_2 * Math.pow(10, this.fixed) - this.a9_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a10_3(){
                return (this.a10_2 * Math.pow(10, this.fixed) - this.a10_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a11_3(){
                return (this.a11_2 * Math.pow(10, this.fixed) - this.a11_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a12_3(){
                return (this.a12_2 * Math.pow(10, this.fixed) - this.a12_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a13_3(){
                return (this.a13_2 * Math.pow(10, this.fixed) - this.a13_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a1_6(){
                return (this.a1_5 * Math.pow(10, this.fixed) - this.a1_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a2_6(){
                return (this.a2_5 * Math.pow(10, this.fixed) - this.a2_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a3_6(){
                return (this.a3_5 * Math.pow(10, this.fixed) - this.a3_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a4_6(){
                return (this.a4_5 * Math.pow(10, this.fixed) - this.a4_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a5_6(){
                return (this.a5_5 * Math.pow(10, this.fixed) - this.a5_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a6_6(){
                return (this.a6_5 * Math.pow(10, this.fixed) - this.a6_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a7_6(){
                return (this.a7_5 * Math.pow(10, this.fixed) - this.a7_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_6(){
                return (this.a8_5 * Math.pow(10, this.fixed) - this.a8_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a9_6(){
                return (this.a9_5 * Math.pow(10, this.fixed) - this.a9_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a10_6(){
                return (this.a10_5 * Math.pow(10, this.fixed) - this.a10_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a11_6(){
                return (this.a11_5 * Math.pow(10, this.fixed) - this.a11_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a12_6(){
                return (this.a12_5 * Math.pow(10, this.fixed) - this.a12_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a13_6(){
                return (this.a13_5 * Math.pow(10, this.fixed) - this.a13_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a1_7(){
                return (this.a1_3 * Math.pow(10, this.fixed) + this.a1_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a2_7(){
                return (this.a2_3 * Math.pow(10, this.fixed) + this.a2_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a3_7(){
                return (this.a3_3 * Math.pow(10, this.fixed) + this.a3_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a4_7(){
                return (this.a4_3 * Math.pow(10, this.fixed) + this.a4_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a5_7(){
                return (this.a5_3 * Math.pow(10, this.fixed) + this.a5_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a6_7(){
                return (this.a6_3 * Math.pow(10, this.fixed) + this.a6_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a7_7(){
                return (this.a7_3 * Math.pow(10, this.fixed) + this.a7_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a8_7(){
                return (this.a8_3 * Math.pow(10, this.fixed) + this.a8_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a9_7(){
                return (this.a9_3 * Math.pow(10, this.fixed) + this.a9_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a10_7(){
                return (this.a10_3 * Math.pow(10, this.fixed) + this.a10_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a11_7(){
                return (this.a11_3 * Math.pow(10, this.fixed) + this.a11_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a12_7(){
                return (this.a12_3 * Math.pow(10, this.fixed) + this.a12_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a13_7(){
                return (this.a13_3 * Math.pow(10, this.fixed) + this.a13_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_1(){
                return (this.a1_1 * Math.pow(10, this.fixed) + this.a4_1 * Math.pow(10, this.fixed) + this.a6_1 * Math.pow(10, this.fixed) + this.a8_1 * Math.pow(10, this.fixed) + this.a11_1 * Math.pow(10, this.fixed) + this.a12_1 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_2(){
                return (this.a1_2 * Math.pow(10, this.fixed) + this.a4_2 * Math.pow(10, this.fixed) + this.a6_2 * Math.pow(10, this.fixed) + this.a8_2 * Math.pow(10, this.fixed) + this.a11_2 * Math.pow(10, this.fixed) + this.a12_2 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_3(){
                return (this.a1_3 * Math.pow(10, this.fixed) + this.a4_3 * Math.pow(10, this.fixed) + this.a6_3 * Math.pow(10, this.fixed) + this.a8_3 * Math.pow(10, this.fixed) + this.a11_3 * Math.pow(10, this.fixed) + this.a12_3 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_4(){
                return (this.a1_4 * Math.pow(10, this.fixed) + this.a4_4 * Math.pow(10, this.fixed) + this.a6_4 * Math.pow(10, this.fixed) + this.a8_4 * Math.pow(10, this.fixed) + this.a11_4 * Math.pow(10, this.fixed) + this.a12_4 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_5(){
                return (this.a1_5 * Math.pow(10, this.fixed) + this.a4_5 * Math.pow(10, this.fixed) + this.a6_5 * Math.pow(10, this.fixed) + this.a8_5 * Math.pow(10, this.fixed) + this.a11_5 * Math.pow(10, this.fixed) + this.a12_5 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_6(){
                return (this.a1_6 * Math.pow(10, this.fixed) + this.a4_6 * Math.pow(10, this.fixed) + this.a6_6 * Math.pow(10, this.fixed) + this.a8_6 * Math.pow(10, this.fixed) + this.a11_6 * Math.pow(10, this.fixed) + this.a12_6 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            },
            a14_7(){
                return (this.a1_7 * Math.pow(10, this.fixed) + this.a4_7 * Math.pow(10, this.fixed) + this.a6_7 * Math.pow(10, this.fixed) + this.a8_7 * Math.pow(10, this.fixed) + this.a11_7 * Math.pow(10, this.fixed) + this.a12_7 * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
            }
        },
        watch: {
            getTableA105100(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                }
            }
        },
        methods:{
            save(){
                let postData = {
                    "uid":this.uid,
                    "year":this.year,
                    "userId":this.userId
                };
                for(let i=1;i<=14;i++){
                    for(let j=1;j<=7;j++){
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
                store.dispatch("editA105100", {
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
                store.dispatch("getTableA105100",{
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
                    urlParam:"a105100",
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