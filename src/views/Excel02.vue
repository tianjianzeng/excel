<template>
    <div class="excel excel02">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="8">企业基础信息表</td>
                    </tr>
                    <tr>
                        <td colspan="2"><el-radio class="radio" v-model="item.declare" :label="0" disabled>正常申报</el-radio></td>
                        <td colspan="2"><el-radio class="radio" v-model="item.declare" :label="1" disabled>更正申报</el-radio></td>
                        <td colspan="4"><el-radio class="radio" v-model="item.declare" :label="2" disabled>补充申报</el-radio></td>
                    </tr>
                    <tr>
                        <td colspan="8" class="blue">100基本信息</td> 
                    </tr>
                    <tr>
                        <td class="blue">101汇总纳税企业</td> 
                        <td colspan="2"><el-radio class="radio" v-model="item.a101" :label="0" disabled>总机构</el-radio></td> 
                        <td colspan="3"><el-radio class="radio" v-model="item.a101" :label="1" disabled>按比例缴纳总机构</el-radio></td> 
                        <td colspan="2"><el-radio class="radio" v-model="item.a101" :label="2" disabled>否</el-radio></td> 
                    </tr>
                    <tr>
                        <td class="blue">102注册资本（万元）</td> 
                        <td class="green"><number-input v-model="item.a102" :fixed="fixed"></number-input></td> 
                        <td class="blue" colspan="2">106境外中资控股居民企业</td> 
                        <td colspan="2"><el-radio class="radio" v-model="item.a106" :label="0">是</el-radio></td> 
                        <td colspan="2"><el-radio class="radio" v-model="item.a106" :label="1">否</el-radio></td> 
                    </tr>
                    <tr>
                        <td class="blue">103所属行业明细代码</td> 
                        <td>{{item.a103}}</td> 
                        <td class="blue" colspan="2">107从事国家非限制和禁止行业</td> 
                        <td colspan="2"><el-radio class="radio" v-model="item.a107" :label="0">是</el-radio></td> 
                        <td colspan="2"><el-radio class="radio" v-model="item.a107" :label="1">否</el-radio></td> 
                    </tr>
                    <tr>
                        <td class="blue">104从业人数 </td> 
                        <td class="green"><number-input v-model="item.a104" :fixed="0"></number-input></td> 
                        <td class="blue" colspan="2">108存在境外关联交易</td> 
                        <td colspan="2"><el-radio class="radio" v-model="item.a108" :label="0" disabled>是</el-radio></td> 
                        <td colspan="2" class="green"><el-radio class="radio" v-model="item.a108" :label="1" disabled>否</el-radio></td> 
                    </tr>
                    <tr>
                        <td class="blue">105资产总额（万元）</td> 
                        <td class="green"><number-input v-model="item.a105" :fixed="fixed"></number-input></td> 
                        <td class="blue" colspan="2">109上市公司</td> 
                        <td class="green"><el-radio class="radio" v-model="item.a109" :label="0" disabled>境内</el-radio></td>
                        <td class="green"><el-radio class="radio" v-model="item.a109" :label="1" disabled>境外</el-radio></td>  
                        <td colspan="2" class="green"><el-radio class="radio" v-model="item.a109" :label="2" disabled>否</el-radio></td> 
                    </tr>
                    <tr>
                        <td colspan="8" class="blue">200主要会计政策和估计</td> 
                    </tr>
                    <tr>
                        <td style="width: 20%" rowspan="9" class="blue">201适用的会计准则或会计制度 </td> 
                        <td style="width: 15%" class="blue">企业会计准则</td>
                        <td style="width: 15%" class="green"><el-radio class="radio" v-model="item.a201" :label="0">一般企业</el-radio></td>
                        <td style="width: 10%" class="green"><el-radio class="radio" v-model="item.a201" :label="1" disabled>银行</el-radio></td>
                        <td style="width: 10%" class="green"><el-radio class="radio" v-model="item.a201" :label="2" disabled>证券</el-radio></td>
                        <td style="width: 15%" class="green"><el-radio class="radio" v-model="item.a201" :label="3" disabled>保险</el-radio></td>
                        <td colspan="2" style="width: 15%" class="green"><el-radio class="radio" v-model="item.a201" :label="4" disabled>担保</el-radio></td>
                    </tr>
                    <tr>
                        <td colspan="7"><el-radio class="radio" v-model="item.a201" :label="5">小企业会计制度</el-radio></td>
                    </tr>
                    <tr>
                        <td colspan="7"><el-radio class="radio" v-model="item.a201" :label="6">企业会计制度</el-radio></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="blue">事业单位会计制度 </td> 
                        <td colspan="2" class="green"><el-checkbox disabled>事业单位会计制度</el-checkbox></td>
                        <td colspan="3" class="green"><el-checkbox disabled>科学事业单位会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green"><el-checkbox disabled> 医院会计制度</el-checkbox></td> 
                        <td class="green"><el-checkbox disabled>高等学校会计制度</el-checkbox></td> 
                        <td colspan="2" class="green"><el-checkbox disabled>中小学校会计制度</el-checkbox></td>
                        <td colspan="3" class="green"><el-checkbox disabled>彩票机构会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="7"><el-checkbox disabled>民间非营利组织会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="7"><el-checkbox disabled>村集体经济组织会计制度</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="7"><el-checkbox disabled>农民专业合作社财务会计制度（试行）</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green" colspan="7"><el-checkbox disabled>其他</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue">202会计档案的存放地</td>
                        <td class="green" colspan="2"><input v-model="item.a202" required></td>
                        <td class="blue" colspan="2">203会计核算软件</td>
                        <td class="green" colspan="3"><input v-model="item.a203"></td>
                    </tr>
                    <tr>
                        <td class="blue">204记账本位币</td>
                        <td class="green"><el-radio class="radio" v-model="item.a204" :label="0" disabled>人民币</el-radio></td>
                        <td class="green"><el-radio class="radio" v-model="item.a204" :label="1" disabled>其他</el-radio></td>
                        <td class="blue" colspan="2">205会计政策和估计是否发生变化</td>
                        <td class="green"><el-radio class="radio" v-model="item.a205" :label="0">是</el-radio></td>
                        <td colspan="2" class="green"><el-radio class="radio" v-model="item.a205" :label="0">否</el-radio></td>
                    </tr>
                    <tr>
                        <td class="blue">206固定资产折旧方法</td>
                        <td class="green"><el-checkbox v-model="item.a206Ya" true-label="0" false-label="1">年限平均法</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="item.a206Ws" true-label="0" false-label="1">工作量法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="item.a206Dd" true-label="0" false-label="1">双倍余额递减法是</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="item.a206Yt" true-label="0" false-label="1">年数总和法</el-checkbox></td>
                        <td colspan="2" class="green"><el-checkbox v-model="item.a206Ot" true-label="0" false-label="1">其他</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="2">207存货成本计价方法</td>
                        <td class="green" colspan="2"><el-checkbox v-model="item.a207Fifo" true-label="0" false-label="1">先进先出法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="item.a207Mma" true-label="0" false-label="1">移动加权平均法</el-checkbox></td>
                        <td colspan="3" class="green"><el-checkbox v-model="item.a207Meaa" true-label="0" false-label="1">月末一次加权平均法</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="green"><el-checkbox v-model="item.a207Ic"  true-label="0" false-label="1">个别计价法</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="item.a207Gp"  true-label="0" false-label="1">毛利率法</el-checkbox></td>
                        <td class="green" colspan="2"><el-checkbox v-model="item.a207Rt"  true-label="0" false-label="1">零售价法</el-checkbox></td>
                        <td class="green"><el-checkbox v-model="item.a207Pc"  true-label="0" false-label="1">计划成本法□</el-checkbox></td>
                        <td colspan="2" class="green"><el-checkbox v-model="item.a207Ot"  true-label="0" false-label="1">其他</el-checkbox></td>
                    </tr>
                    <tr>
                        <td class="blue">208坏账损失核算方法</td>
                        <td class="green" colspan="2"><el-radio class="radio" v-model="item.a208" :label="0">备抵法</el-radio></td>
                        <td class="green" colspan="5"><el-radio class="radio" v-model="item.a208" :label="1">直接核销法</el-radio></td>
                    </tr>
                    <tr>
                        <td class="blue">208坏账损失核算方法</td>
                        <td class="green" colspan="2"><el-radio class="radio" v-model="item.a209" :label="0">应付税款法</el-radio></td>
                        <td class="green" colspan="2"><el-radio class="radio" v-model="item.a209" :label="1">资产负债表债务法</el-radio></td>
                        <td class="green" colspan="3"><el-radio class="radio" v-model="item.a209" :label="2">其他</el-radio></td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="8">300企业主要股东及对外投资情况</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="8" style="text-align:left;">301企业主要股东（前5位）</td>
                    </tr>
                    <tr>
                        <td class="blue">股东名称</td>
                        <td class="blue">证件种类</td>
                        <td class="blue" colspan="2">证件号码</td>
                        <td class="blue">经济性质</td>
                        <td class="blue">投资比例</td>
                        <td class="blue" colspan="2">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="green">股东名称</td>
                        <td class="green">证件种类</td>
                        <td class="green" colspan="2">证件号码</td>
                        <td class="green">
                             <!-- <el-select placeholder="请选择">
                                <el-option
                                    v-for="item in getEpA000000"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                </el-option>
                            </el-select> -->
                        </td>
                        <td class="green">投资比例</td>
                        <td colspan="2" class="green">国籍（注册地址）</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="8" style="text-align:left;">302对外投资（前5位）</td>
                    </tr>
                    <tr>
                        <td class="blue">被投资者名称</td>
                        <td class="blue">纳税人识别号</td>
                        <td class="blue" colspan="2">经济性质</td>
                        <td class="blue">投资比例</td>
                        <td class="blue">投资金额</td>
                        <td colspan="2" class="blue">注册地址</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="green"><input v-model="item.invName"></td>
                        <td class="green"><input v-model="item.taxprNum"></td>
                        <td class="green" colspan="2">
                             <el-select v-model="item.ecoPro" placeholder="请选择">
                                <el-option
                                    v-for="it in getEpA000000"
                                    :key="it.id"
                                    :label="it.name"
                                    :value="it.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td class="green"><number-input v-model="item.inveSper" :fixed="4"></number-input></td>
                        <td class="green"><number-input v-model="item.invesMoney" :fixed="fixed"></number-input></td>
                        <td class="green"><input v-model="item.rigisAddr"></td>
                        <td>
                            <el-button v-if="item.saved && index===list.length-1" type="primary" @click="item.add">添加</el-button>
                            <el-button type="primary" @click="del(item)">删除</el-button>
                            <el-button v-if="!item.saved" type="primary" @click="sav(item)">保存</el-button>
                            <el-button v-if="item.saved" type="primary" @click="edt(item)">修改</el-button>
                        </td>
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
        name: 'excel02',
        data() {
            return {
                fixed:2,
                item:{},
                list:[]
            }
        },
        filters: {formatCurrency},
        components: {
            NumberInput
        },
        computed: {
           ...mapGetters(["getEpA000000","getTableA000000"]) 
        },
        watch: {
            getTableA000000(newVal){
                if(newVal!=null){
                    this.list = JSON.parse(JSON.stringify(newVal.list));
                    this.item = JSON.parse(JSON.stringify(newVal.item));
                }
            }
        },
        methods:{
            save(){
                 let postData = {
                    "cYear": 2016,
                    "uid": 1,
                    "userId": 104
                };
                for(let p in this.item){
                    postData[p] = this.item[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA000000", {
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
            sav(item){
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editInvestA000000",{
                    data:{
                        id: item.id,
                        invName: item.invName,
                        taxprNum: item.taxprNum,
                        ecoPro: item.ecoPro,
                        inveSper: item.inveSper,
                        invesMoney: item.invesMoney,
                        rigisAddr: item.rigisAddr,
                        addId: item.addId         
                    },
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
            del(item){
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("delInvestA000000",{
                    urlParam: item.id,
                    callback:(rst)=>{
                        if(rst.status==0){
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                        }
                    },
                    always:()=>{
                        loading.close();
                    }
                });
            }
        },
        mounted() {
            store.dispatch("getEpA000000");
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableA000000",{
                data:{
                    "uid": 545,
                    "year":2017
                },
                always:()=>{
                    loading.close();
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
</style>