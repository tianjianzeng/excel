<template>
    <div class="excel excel22">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="3">减免所得税优惠明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%"class="blue">行次</td>
                        <td style="width:75%" class="blue" colspan="2">项目</td>
                        <td style="width:20%" class="blue">金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue" colspan="2">一、符合条件的小型微利企业 </td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue" colspan="2">   其中：减半征税</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue" colspan="2">二、国家需要重点扶持的高新技术企业（4+5）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue" colspan="2">   （一）高新技术企业低税率优惠（填写A107041）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue" colspan="2">   （二）经济特区和上海浦东新区新设立的高新技术企业（填写A107041）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue" colspan="2">三、其他专项优惠（7+8+9+10+11…+14+15+16+…+31）</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue" colspan="2">   （一）受灾地区损失严重的企业（7.1+7.2+7.3）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">7.1</td>
                        <td class="blue">     其中:1.</td>
                        <td class="blue">芦山受灾地区损失严重的企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">7.2</td>
                        <td class="blue">     2.</td>
                        <td class="blue">鲁甸受灾地区损失严重的企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">7.3</td>
                        <td class="blue">     3.</td>
                        <tdx></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue" colspan="2">    （二）受灾地区农村信用社（8.1+8.2+8.3）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">8.1</td>
                        <td class="blue">     其中:1.</td>
                        <td class="blue">芦山受灾地区损失严重的企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">8.2</td>
                        <td class="blue">     2.</td>
                        <td class="blue">鲁甸受灾地区农村信用社</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">8.3</td>
                        <td class="blue">     3.</td>
                        <tdx></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue" colspan="2">   （三）受灾地区的促进就业企业（9.1+9.2+9.3）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">9.1</td>
                        <td class="blue">     其中:1.</td>
                        <td class="blue">芦山受灾地区的促进就业企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">9.2</td>
                        <td class="blue">     2.</td>
                        <td class="blue">鲁甸受灾地区的促进就业企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">9.3</td>
                        <td class="blue">     3.</td>
                        <tdx></td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue" colspan="2">   （四）支持和促进重点群体创业就业企业（10.1+10.2+10.3）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>     
                    <tr>
                        <td class="blue">10.1</td>
                        <td class="blue" colspan="2">      其中:1.下岗失业人员再就业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue">10.2</td>
                        <td class="blue" colspan="2">          2.高校毕业生就业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue">10.3</td>
                        <td class="blue" colspan="2">          3.退役士兵就业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>    
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue" colspan="2">   （五）技术先进型服务企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue" colspan="2">   （六）动漫企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue" colspan="2">  （七）集成电路线宽小于0.8微米（含）的集成电路生产企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue" colspan="2">   （八）集成电路线宽小于0.25微米的集成电路生产企业（14.1+14.2）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">14.1</td>
                        <td class="blue" colspan="2">     其中：1.定期减免企业所得税</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue">14.2</td>
                        <td class="blue" colspan="2">           2.减按15%税率征收企业所得税</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue" colspan="2">   （九）投资额超过80亿元人民币的集成电路生产企业（15.1+15.2）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">14.1</td>
                        <td class="blue" colspan="2">     其中：1.定期减免企业所得税</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>   
                    <tr>
                        <td class="blue">14.2</td>
                        <td class="blue" colspan="2">           2.减按15%税率征收企业所得税</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue" colspan="2">   （十）新办集成电路设计企业（填写A107042）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue" colspan="2">   （十一）国家规划布局内重点集成电路设计企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue" colspan="2">   （十二）集成电路封装、测试企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue" colspan="2">    （十三）集成电路关键专用材料生产企业或集成电路专用设备生产企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue" colspan="2">   （十四）符合条件的软件企业（填写A107042）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue" colspan="2">   （十五）国家规划布局内重点软件企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue" colspan="2">   （十六）经营性文化事业单位转制企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue" colspan="2">  （十七）符合条件的生产和装配伤残人员专门用品企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue" colspan="2">   （十八）设在西部地区的鼓励类产业企业</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue" colspan="2">   （十九）新疆困难地区新办企业</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue" colspan="2">    （二十）新疆喀什、霍尔果斯特殊经济开发区新办企业</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue" colspan="2">   （二十一）横琴新区、平潭综合实验区和前海深港现代化服务业合作区企业</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue" colspan="2">   （二十二）享受过渡期税收优惠企业</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue">   （二十三）其他1</td>
                        <td class="blue"> 详见批注</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">30</td>
                        <td class="blue">   （二十四）其他2</td>
                        <td class="blue">详见批注</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">31</td>
                        <td class="blue">   （二十五）其他3</td>
                        <td class="blue">详见批注</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">32</td>
                        <td class="blue" colspan="2">四、减：项目所得额按法定税率减半征收企业所得税叠加享受减免税优惠</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">33</td>
                        <td class="blue" colspan="2">四、减：项目所得额按法定税率减半征收企业所得税叠加享受减免税优惠</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">34</td>
                        <td class="blue" colspan="2">合计：（1+3+6-32+33）</td>
                        <td>{{0|formatCurrency}}</td>
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
        name: 'excel22',
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
    .excel22{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>