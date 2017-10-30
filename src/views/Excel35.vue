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
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">短期借款</td>
                        <td class="blue">68</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">短期投资</td>
                        <td class="blue">2</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">应付票据</td>
                        <td class="blue">69</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收票据</td>
                        <td class="blue">3</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">应付账款</td>
                        <td class="blue">70</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收股利</td>
                        <td class="blue">4</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">预收帐款</td>
                        <td class="blue">71</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收利息</td>
                        <td class="blue">5</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 应付工资</td>
                        <td class="blue">72</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">应收账款</td>
                        <td class="blue">6</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">应付福利费</td>
                        <td class="blue">73</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其他应收款</td>
                        <td class="blue">7</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">应付股利</td>
                        <td class="blue">74</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">预付账款</td>
                        <td class="blue">8</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">应交税金</td>
                        <td class="blue">75</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 应收补贴款</td>
                        <td class="blue">9</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">其他应交款</td>
                        <td class="blue">80</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 存货</td>
                        <td class="blue">10</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 其他应付款</td>
                        <td class="blue">81</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">待摊费用</td>
                        <td class="blue">11</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">预提费用</td>
                        <td class="blue">82</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                     <tr>
                        <td class="blue">一年内到期的长期债权投资</td>
                        <td class="blue">21</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 预计负债</td>
                        <td class="blue">83</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 其他流动资产</td>
                        <td class="blue">24</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 一年内到期的长期负债</td>
                        <td class="blue">86</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 流动资产合计</td>
                        <td class="blue">31</td>
                        <td >{{0|formatCurrency}}</td>
                        <td ><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 其他流动负债</td>
                        <td class="blue">90</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    <tr>
                        <td class="blue" colspan="8">长期投资：</td>
                    </tr>  
                    <tr>
                        <td class="blue">长期股权投资</td>
                        <td class="blue">32</td>
                        <td >{{0|formatCurrency}}</td>
                        <td ><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 流动负债合计</td>
                        <td class="blue">100</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">长期债权投资</td>
                        <td class="blue">34</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                        <td class="blue" colspan="4">长期负债：</td>+
                    </tr>
                    <tr>
                        <td class="blue">长期投资合计</td>
                        <td class="blue">38</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 长期借款</td>
                        <td class="blue">101</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue" colspan="4">固定资产：</td>
                        <td class="blue"> 应付债券</td>
                        <td class="blue">102</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>   
                     <tr>
                        <td class="blue"> 固定资产原价</td>
                        <td class="blue">39</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">  长期应付款</td>
                        <td class="blue">103</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                     <tr>
                        <td class="blue">减：累计折旧</td>
                        <td class="blue">40</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="blue">专项应付款</td>
                        <td class="blue">106</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>      
                    <tr>
                        <td class="blue">固定资产净值</td>
                        <td class="blue">41</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue"> 其他长期负债</td>
                        <td class="blue">108</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>       
                     <tr>
                        <td class="blue">减：固定资产减值准备</td>
                        <td class="blue">42</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">长期负债合计</td>
                        <td class="blue">110</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>      
                    <tr>
                        <td class="blue"> 固定资产净额</td>
                        <td class="blue">43</td>
                        <td>{{0|formatCurrency}}</td>
                        <td><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue" colspan="4">递延税项：</td>
                    </tr>       
                     <tr>
                        <td class="blue">工程物资</td>
                        <td class="blue">44</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">递延税款贷项</td>
                        <td class="blue">111</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        
                    </tr>      
                    <tr>
                        <td class="blue">在建工程</td>
                        <td class="blue">45</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue">负债合计</td>
                        <td class="blue">114</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>   
                     <tr>
                        <td class="blue"> 固定资产清理</td>
                        <td class="blue">46</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="blue" colspan="4">资本公积</td>
                    </tr>      
                    <tr>
                        <td class="blue"> 固定资产合计</td>
                        <td class="blue">50</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="blue" colspan="4">所有者权益（或股东权益）：</td>
                    </tr>       
                     <tr>
                        <td class="blue" colspan="4">无形资产及其他资产：</td>
                        <td class="blue">实收资本(或股本)</td>
                        <td class="blue">115</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">无形资产</td>
                        <td class="blue">51</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="blue"> 减：已归还投资</td>
                        <td class="blue">116</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">长期待摊费用</td>
                        <td class="blue">52</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="blue">实收资本(或股本)净额</td>
                        <td class="blue">117</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>       
                    <tr>
                        <td class="blue">其他长期资产</td>
                        <td class="blue">53</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="blue"> 资本公积</td>
                        <td class="blue">118</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">无形资产及其他资产合计</td>
                        <td class="blue">60</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="blue"> 盈余公积</td>
                        <td class="blue">119</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr> 
                    <tr>
                        <td class="blue" colspan="4"></td>
                        <td class="blue"> 其中：法定公益金</td>
                        <td class="blue">120</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>   
                    <tr>
                        <td class="blue" colspan="4">递延税项：</td>
                        <td class="blue"> 未分配利润</td>
                        <td class="blue">121</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>    
                     <tr>
                        <td class="blue">  递延税款借项</td>
                        <td class="blue">61</td>
                        <td class="green" >{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="blue">所有者权益（或股东权益）合计</td>
                        <td class="blue">122</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">资产合计</td>
                        <td class="blue">67</td>
                        <td>{{0|formatCurrency}}</td>
                        <td>{{0|formatCurrency}}</td>
                        <td class="blue">负债和所有者权益（或股东权益）总计</td>
                        <td class="blue">135</td>
                        <td>{{0|formatCurrency}}</td>
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
        name: 'excel35',
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
    .excel35{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="4"]{
            text-align: left;
        }
    }
</style>