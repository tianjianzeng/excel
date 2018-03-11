<template>
    <div class="excel excel14">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width:60px" />
                <col style="width:25%"/>
                <col style="width:22%"/>
                <col style="width:22%"/>
                <col style="width:21%"/>
                <tbody>
                    <tr>
                        <td colspan="5" class="ta-c">特殊行业准备金纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c" rowspan="2">行次</td>
                        <td style="width:25%" class="blue ta-c" rowspan="2">项目</td>
                        <td style="width:22%" class="blue ta-c">账载金额</td>
                        <td style="width:22%" class="blue ta-c">税收金额</td>
                        <td style="width:21%" class="blue ta-c">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3（1-2）</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue">一、保险公司（2+3+6+7+8+9+10）</td>
                        <td><number-display :value="a1_1"></number-display></td>
                        <td><number-display :value="a1_2"></number-display></td>
                        <td><number-display :value="a1_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue ti-2">（一）未到期责任准备金</td>
                        <td class="green"><number-input v-model="a2_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue ti-2">（二）未决赔款准备金（4+5）</td>
                        <td><number-display :value="a3_1"></number-display></td>
                        <td><number-display :value="a3_2"></number-display></td>
                        <td><number-display :value="a3_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue ti-4">其中：已发生已报案未决赔款准备金</td>
                        <td class="green"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue ti-6">已发生未报案未决赔款准备金</td>
                        <td class="green"><number-input v-model="a5_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a5_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue ti-2">（三）巨灾风险准备金</td>
                        <td class="green"><number-input v-model="a6_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a6_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue ti-2">（四）寿险责任准备金</td>
                        <td class="green"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a7_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue ti-2">（五）长期健康险责任准备金</td>
                        <td class="green"><number-input v-model="a8_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a8_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue ti-2">（六）保险保障基金</td>
                        <td class="green"><number-input v-model="a9_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a9_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue ti-2">（七）其他</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a10_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue">二、证券行业（12+13+14+15）</td>
                        <td><number-display :value="a11_1"></number-display></td>
                        <td><number-display :value="a11_2"></number-display></td>
                        <td><number-display :value="a11_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue ti-2">（一）证券交易所风险基金</td>
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a12_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue ti-2">（二）证券结算风险基金</td>
                        <td class="green"><number-input v-model="a13_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a13_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">14</td>
                        <td class="blue ti-2">（三）证券投资者保护基金</td>
                        <td class="green"><number-input v-model="a14_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a14_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">15</td>
                        <td class="blue ti-2">（四）其他</td>
                        <td class="green"><number-input v-model="a15_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a15_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">16</td>
                        <td class="blue">三、期货行业（17+18+19+20）</td>
                        <td><number-display :value="a16_1"></number-display></td>
                        <td><number-display :value="a16_2"></number-display></td>
                        <td><number-display :value="a16_3"></number-display></td>
                    </tr>
                     <tr>
                        <td class="blue ta-c">17</td>
                        <td class="blue ti-2">（一）期货交易所风险准备金</td>
                        <td class="green"><number-input v-model="a17_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a17_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a17_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">18</td>
                        <td class="blue ti-2">（二）期货公司风险准备金</td>
                        <td class="green"><number-input v-model="a18_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a18_3"></number-display></td>
                    </tr>
                     <tr>
                        <td class="blue ta-c">19</td>
                        <td class="blue ti-2">（三）期货投资者保障基金</td>
                        <td class="green"><number-input v-model="a19_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a19_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a19_3"></number-display></td>
                    </tr>
                     <tr>
                        <td class="blue ta-c">20</td>
                        <td class="blue ti-2">（四）其他</td>
                        <td class="green"><number-input v-model="a20_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a20_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a20_3"></number-display></td>
                    </tr>
                     <tr>
                        <td class="blue ta-c">21</td>
                        <td class="blue">四、金融企业（22+23+24)</td>
                        <td><number-display :value="a21_1"></number-display>
                        <td><number-display :value="a21_2"></number-display></td>
                        <td><number-display :value="a21_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">22</td>
                        <td class="blue ti-2">（一）涉农和中小企业贷款损失准备金</td>
                        <td class="green"><number-input v-model="a22_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a22_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">23</td>
                        <td class="blue ti-2">（二）贷款损失准备金</td>
                        <td class="green"><number-input v-model="a23_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a23_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a23_3"></number-display></td>
                    </tr>
                     <tr>
                        <td class="blue ta-c">24</td>
                        <td class="blue ti-2">（三）其他</td>
                        <td class="green"><number-input v-model="a24_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a24_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">25</td>
                        <td class="blue">五、中小企业信用担保机构(26+27+28)</td>
                        <td><number-display :value="a25_1"></number-display></td>
                        <td><number-display :value="a25_2"></number-display></td>
                        <td><number-display :value="a25_3"></number-display></td>
                    </tr>
                     <tr>
                        <td class="blue ta-c">26</td>
                        <td class="blue ti-2">（一）担保赔偿准备</td>
                        <td class="green"><number-input v-model="a26_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a26_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a26_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">27</td>
                        <td class="blue ti-2">（二）未到期责任准备</td>
                        <td class="green"><number-input v-model="a27_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a27_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a27_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">28</td>
                        <td class="blue ti-2">（三）其他</td>
                        <td class="green"><number-input v-model="a28_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a28_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">29</td>
                        <td class="blue">六、其他</td>
                        <td class="green"><number-input v-model="a29_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a29_2" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a29_3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">30</td>
                        <td class="blue">合计(1+11+16+21+25+29)</td>
                        <td><number-display :value="a30_1"></number-display></td>
                        <td><number-display :value="a30_2"></number-display></td>
                        <td><number-display :value="a30_3"></number-display></td>
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
        name: 'excel14',
        data() {
            return {
                fixed:2,
                "a2_1": 0,
                "a2_2": 0,
                "a4_1": 0,
                "a4_2": 0,
                "a5_1": 0,
                "a5_2": 0,
                "a6_1": 0,
                "a6_2": 0,
                "a7_1": 0,
                "a7_2": 0,
                "a8_1": 0,
                "a8_2": 0,
                "a9_1": 0,
                "a9_2": 0,
                "a10_1": 0,
                "a10_2": 0,
                "a12_1": 0,
                "a12_2": 0,
                "a13_1": 0,
                "a13_2": 0,
                "a14_1": 0,
                "a14_2": 0,
                "a15_1": 0,
                "a15_2": 0,
                "a17_1": 0,
                "a17_2": 0,
                "a18_1": 0,
                "a18_2": 0,
                "a19_1": 0,
                "a19_2": 0,
                "a20_1": 0,
                "a20_2": 0,
                "a22_1": 0,
                "a22_2": 0,
                "a23_1": 0,
                "a23_2": 0,
                "a24_1": 0,
                "a24_2": 0,
                "a26_1": 0,
                "a26_2": 0,
                "a27_1": 0,
                "a27_2": 0,
                "a28_1": 0,
                "a28_2": 0,
                "a29_1": 0,
                "a29_2": 0,
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
             ...mapGetters(["getTableA105120"]),
             a1_1() {
                return ((this.a2_1 || 0) * Math.pow(10,this.fixed) + (this.a3_1 || 0) * Math.pow(10,this.fixed) + (this.a6_1 || 0) * Math.pow(10,this.fixed) + (this.a7_1 || 0) * Math.pow(10,this.fixed) + (this.a8_1 || 0) * Math.pow(10,this.fixed) + (this.a9_1 || 0) * Math.pow(10,this.fixed) + (this.a10_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a1_2() {
                return ((this.a2_2 || 0) * Math.pow(10,this.fixed) + (this.a3_2 || 0) * Math.pow(10,this.fixed) + (this.a6_2 || 0) * Math.pow(10,this.fixed) + (this.a7_2 || 0) * Math.pow(10,this.fixed) + (this.a8_2 || 0) * Math.pow(10,this.fixed) + (this.a9_2 || 0) * Math.pow(10,this.fixed) + (this.a10_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a1_3() {
                return ((this.a1_1 || 0) * Math.pow(10,this.fixed) - (this.a1_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a2_3() {
                return ((this.a2_1 || 0) * Math.pow(10,this.fixed) - (this.a2_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a3_3() {
                return ((this.a3_1 || 0) * Math.pow(10,this.fixed) - (this.a3_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             }, 
             a4_3() {
                return ((this.a4_1 || 0) * Math.pow(10,this.fixed) - (this.a4_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a5_3() {
                return ((this.a5_1 || 0) * Math.pow(10,this.fixed) - (this.a5_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a6_3() {
                return ((this.a6_1 || 0) * Math.pow(10,this.fixed) - (this.a6_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a7_3() {
                return ((this.a7_1 || 0) * Math.pow(10,this.fixed) - (this.a7_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a8_3() {
                return ((this.a8_1 || 0) * Math.pow(10,this.fixed) - (this.a8_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a9_3() {
                return ((this.a9_1 || 0) * Math.pow(10,this.fixed) - (this.a9_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a10_3() {
                return ((this.a10_1 || 0) * Math.pow(10,this.fixed) - (this.a10_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a11_3() {
                return ((this.a11_1 || 0) * Math.pow(10,this.fixed) - (this.a11_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a12_3() {
                return ((this.a12_1 || 0) * Math.pow(10,this.fixed) - (this.a12_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a13_3() {
                return ((this.a13_1 || 0) * Math.pow(10,this.fixed) - (this.a13_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a14_3() {
                return ((this.a14_1 || 0) * Math.pow(10,this.fixed) - (this.a14_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a15_3() {
                return ((this.a15_1 || 0) * Math.pow(10,this.fixed) - (this.a15_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a16_3() {
                return ((this.a16_1 || 0) * Math.pow(10,this.fixed) - (this.a16_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a17_3() {
                return ((this.a17_1 || 0) * Math.pow(10,this.fixed) - (this.a17_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a18_3() {
                return ((this.a18_1 || 0) * Math.pow(10,this.fixed) - (this.a18_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a19_3() {
                return ((this.a19_1 || 0) * Math.pow(10,this.fixed) - (this.a19_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a20_3() {
                return ((this.a20_1 || 0) * Math.pow(10,this.fixed) - (this.a20_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a21_3() {
                return ((this.a21_1 || 0) * Math.pow(10,this.fixed) - (this.a21_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a22_3() {
                return ((this.a22_1 || 0) * Math.pow(10,this.fixed) - (this.a22_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a23_3() {
                return ((this.a23_1 || 0) * Math.pow(10,this.fixed) - (this.a23_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a24_3() {
                return ((this.a24_1 || 0) * Math.pow(10,this.fixed) - (this.a24_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a25_3() {
                return ((this.a25_1 || 0) * Math.pow(10,this.fixed) - (this.a25_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a26_3() {
                return ((this.a26_1 || 0) * Math.pow(10,this.fixed) - (this.a26_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a27_3() {
                return ((this.a27_1 || 0) * Math.pow(10,this.fixed) - (this.a27_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a28_3() {
                return ((this.a28_1 || 0) * Math.pow(10,this.fixed) - (this.a28_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a29_3() {
                return ((this.a29_1 || 0) * Math.pow(10,this.fixed) - (this.a29_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a30_3() {
                return ((this.a30_1 || 0) * Math.pow(10,this.fixed) - (this.a30_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a3_1() {
                return ((this.a4_1 || 0) * Math.pow(10,this.fixed) + (this.a5_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a3_2() {
                return ((this.a4_2 || 0) * Math.pow(10,this.fixed) + (this.a5_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a11_1() {
                let rst = 0;
                for(let i=12;i<=15;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a11_2() {
                let rst = 0;
                for(let i=12;i<=15;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a16_1() {
                let rst = 0;
                for(let i=17;i<=20;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a16_2() {
                let rst = 0;
                for(let i=17;i<=20;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a21_1() {
                let rst = 0;
                for(let i=22;i<=24;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a21_2() {
                let rst = 0;
                for(let i=22;i<=24;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a25_1() {
                let rst = 0;
                for(let i=26;i<=28;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a25_2() {
                let rst = 0;
                for(let i=26;i<=28;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
             },
             a30_1() {
                return ((this.a1_1 || 0) * Math.pow(10,this.fixed) + (this.a11_1 || 0) * Math.pow(10,this.fixed) + (this.a16_1 || 0) * Math.pow(10,this.fixed) + (this.a21_1 || 0) * Math.pow(10,this.fixed) + (this.a25_1 || 0) * Math.pow(10,this.fixed) + (this.a29_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a30_2() {
                return ((this.a1_2 || 0) * Math.pow(10,this.fixed) + (this.a11_2 || 0) * Math.pow(10,this.fixed) + (this.a16_2 || 0) * Math.pow(10,this.fixed) + (this.a21_2 || 0) * Math.pow(10,this.fixed) + (this.a25_2 || 0) * Math.pow(10,this.fixed) + (this.a29_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },

             
        },
        watch: {
            getTableA105120(newVal) {
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
                    "userId": this.userId
                };
                for(let i=1;i<=30;i++){
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
                store.dispatch("editA105120", {
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
                store.dispatch("getTableA105120",{
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
                    urlParam:"a105120",
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