<template>
    <div class="excel excel34">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="3">B现金流量表_年报</td>
                   </tr>
                    <tr>
                        <td colspan="3">（适用执行企业会计制度的公司）</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td></td>
                        <td>单位：元</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:60%">项目</td>
                        <td class="blue" style="width:10%">行次</td>
                        <td class="blue" style="width:30%">金额</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="3">一、经营活动产生的现金流量：</td>
                    </tr>
                    <tr>
                        <td class="blue">销售商品、提供劳务收到的现金</td>
                        <td class="blue">1</td>
                        <td class="green"><number-input v-model="a1" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">收到的税费返还</td>
                        <td class="blue">3</td>
                        <td class="green"><number-input v-model="a3" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">收到的其他与经营活动有关的现金</td>
                        <td class="blue">8</td>
                        <td class="green"><number-input v-model="a8" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">现金流入小计</td>
                        <td class="blue">9</td>
                        <td>{{a9|formatCurrency}}</td>
                    </tr>
                     <tr>
                        <td class="blue">  购买商品、接受劳务支付的现金</td>
                        <td class="blue">10</td>
                        <td class="green"><number-input v-model="a10" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 支付给职工以及为职工支付的现金</td>
                        <td class="blue">12</td>
                        <td class="green"><number-input v-model="a12" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">支付的各项税费</td>
                        <td class="blue">13</td>
                        <td class="green"><number-input v-model="a13" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 支付的其他与经营活动有关的现金</td>
                        <td class="blue">18</td>
                        <td class="green"><number-input v-model="a18" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 现金流出小计</td>
                        <td class="blue">20</td>
                        <td>{{a20|formatCurrency}}</td>
                    </tr>
                     <tr>
                        <td class="blue">经营活动产生的现金流量净额</td>
                        <td class="blue">21</td>
                        <td>{{a21|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="3"> 二、投资活动产生的现金流量：</td>
                    </tr>
                    <tr>
                        <td class="blue">  收回投资所收到的现金</td>
                        <td class="blue">22</td>
                        <td class="green"><number-input v-model="a22" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">取得投资收益所收到的现金</td>
                        <td class="blue">23</td>
                        <td class="green"><number-input v-model="a23" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 处置固定资产、无形资产和其他长期资产所收回的现金净额</td>
                        <td class="blue">25</td>
                        <td class="green"><number-input v-model="a25" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">收到的其他与投资活动有关的现金</td>
                        <td class="blue">28</td>
                        <td class="green"><number-input v-model="a28" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">现金流入小计</td>
                        <td class="blue">29</td>
                        <td>{{a29|formatCurrency}}</td>
                    </tr>
                     <tr>
                        <td class="blue">购建固定资产、无形资产和其他长期资产所支付的现金</td>
                        <td class="blue">30</td>
                        <td class="green"><number-input v-model="a30" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 投资所支付的现金</td>
                        <td class="blue">31</td>
                        <td class="green"><number-input v-model="a31" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 支付的其他与投资活动有关的现金</td>
                        <td class="blue">35</td>
                        <td class="green"><number-input v-model="a35" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">现金流出小计</td>
                        <td class="blue">36</td>
                        <td>{{a36|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">投资活动产生的现金流量净额</td>
                        <td class="blue">37</td>
                        <td>{{a37|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="3">三、筹资活动产生的现金流量：</td>
                    </tr>
                    <tr>
                        <td class="blue">吸收投资所收到的现金</td>
                        <td class="blue">38</td>
                        <td class="green"><number-input v-model="a38" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue"> 借款所收到的现金</td>
                        <td class="blue">40</td>
                        <td class="green"><number-input v-model="a40" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">  收到的其他与筹资活动有关的现金</td>
                        <td class="blue">43</td>
                        <td class="green"><number-input v-model="a43" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">现金流入小计</td>
                        <td class="blue">44</td>
                        <td>{{a44|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">偿还债务所支付的现金</td>
                        <td class="blue">45</td>
                        <td class="green"><number-input v-model="a45" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">分配股利、利润或偿付利息所支付的现金</td>
                        <td class="blue">46</td>
                        <td class="green"><number-input v-model="a46" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">支付的其他与筹资活动有关的现金</td>
                        <td class="blue">52</td>
                        <td class="green"><number-input v-model="a52" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">现金流出小计</td>
                        <td class="blue">53</td>
                        <td>{{a53|formatCurrency}}</td>
                    </tr>
                     <tr>
                        <td class="blue"> 筹资活动产生的现金流量净额</td>
                        <td class="blue">54</td>
                        <td>{{a54|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">四、汇率变动对现金的影响/td>
                        <td class="blue">55</td>
                        <td class="green"><number-input v-model="a55" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">五、现金及现金等价物净增加额</td>
                        <td class="blue">56</td>
                        <td>{{a56|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="3"> 补充资料</td>
                    </tr>
                    <tr>
                        <td class="blue">项            目</td>
                        <td class="blue">行次</td>
                        <td class="blue">金额</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="3">1．将净利润调节为经营活动现金流量：</td>
                    </tr>
                    <tr>
                        <td class="blue">净利润</td>
                        <td class="blue">57</td>
                        <td class="green"><number-input v-model="a57" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">加：计提的资产减值准备</td>
                        <td class="blue">58</td>
                        <td class="green"><number-input v-model="a58" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">固定资产折旧</td>
                        <td class="blue">59</td>
                        <td class="green"><number-input v-model="a59" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">无形资产摊销</td>
                        <td class="blue">60</td>
                        <td class="green"><number-input v-model="a60" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">长期待摊费用摊销</td>
                        <td class="blue">61</td>
                        <td class="green"><number-input v-model="a61" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">待摊费用减少(减：增加)</td>
                        <td class="blue">64</td>
                        <td class="green"><number-input v-model="a64" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">预提费用增加(减：减少)</td>
                        <td class="blue">65</td>
                        <td class="green"><number-input v-model="a65" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">处置固定资产、无形资产和其他长期资产的损失(减：收益)</td>
                        <td class="blue">66</td>
                        <td class="green"><number-input v-model="a66" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">固定资产报废损失</td>
                        <td class="blue">67</td>
                        <td class="green"><number-input v-model="a67" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">财务费用</td>
                        <td class="blue">68</td>
                        <td class="green"><number-input v-model="a68" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">投资损失(减：收益)</td>
                        <td class="blue">69</td>
                        <td class="green"><number-input v-model="a69" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">递延税款贷项(减：借项)</td>
                        <td class="blue">70</td>
                        <td class="green"><number-input v-model="a70" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">存货的减少(减：增加)</td>
                        <td class="blue">71</td>
                        <td class="green"><number-input v-model="a71" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">经营性应收项目的减少(减：增加)</td>
                        <td class="blue">72</td>
                        <td class="green"><number-input v-model="a72" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">经营性应付项目的增加(减：减少)</td>
                        <td class="blue">73</td>
                        <td class="green"><number-input v-model="a73" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其他</td>
                        <td class="blue">74</td>
                        <td class="green"><number-input v-model="a74" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">经营活动产生的现金流量净额</td>
                        <td class="blue">75</td>
                        <td>{{a75|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="3">2．不涉及现金收支的投资和筹资活动：</td>
                    </tr>
                    <tr>
                        <td class="blue">债务转为资本</td>
                        <td class="blue">76</td>
                        <td class="green"><number-input v-model="a76" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">一年内到期的可转换公司债券</td>
                        <td class="blue">77</td>
                        <td class="green"><number-input v-model="a77" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">融资租入固定资产</td>
                        <td class="blue">78</td>
                        <td class="green"><number-input v-model="a78" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="3">3．现金及现金等价物净增加情况：</td>
                    </tr>
                    <tr>
                        <td class="blue">现金的期末余额</td>
                        <td class="blue">79</td>
                        <td class="green"><number-input v-model="a79" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">减：现金的期初余额</td>
                        <td class="blue">80</td>
                        <td class="green"><number-input v-model="a80" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">加：现金等价物的期末余额</td>
                        <td class="blue">81</td>
                        <td class="green"><number-input v-model="a81" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">减：现金等价物的期初余额</td>
                        <td class="blue">82</td>
                        <td class="green"><number-input v-model="a82" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">现金及现金等价物净增加额</td>
                        <td class="blue">83</td>
                        <td>{{a83|formatCurrency}}</td>
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
        name: 'excel34',
        data() {
            return {
                fixed:2,
                id:0,
                a1:0,
                 a3:0,
                 a8:0,
                 a9:0,
                a10:0,
                a12:0,
                a13:0,
                a18:0,
                a20:0,
                a21:0,
                a22:0,
                a23:0,
                a25:0,
                a28:0,
                a29:0,
                a30:0,
                a31:0,
                a35:0,
                a36:0,
                a37:0,
                a38:0,
                a40:0,
                a43:0,
                a44:0,
                a45:0,
                a46:0,
                a52:0,
                a53:0,
                a54:0,
                a55:0,
                a56:0,
                a57:0,
                a58:0,
                a59:0,
                a60:0,
                a61:0,
                a64:0,
                a65:0,
                a66:0,
                a67:0,
                a68:0,
                a69:0,
                a70:0,
                a71:0,
                a72:0,
                a73:0,
                a74:0,
                a75:0,
                a76:0,
                a77:0,
                a78:0,
                a79:0,
                a80:0,
                a81:0,
                a82:0,
                a83:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableflowB"]),
            a9(){
                let rst = 0;
                for(var i of [1,3,8]){
                    this[`a${i}`] && (rst += this[`a${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a20(){
                let rst = 0;
                for(var i of [10,12,13,18]){
                    this[`a${i}`] && (rst += this[`a${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a21(){
                return (this.a9 * Math.pow(10,this.fixed) - this.a20 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a29(){
                let rst = 0;
                for(var i of [22,23,25,28]){
                    this[`a${i}`] && (rst += this[`a${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableflowB(newVal) {
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
                console.log(this.id);
                let postData = {
                    "uid": "545",
                    "mon": "2017-09-07",
                    "year": "2017",
                    "userId": "1",
                    "id": this.id
                };
                for(let i=1;i<=83;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editflowB", {
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
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableflowB",{
                data:{
                    "uid": "545",
                    "mon": "2017-09-07",
                    "year": "2017",
                    "userId": "1"
                },
                always:()=>{
                    loading.close();
                }
            }); 
        }
    }
</script>

<style lang="scss" scoped>
    .excel34{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: left;
        }
    }
</style>