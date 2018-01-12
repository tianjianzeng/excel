<template>
    <div class="excel excel35">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="8">资产负债表</td>
                   </tr>
                    <tr>
                        <td colspan="8">（适用执行企业会计制度的公司）</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="2">单位：元</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:10%">资产</td>
                        <td class="blue" style="width:5%">行次</td>
                        <td class="blue" style="width:15%">年初数</td>
                        <td class="blue" style="width:15%">期末数</td>
                        <td class="blue" style="width:20%">负债和所有者权益（或股东权益）</td>
                        <td class="blue" style="width:5%">行次</td>
                        <td class="blue" style="width:15%">年初数</td>
                        <td class="blue" style="width:15%">期末数</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="4">流动资产：</td>
                        <td class="blue" colspan="4">流动负债：</td>
                    </tr>
                    <tr>
                        <td class="blue">货币资金</td>
                        <td class="blue">1</td>
                        <td class="green"><number-display :value="a1_1"></number-display></td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">短期借款</td>
                        <td class="blue">68</td>
                        <td class="green"><number-display :value="a68_1"></number-display></td>
                        <td class="green"><number-input v-model="a68_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">短期投资</td>
                        <td class="blue">2</td>
                        <td class="green"><number-display :value="a2_1"></number-display></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付票据</td>
                        <td class="blue">69</td>
                        <td class="green"><number-display :value="a69_1"></number-display></td>
                        <td class="green"><number-input v-model="a69_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收票据</td>
                        <td class="blue">3</td>
                        <td class="green"><number-display :value="a3_1"></number-display></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付账款</td>
                        <td class="blue">70</td>
                        <td class="green"><number-display :value="a70_1"></number-display></td>
                        <td class="green"><number-input v-model="a70_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收股利</td>
                        <td class="blue">4</td>
                        <td class="green"><number-display :value="a4_1"></number-display></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">预收帐款</td>
                        <td class="blue">71</td>
                        <td class="green"><number-display :value="a71_1"></number-display></td>
                        <td class="green"><number-input v-model="a71_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收利息</td>
                        <td class="blue">5</td>
                        <td class="green"><number-display :value="a5_1"></number-display></td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 应付工资</td>
                        <td class="blue">72</td>
                        <td class="green"><number-display :value="a72_1"></number-display></td>
                        <td class="green"><number-input v-model="a72_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收账款</td>
                        <td class="blue">6</td>
                        <td class="green"><number-display :value="a6_1"></number-display></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付福利费</td>
                        <td class="blue">73</td>
                        <td class="green"><number-display :value="a73_1"></number-display></td>
                        <td class="green"><number-input v-model="a73_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其他应收款</td>
                        <td class="blue">7</td>
                        <td class="green"><number-display :value="a7_1"></number-display></td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应付股利</td>
                        <td class="blue">74</td>
                        <td class="green"><number-display :value="a74_1"></number-display></td>
                        <td class="green"><number-input v-model="a74_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">预付账款</td>
                        <td class="blue">8</td>
                        <td class="green"><number-display :value="a8_1"></number-display></td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">应交税金</td>
                        <td class="blue">75</td>
                        <td class="green"><number-display :value="a75_1"></number-display></td>
                        <td class="green"><number-input v-model="a75_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 应收补贴款</td>
                        <td class="blue">9</td>
                        <td class="green"><number-display :value="a9_1"></number-display></td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">其他应交款</td>
                        <td class="blue">80</td>
                        <td class="green"><number-display :value="a80_1"></number-display></td>
                        <td class="green"><number-input v-model="a80_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 存货</td>
                        <td class="blue">10</td>
                        <td class="green"><number-display :value="a10_1"></number-display></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 其他应付款</td>
                        <td class="blue">81</td>
                        <td class="green"><number-display :value="a81_1"></number-display></td>
                        <td class="green"><number-input v-model="a81_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">待摊费用</td>
                        <td class="blue">11</td>
                        <td class="green"><number-display :value="a11_1"></number-display></td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">预提费用</td>
                        <td class="blue">82</td>
                        <td class="green"><number-display :value="a82_1"></number-display></td>
                        <td class="green"><number-display :value="a82_2"></number-display></td>
                    </tr>
                     <tr>
                        <td class="blue">一年内到期的长期债权投资</td>
                        <td class="blue">21</td>
                        <td class="green"><number-display :value="a21_1"></number-display></td>
                        <td class="green"><number-input v-model="a21_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 预计负债</td>
                        <td class="blue">83</td>
                        <td class="green"><number-display :value="a83_1"></number-display></td>
                        <td class="green"><number-input v-model="a83_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 其他流动资产</td>
                        <td class="blue">24</td>
                        <td class="green"><number-display :value="a24_1"></number-display></td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 一年内到期的长期负债</td>
                        <td class="blue">86</td>
                        <td class="green"><number-display :value="a86_1"></number-display></td>
                        <td class="green"><number-input v-model="a86_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 流动资产合计</td>
                        <td class="blue">31</td>
                        <td ><number-display :value="a31_1"></number-display></td>
                        <td ><number-input v-model="a31_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 其他流动负债</td>
                        <td class="blue">90</td>
                        <td class="green"><number-display :value="a90_1"></number-display></td>
                        <td class="green"><number-input v-model="a90_2" :fixed="fixed" :editable="false"></number-input></td>
                    <tr>
                        <td class="blue" colspan="8">长期投资：</td>
                    </tr>  
                    <tr>
                        <td class="blue">长期股权投资</td>
                        <td class="blue">32</td>
                        <td ><number-display :value="a32_1"></number-display></td>
                        <td ><number-input v-model="a32_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 流动负债合计</td>
                        <td class="blue">100</td>
                        <td><number-display :value="a100_1"></number-display></td>
                        <td><number-input v-model="a100_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">长期债权投资</td>
                        <td class="blue">34</td>
                        <td class="green"><number-display :value="a34_1"></number-display></td>
                        <td class="green"><number-input v-model="a34_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue" colspan="4">长期负债：</td>+
                    </tr>
                    <tr>
                        <td class="blue">长期投资合计</td>
                        <td class="blue">38</td>
                        <td class="green"><number-display :value="a38_1"></number-display></td>
                        <td class="green"><number-input v-model="a38_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 长期借款</td>
                        <td class="blue">101</td>
                        <td class="green"><number-display :value="a101_1"></number-display></td>
                        <td class="green"><number-display :value="a101_2"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue" colspan="4">固定资产：</td>
                        <td class="blue"> 应付债券</td>
                        <td class="blue">102</td>
                        <td class="green"><number-display :value="a102_1"></number-display></td>
                        <td class="green"><number-display :value="a102_2"></number-display></td>
                    </tr>   
                     <tr>
                        <td class="blue"> 固定资产原价</td>
                        <td class="blue">39</td>
                        <td class="green"><number-display :value="a39_1"></number-display></td>
                        <td class="green"><number-input v-model="a39_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">  长期应付款</td>
                        <td class="blue">103</td>
                        <td class="green"><number-display :value="a103_1"></number-display></td>
                        <td class="green"><number-display :value="a103_2"></number-display></td>
                    </tr>  
                     <tr>
                        <td class="blue">减：累计折旧</td>
                        <td class="blue">40</td>
                        <td class="green"><number-display :value="a40_1"></number-display></td>
                        <td class="green"><number-display :value="a40_2"></number-display></td>
                        <td class="blue">专项应付款</td>
                        <td class="blue">106</td>
                        <td class="green"><number-display :value="a106_1"></number-display></td>
                        <td class="green"><number-display :value="a106_2"></number-display></td>
                    </tr>      
                    <tr>
                        <td class="blue">固定资产净值</td>
                        <td class="blue">41</td>
                        <td><number-display :value="a41_1"></number-display></td>
                        <td><number-input v-model="a41_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue"> 其他长期负债</td>
                        <td class="blue">108</td>
                        <td class="green"><number-display :value="a108_1"></number-display></td>
                        <td class="green"><number-display :value="a108_2"></number-display></td>
                    </tr>       
                     <tr>
                        <td class="blue">减：固定资产减值准备</td>
                        <td class="blue">42</td>
                        <td class="green"><number-display :value="a42_1"></number-display></td>
                        <td class="green"><number-input v-model="a42_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">长期负债合计</td>
                        <td class="blue">110</td>
                        <td><number-display :value="a110_1"></number-display></td>
                        <td><number-display :value="a110_2"></number-display></td>
                    </tr>      
                    <tr>
                        <td class="blue"> 固定资产净额</td>
                        <td class="blue">43</td>
                        <td><number-display :value="a43_1"></number-display></td>
                        <td><number-input v-model="a43_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue" colspan="4">递延税项：</td>
                    </tr>       
                     <tr>
                        <td class="blue">工程物资</td>
                        <td class="blue">44</td>
                        <td class="green"><number-display :value="a44_1"></number-display></td>
                        <td class="green"><number-input v-model="a44_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">递延税款贷项</td>
                        <td class="blue">111</td>
                        <td class="green"><number-display :value="a111_1"></number-display></td>
                        <td class="green"><number-display :value="a111_2"></number-display></td>
                        
                    </tr>      
                    <tr>
                        <td class="blue">在建工程</td>
                        <td class="blue">45</td>
                        <td class="green"><number-display :value="a45_1"></number-display></td>
                        <td class="green"><number-input v-model="a45_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue">负债合计</td>
                        <td class="blue">114</td>
                        <td><number-display :value="a114_1"></number-display></td>
                        <td><number-display :value="a114_2"></number-display></td>
                    </tr>   
                     <tr>
                        <td class="blue"> 固定资产清理</td>
                        <td class="blue">46</td>
                        <td class="green"><number-display :value="a46_1"></number-display></td>
                        <td class="green"><number-input v-model="a46_2" :fixed="fixed" :editable="false"></number-input></td>
                        <td class="blue" colspan="4">资本公积</td>
                    </tr>      
                    <tr>
                        <td class="blue"> 固定资产合计</td>
                        <td class="blue">50</td>
                        <td><number-display :value="a50_1"></number-display></td>
                        <td><number-display :value="a50_2"></number-display></td>
                        <td class="blue" colspan="4">所有者权益（或股东权益）：</td>
                    </tr>       
                     <tr>
                        <td class="blue" colspan="4">无形资产及其他资产：</td>
                        <td class="blue">实收资本(或股本)</td>
                        <td class="blue">115</td>
                        <td class="green"><number-display :value="a115_1"></number-display></td>
                        <td class="green"><number-input v-model="a115_2" :fixed="fixed" :editable="false"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">无形资产</td>
                        <td class="blue">51</td>
                        <td class="green"><number-display :value="a51_1"></number-display></td>
                        <td class="green"><number-display :value="a51_2"></number-display></td>
                        <td class="blue"> 减：已归还投资</td>
                        <td class="blue">116</td>
                        <td class="green"><number-display :value="a116_1"></number-display></td>
                        <td class="green"><number-display :value="a116_2"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue">长期待摊费用</td>
                        <td class="blue">52</td>
                        <td class="green"><number-display :value="a52_1"></number-display></td>
                        <td class="green"><number-display :value="a52_2"></number-display></td>
                        <td class="blue">实收资本(或股本)净额</td>
                        <td class="blue">117</td>
                        <td><number-display :value="a117_1"></number-display></td>
                        <td><number-display :value="a117_2"></number-display></td>
                    </tr>       
                    <tr>
                        <td class="blue">其他长期资产</td>
                        <td class="blue">53</td>
                        <td class="green"><number-display :value="a53_1"></number-display></td>
                        <td class="green"><number-display :value="a53_2"></number-display></td>
                        <td class="blue"> 资本公积</td>
                        <td class="blue">118</td>
                        <td class="green"><number-display :value="a118_1"></number-display></td>
                        <td class="green"><number-display :value="a118_2"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue">无形资产及其他资产合计</td>
                        <td class="blue">60</td>
                        <td><number-display :value="a60_1"></number-display></td>
                        <td><number-display :value="a60_2"></number-display></td>
                        <td class="blue"> 盈余公积</td>
                        <td class="blue">119</td>
                        <td class="green"><number-display :value="a119_1"></number-display></td>
                        <td class="green"><number-display :value="a119_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="4"></td>
                        <td class="blue"> 其中：法定公益金</td>
                        <td class="blue">120</td>
                        <td class="green"><number-display :value="a120_1"></number-display></td>
                        <td class="green"><number-display :value="a120_2"></number-display></td>
                    </tr>   
                    <tr>
                        <td class="blue" colspan="4">递延税项：</td>
                        <td class="blue"> 未分配利润</td>
                        <td class="blue">121</td>
                        <td class="green"><number-display :value="a121_1"></number-display></td>
                        <td class="green"><number-display :value="a121_2"></number-display></td>
                    </tr>    
                     <tr>
                        <td class="blue">  递延税款借项</td>
                        <td class="blue">61</td>
                        <td class="green"><number-display :value="a61_1"></number-display></td>
                        <td class="green"><number-display :value="a61_2"></number-display></td>
                        <td class="blue">所有者权益（或股东权益）合计</td>
                        <td class="blue">122</td>
                        <td><number-display :value="a122_1"></number-display></td>
                        <td><number-display :value="a122_2"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue">资产合计</td>
                        <td class="blue">67</td>
                        <td><number-display :value="a67_1"></number-display></td>
                        <td><number-display :value="a67_2"></number-display></td>
                        <td class="blue">负债和所有者权益（或股东权益）总计</td>
                        <td class="blue">135</td>
                        <td><number-display :value="a135_1"></number-display></td>
                        <td><number-display :value="a135_2"></number-display></td>
                    </tr>       
                </tbody>
            </table>
        </div>
        <el-button type="primary" v-if="false" @click="save">保存</el-button><el-button type="primary" @click="refresh">刷新</el-button>
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
        name: 'excel35',
        data() {
            return {
                fixed:2,
                id:0,
                a1_1: 0,
                a1_2: 0,
                a2_1: 0,
                a2_2: 0,
                a3_1: 0,
                a3_2: 0,
                a4_1: 0,
                a4_2: 0,
                a5_1: 0,
                a5_2: 0,
                a6_1: 0,
                a6_2: 0,
                a7_1: 0,
                a7_2: 0,
                a8_1: 0,
                a8_2: 0,
                a9_1: 0,
                a9_2: 0,
                a10_1: 0,
                a10_2: 0,
                a11_1: 0,
                a11_2: 0,
                a21_1: 0,
                a21_2: 0,
                a24_1: 0,
                a24_2: 0,
                a31_1: 0,
                a31_2: 0,
                a32_1: 0,
                a32_2: 0,
                a34_1: 0,
                a34_2: 0,
                a38_1: 0,
                a38_2: 0,
                a39_1: 0,
                a39_2: 0,
                a40_1: 0,
                a40_2: 0,
                a41_1: 0,
                a41_2: 0,
                a42_1: 0,
                a42_2: 0,
                a43_1: 0,
                a43_2: 0,
                a44_1: 0,
                a44_2: 0,
                a45_1: 0,
                a45_2: 0,
                a46_1: 0,
                a46_2: 0,
                a50_1: 0,
                a50_2: 0,
                a51_1: 0,
                a51_2: 0,
                a52_1: 0,
                a52_2: 0,
                a53_1: 0,
                a53_2: 0,
                a60_1: 0,
                a60_2: 0,
                a61_1: 0,
                a61_2: 0,
                a67_1: 0,
                a67_2: 0,
                a68_1: 0,
                a68_2: 0,
                a69_1: 0,
                a69_2: 0,
                a70_1: 0,
                a70_2: 0,
                a71_1: 0,
                a71_2: 0,
                a72_1: 0,
                a72_2: 0,
                a73_1: 0,
                a73_2: 0,
                a74_1: 0,
                a74_2: 0,
                a75_1: 0,
                a75_2: 0,
                a80_1: 0,
                a80_2: 0,
                a81_1: 0,
                a81_2: 0,
                a82_1: 0,
                a82_2: 0,	
                a83_1: 0,
                a83_2: 0,
                a86_1: 0,
                a86_2: 0,
                a90_1: 0,
                a90_2: 0,
                a100_1: 0,
                a100_2: 0,
                a101_1: 0,
                a101_2: 0,
                a102_1: 0,
                a102_2: 0,
                a103_1: 0,
                a103_2: 0,
                a106_1: 0,
                a106_2: 0,
                a108_1: 0,
                a108_2: 0,
                a110_1: 0,
                a110_2: 0,
                a111_1: 0,
                a111_2: 0,
                a114_1: 0,
                a114_2: 0,
                a115_1: 0,
                a115_2: 0,
                a116_1: 0,
                a116_2: 0,
                a117_1: 0,
                a117_2: 0,
                a118_1: 0,
                a118_2: 0,
                a119_1: 0,
                a119_2: 0,
                a120_1: 0,
                a120_2: 0,
                a121_1: 0,
                a121_2: 0,
                a122_1: 0,
                a122_2: 0,
                a135_1: 0,
                a135_2: 0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAbalB"]),
        },
        watch: {
            getTableAbalB(newVal) {
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
                    "id":this.id,
                    "uid": this.uid,
                    "mon": this.mon,
                    "year": this.year,
                    "userId": this.userId
                };
                for(let i=1;i<=135;i++){
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
                store.dispatch("editAbalB", {
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
                this.mon = this.$route.query.mon;
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableAbalB",{
                    data:{
                        "uid": this.uid,
                        "mon": this.mon,
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
                    urlParam:"abalb",
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