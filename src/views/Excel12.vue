<template>
    <div class="excel excel12">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width: 60px"/>
                <col style="width: 25%"/>
                <col style="width: 8%"/>
                <col style="width: 8%"/>
                <col style="width: 8%"/>
                <col style="width: 8%"/>
                <col style="width: 8%"/>
                <col style="width: 8%"/>
                <col style="width: 8%"/>
                <tbody>
                    <tr>
                        <td colspan="9" class="ta-c">企业重组纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="3">行次</td>
                        <td class="blue ta-c" rowspan="3">项目</td>
                        <td class="blue ta-c" colspan="3">一般性税务处理</td>
                        <td class="blue ta-c" colspan="3">特殊性税务处理</td>
                        <td class="blue ta-c" rowspan="2">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">账载金额</td>
                        <td class="blue ta-c">税收金额</td>
                        <td class="blue ta-c">纳税调整金额</td>
                        <td class="blue ta-c">账载金额</td>
                        <td class="blue ta-c">税收金额</td>
                        <td class="blue ta-c" style="border-right: 1px solid #dfe6ec;">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3(2-1)</td>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c">5</td>
                        <td class="blue ta-c">6(5-4)</td>
                        <td class="blue ta-c">7(3+6)</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">1</td>
                        <td style="width:25%" class="blue">一、债务重组</td>
                        <td class="green"><number-input v-model="a1_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a1_3"></number-display></td>
                        <td class="green"><number-input v-model="a1_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a1_6"></number-display></td>
                        <td><number-display :value="a1_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">2</td>
                        <td style="width:25%" class="blue ti-2">其中：以非货币性资产清偿债务</td>
                        <td class="green"><number-input v-model="a2_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_3"></number-display></td>
                        <td class="green"><number-input v-model="a2_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_6"></number-display></td>
                        <td><number-display :value="a2_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">3</td>
                        <td style="width:25%" class="blue ti-4">债转股</td>
                        <td class="green"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a3_3"></number-display></td>
                        <td class="green"><number-input v-model="a3_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a3_6"></number-display></td>
                        <td><number-display :value="a3_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">4</td>
                        <td style="width:25%" class="blue">二、股权收购</td>
                        <td class="green"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_3"></number-display></td>
                        <td class="green"><number-input v-model="a4_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_6"></number-display></td>
                        <td><number-display :value="a4_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">5</td>
                        <td style="width:25%" class="blue ti-2">其中：涉及跨境重组的股权收购</td>
                        <td class="green"><number-input v-model="a5_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a5_3"></number-display></td>
                        <td class="green"><number-input v-model="a5_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a5_6"></number-display></td>
                        <td><number-display :value="a5_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">6</td>
                        <td style="width:25%" class="blue">三、资产收购</td>
                        <td class="green"><number-input v-model="a6_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a6_3"></number-display></td>
                        <td class="green"><number-input v-model="a6_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a6_6"></number-display></td>
                        <td><number-display :value="a6_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">7</td>
                        <td style="width:25%" class="blue ti-2">其中：涉及跨境重组的资产收购</td>
                        <td class="green"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a7_3"></number-display></td>
                        <td class="green"><number-input v-model="a7_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a7_6"></number-display></td>
                        <td><number-display :value="a7_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">8</td>
                        <td style="width:25%" class="blue">四、企业合并（9+10）</td>
                        <td><number-display :value="a8_1"></number-display></td>
                        <td><number-display :value="a8_2"></number-display></td>
                        <td><number-display :value="a8_3"></number-display></td>
                        <td><number-display :value="a8_4"></number-display></td>
                        <td><number-display :value="a8_5"></number-display></td>
                        <td><number-display :value="a8_6"></number-display></td>
                        <td><number-display :value="a8_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">9</td>
                        <td style="width:25%" class="blue ti-2">其中：同一控制下企业合并</td>
                        <td class="green"><number-input v-model="a9_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a9_3"></number-display></td>
                        <td class="green"><number-input v-model="a9_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a9_6"></number-display></td>
                        <td><number-display :value="a9_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">10</td>
                        <td style="width:25%" class="blue ti-4">非同一控制下企业合并</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a10_3"></number-display></td>
                        <td class="green"><number-input v-model="a10_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a10_6"></number-display></td>
                        <td><number-display :value="a10_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">11</td>
                        <td style="width:25%" class="blue">五、企业分立</td>
                        <td class="green"><number-input v-model="a11_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a11_3"></number-display></td>
                        <td class="green"><number-input v-model="a11_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a11_6"></number-display></td>
                        <td><number-display :value="a11_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">12</td>
                        <td style="width:25%" class="blue">六、其他</td>
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a12_3"></number-display></td>
                        <td class="green"><number-input v-model="a12_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a12_6"></number-display></td>
                        <td><number-display :value="a12_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">13</td>
                        <td style="width:25%" class="blue ti-2">其中：以非货币性资产对外投资</td>
                        <td class="green"><number-input v-model="a13_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a13_3"></number-display></td>
                        <td class="green"><number-input v-model="a13_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_5" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a13_6"></number-display></td>
                        <td><number-display :value="a13_7"></number-display></td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">14</td>
                        <td style="width:25%" class="blue">合计（1+4+6+8+11+12）</td>
                        <td><number-display :value="a14_1"></number-display></td>
                        <td><number-display :value="a14_2"></number-display></td>
                        <td><number-display :value="a14_3"></number-display></td>
                        <td><number-display :value="a14_4"></number-display></td>
                        <td><number-display :value="a14_5"></number-display></td>
                        <td><number-display :value="a14_6"></number-display></td>
                        <td><number-display :value="a14_7"></number-display></td>
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
            NumberInput,
            NumberDisplay
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