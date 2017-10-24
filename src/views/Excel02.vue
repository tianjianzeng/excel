<template>
    <div class="excel excel02">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="7">企业基础信息表</td>
                    </tr>
                    <tr>
                        <td colspan="2"><el-checkbox checked="true" disabled>正常申报</el-checkbox></td>
                        <td colspan="2"><el-checkbox disabled>更正申报</el-checkbox></td>
                        <td colspan="3"><el-checkbox disabled>补充申报</el-checkbox></td>
                    </tr>
                    <tr>
                        <td colspan="7" class="blue">100基本信息</td> 
                    </tr>
                    <tr>
                        <td class="blue">101汇总纳税企业</td> 
                        <td colspan="2"><el-checkbox v-model="checked2" disabled>总机构</el-checkbox></td> 
                        <td colspan="3"><el-checkbox v-model="checked2" disabled>按比例缴纳总机构</el-checkbox></td> 
                        <td><el-checkbox v-model="checked2" disabled>否</el-checkbox></td> 
                    </tr>
                    <tr>
                        <td class="blue">102注册资本（万元）</td> 
                        <td class="green"></td> 
                        <td class="blue" colspan="2">106境外中资控股居民企业</td> 
                        <td colspan="2"><el-radio class="radio" v-model="a106" :label="true">是</el-radio></td> 
                        <td><el-radio class="radio" v-model="a106" :label="false">否</el-radio></td> 
                    </tr>
                    <tr>
                        <td class="blue">103所属行业明细代码</td> 
                        <td class="green"></td> 
                        <td class="blue" colspan="2">107从事国家非限制和禁止行业</td> 
                        <td colspan="2"><el-radio class="radio" v-model="a107" :label="true" disabled>是</el-radio></td> 
                        <td><el-radio class="radio" v-model="a107" :label="false" disabled>否</el-radio></td> 
                    </tr>
                    <tr>
                        <td class="blue">104从业人数 </td> 
                        <td class="green"></td> 
                        <td class="blue" colspan="2">108存在境外关联交易</td> 
                        <td colspan="2"><el-checkbox v-model="checked2" disabled>是</el-checkbox></td> 
                        <td class="green"><el-checkbox v-model="checked2" disabled>否</el-checkbox></td> 
                    </tr>
                    <tr>
                        <td class="blue">105资产总额（万元）</td> 
                        <td class="green"></td> 
                        <td class="blue" colspan="2">109上市公司</td> 
                        <td class="green"><el-checkbox v-model="checked2" disabled>境内</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>境外</el-checkbox></td>  
                        <td class="green"><el-checkbox v-model="checked2" disabled>否</el-checkbox></td> 
                    </tr>
                    <tr>
                        <td colspan="7" class="blue">200主要会计政策和估计</td> 
                    </tr>
                    <tr>
                        <td style="width: 20%" rowspan="9" class="blue">201适用的会计准则或会计制度 </td> 
                        <td style="width: 15%" class="blue">企业会计准则</td>
                        <td style="width: 15%" class="green"><el-checkbox v-model="checked2" disabled>一般企业</el-checkbox></td>
                        <td style="width: 10%" class="green"><el-checkbox v-model="checked2" disabled>银行</el-checkbox></td>
                        <td style="width: 10%" class="green"><el-checkbox v-model="checked2" disabled>证券</el-checkbox></td>
                        <td style="width: 15%" class="green"><el-checkbox v-model="checked2" disabled>保险</el-checkbox></td>
                        <td style="width: 15%" class="green"><el-checkbox v-model="checked2" disabled>担保</el-checkbox></td>
                    </tr>
                    <tr>
                        <td colspan="6"><el-checkbox v-model="checked2" disabled>小企业会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td colspan="6"><el-checkbox v-model="checked2" disabled>企业会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="blue">事业单位会计制度 </td> 
                        <td colspan="2" class="green"><el-checkbox v-model="checked2" disabled>事业单位会计制度</el-checkbox></td>
                        <td colspan="2" class="green"><el-checkbox v-model="checked2" disabled>科学事业单位会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green"><el-checkbox v-model="checked2" disabled> 医院会计制度</el-checkbox></td> 
                        <td class="green"><el-checkbox v-model="checked2" disabled>高等学校会计制度</el-checkbox></td> 
                        <td colspan="2" class="green"><el-checkbox v-model="checked2" disabled>中小学校会计制度</el-checkbox></td>
                        <td colspan="2" class="green"><el-checkbox v-model="checked2" disabled>彩票机构会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="6"><el-checkbox v-model="checked2" disabled>民间非营利组织会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="6"><el-checkbox v-model="checked2" disabled>村集体经济组织会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="6"><el-checkbox v-model="checked2" disabled>农民专业合作社财务会计制度（试行）</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="6"><el-checkbox v-model="checked2" disabled>其他</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue">202会计档案的存放地</td>
                        <td class="green" colspan="2"></td>
                        <td class="blue" colspan="2">203会计核算软件</td>
                        <td class="green" colspan="2"></td>
                    </tr>
                    <tr>
                        <td class="blue">204记账本位币</td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>人民币</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>其他</el-checkbox></td>
                        <td class="blue" colspan="2">205会计政策和估计是否发生变化</td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>是</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>否</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue">206固定资产折旧方法</td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>年限平均法</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>工作量法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>双倍余额递减法是</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>年数总和法</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>其他</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="2">207存货成本计价方法</td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>先进先出法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>移动加权平均法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>月末一次加权平均法</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green"><el-checkbox v-model="checked2" disabled>个别计价法</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>毛利率法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>零售价法</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>计划成本法□</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="checked2" disabled>其他</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue">208坏账损失核算方法</td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>备抵法</el-checkbox></td>
                        <td class="green" colspan="4"><el-checkbox v-model="checked2" disabled>直接核销法</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue">208坏账损失核算方法</td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>应付税款法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>资产负债表债务法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="checked2" disabled>其他</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="7">300企业主要股东及对外投资情况</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="7" style="text-align:left;">301企业主要股东（前5位）</td>
                    </tr>
                    <tr>
                        <td class="blue">股东名称</td>
                        <td class="blue">证件种类</td>
                        <td class="blue" colspan="2">证件号码</td>
                        <td class="blue">经济性质</td>
                        <td class="blue">投资比例</td>
                        <td class="blue">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="green">股东名称</td>
                        <td class="green">证件种类</td>
                        <td class="green" colspan="2">证件号码</td>
                        <td class="green">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="green">股东名称</td>
                        <td class="green">证件种类</td>
                        <td class="green" colspan="2">证件号码</td>
                        <td class="green">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="green">股东名称</td>
                        <td class="green">证件种类</td>
                        <td class="green" colspan="2">证件号码</td>
                        <td class="green">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="green">股东名称</td>
                        <td class="green">证件种类</td>
                        <td class="green" colspan="2">证件号码</td>
                        <td class="green">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="green">股东名称</td>
                        <td class="green">证件种类</td>
                        <td class="green" colspan="2">证件号码</td>
                        <td class="green">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="7" style="text-align:left;">302对外投资（前5位）</td>
                    </tr>
                    <tr>
                        <td class="blue">被投资者名称</td>
                        <td class="blue">纳税人识别号</td>
                        <td class="blue" colspan="2">经济性质</td>
                        <td class="blue">投资比例</td>
                        <td class="blue">投资金额</td>
                        <td class="blue">注册地址</td>
                    </tr>
                    <tr>
                        <td class="green">被投资者名称</td>
                        <td class="green">纳税人识别号</td>
                        <td class="green" colspan="2">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">投资金额</td>
                        <td class="green">注册地址</td>
                    </tr>
                    <tr>
                        <td class="green">被投资者名称</td>
                        <td class="green">纳税人识别号</td>
                        <td class="green" colspan="2">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">投资金额</td>
                        <td class="green">注册地址</td>
                    </tr>
                    <tr>
                        <td class="green">被投资者名称</td>
                        <td class="green">纳税人识别号</td>
                        <td class="green" colspan="2">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">投资金额</td>
                        <td class="green">注册地址</td>
                    </tr>
                    <tr>
                        <td class="green">被投资者名称</td>
                        <td class="green">纳税人识别号</td>
                        <td class="green" colspan="2">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">投资金额</td>
                        <td class="green">注册地址</td>
                    </tr>
                    <tr>
                        <td class="green">被投资者名称</td>
                        <td class="green">纳税人识别号</td>
                        <td class="green" colspan="2">经济性质</td>
                        <td class="green">投资比例</td>
                        <td class="green">投资金额</td>
                        <td class="green">注册地址</td>
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
        filters: {formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            
        },
        watch: {
            
        },
        methods:{
            
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