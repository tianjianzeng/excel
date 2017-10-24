<template>
    <div class="excel excel03">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="4">中华人民共和国企业所得税年度纳税申报表（A类）</td>
                    </tr>
                    <tr>
                        <td style="width: 5%">行次</td>
                        <td style="width: 15%">类别</td>
                        <td style="width: 60%">项目</td>
                        <td style="width: 20%">金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue" rowspan="13">利润总和计算</td>
                        <td class="blue">一、营业收入(填写A101010\101020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">减：营业成本(填写A102010\102020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">营业税金及附加</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">销售费用(填写A104000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">管理费用(填写A104000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">财务费用(填写A104000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">资产减值损失</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">加：公允价值变动收益</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">投资收益</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">二、营业利润(1-2-3-4-5-6-7+8+9)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">加：营业外收入(填写A101010\101020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">减：营业外支出(填写A102010\102020\103000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">三、利润总额（10+11-12）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue" rowspan="10">应纳税所得额计算</td>
                        <td class="blue">减：境外所得（填写A108010）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">加：纳税调整增加额（填写A105000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue">减：纳税调整减少额（填写A105000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue">减：免税、减计收入及加计扣除（填写A107010）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue">加：境外应税所得抵减境内亏损（填写A108000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue">四、纳税调整后所得（13-14+15-16-17+18）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue">减：所得减免（填写A107020）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue">减：抵扣应纳税所得额（填写A107030）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue">减：弥补以前年度亏损（填写A106000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue">五、应纳税所得额（19-20-21-22）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue" rowspan="13">应纳税额计算</td>
                        <td class="blue">税率（25%）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue">六、应纳所得税额（23×24）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue">减：减免所得税额（填写A107040）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue">减：抵免所得税额（填写A107050）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue">七、应纳税额（25-26-27）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>   
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue">加：境外所得应纳所得税额（填写A108000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">30</td>
                        <td class="blue">减：境外所得抵免所得税额（填写A108000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>   
                    <tr>
                        <td class="blue">31</td>
                        <td class="blue">八、实际应纳所得税额（28+29-30）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">32</td>
                        <td class="blue">减：本年累计实际已预缴的所得税额</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">33</td>
                        <td class="blue">九、本年应补（退）所得税额（31-32）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">34</td>
                        <td class="blue">其中：总机构分摊本年应补（退）所得税额(填写A109000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">35</td>
                        <td class="blue">财政集中分配本年应补（退）所得税额（填写A109000）</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">36</td>
                        <td class="blue">总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue">37</td>
                        <td class="blue" rowspan="2">附列资料</td>
                        <td class="blue">以前年度多缴的所得税额在本年抵减额</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">38</td>
                        <td class="blue">以前年度应缴未缴在本年入库所得税额</td>
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
        name: 'excel01',
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
    .excel02{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="7"]{
            text-align: center;
        }
    }
    button{
        margin-top: 30px;
    }
</style>