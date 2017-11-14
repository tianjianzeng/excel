<template>
    <div class="excel excel37">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="3">现金流量表_年报</td>
                   </tr>
                    <tr>
                        <td colspan="3">（适用执行企业会计准则的一般企业）</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td></td>
                        <td>单位：元</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:40%">项目</td>
                        <td class="blue" style="width:30%">本期金额</td>
                        <td class="blue" style="width:30%">上期金额</td>
                    </tr>
                    <tr>
                        <td class="blue">一、经营活动产生的现金流量：</td>
                        <td class="blue">--</td>
                        <td class="blue">--</td>
                    </tr>
                    <tr>
                        <td class="blue">销售商品、提供劳务收到的现金</td>
                        <td class="green">{{a2_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue" >收到的税费返还</td>
                        <td class="green">{{a3_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 收到其他与经营活动有关的现金</td>
                        <td class="green">{{a4_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">经营活动现金流入小计</td>
                        <td>{{a5_1|formatCurrency}}</td>
                        <td><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 购买商品、接受劳务支付的现金</td>
                        <td class="green">{{a6_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 支付给职工以及为职工支付的现金</td>
                        <td class="green">{{a7_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 支付的各项税费</td>
                        <td class="green">{{a8_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">支付其他与经营活动有关的现金</td>
                        <td class="green">{{a9_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 经营活动现金流出小计</td>
                        <td>{{a10_1|formatCurrency}}</td>
                        <td><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">经营活动产生的现金流量净额</td>
                        <td>{{a11_1|formatCurrency}}</td>
                        <td><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">二、投资活动产生的现金流量：</td>
                        <td class="blue">--</td>
                        <td class="blue">--</td>
                    </tr>
                     <tr>
                        <td class="blue">收回投资收到的现金</td>
                        <td class="green">{{a13_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">取得投资收益收到的现金</td>
                        <td class="green">{{a14_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">处置固定资产、无形资产和其他长期资产收回的现金净额</td>
                        <td class="green">{{a15_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">处置子公司及其他营业单位收到的现金净额</td>
                        <td class="green">{{a16_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a16_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">收到其他与投资活动有关的现金</td>
                        <td class="green">{{a17_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a17_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">投资活动现金流入小计</td>
                        <td>{{a18_1|formatCurrency}}</td>
                        <td><number-input v-model="a18_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 购建固定资产、无形资产和其他长期资产支付的现金</td>
                        <td class="green">{{a19_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a19_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">投资支付的现金</td>
                        <td class="green">{{a20_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a20_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">取得子公司及其他营业单位支付的现金净额</td>
                        <td class="green">{{a21_1|formatCurrency}}</td>
                        <td class="green">><number-input v-model="a21_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue"> 支付其他与投资活动有关的现金</td>
                        <td class="green">{{a22_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">投资活动现金流出小计</td>
                        <td>{{a23_1|formatCurrency}}</td>
                        <td><number-input v-model="a23_2" :fixed="fixed"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">投资活动产生的现金流量净额</td>
                        <td class="green">{{a24_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">三、筹资活动产生的现金流量：</td>
                        <td class="blue">--</td>
                        <td class="blue">--</td>
                    </tr>  
                    <tr>
                        <td class="blue">吸收投资收到的现金</td>
                        <td class="green">{{a26_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a26_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue"> 取得借款收到的现金</td>
                        <td class="green">{{a27_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a27_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue"> 收到其他与筹资活动有关的现金</td>
                        <td class="green">{{a28_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">筹资活动现金流入小计</td>
                        <td>{{a29_1|formatCurrency}}</td>
                        <td><number-input v-model="a29_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">偿还债务支付的现金</td>
                        <td class="green">{{a30_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a30_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">分配股利、利润或偿付利息支付的现金</td>
                        <td class="green">{{a31_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a31_2" :fixed="fixed"></number-input></td>
                    </tr>    
                    <tr>
                        <td class="blue">支付其他与筹资活动有关的现金</td>
                        <td class="green">{{a32_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a32_2" :fixed="fixed"></number-input></td>
                    </tr> 
                      <tr>
                        <td class="blue"> 筹资活动现金流出小计</td>
                        <td>{{a33_1|formatCurrency}}</td>
                        <td><number-input v-model="a33_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">筹资活动产生的现金流量净额</td>
                        <td>{{a34_1|formatCurrency}}</td>
                        <td><number-input v-model="a34_2" :fixed="fixed"></number-input></td>
                    </tr>    
                    <tr>
                        <td class="blue">四、汇率变动对现金及现金等价物的影响</td>
                        <td class="green">{{a35_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a35_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">五、现金及现金等价物净增加额</td>
                        <td>{{a36_1|formatCurrency}}</td>
                        <td><number-input v-model="a36_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">加：期初现金及现金等价物余额</td>
                        <td class="green">{{a37_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a37_2" :fixed="fixed"></number-input></td>
                    </tr>     
                     <tr>
                        <td class="blue">六、期末现金及现金等价物余额</td>
                        <td>{{a38_1|formatCurrency}}</td>
                        <td><number-input v-model="a38_2" :fixed="fixed"></number-input></td>
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
        name: 'excel37',
        data() {
            return {
                fixed:2,
                a1_1: null,
                a1_2: null,
                a2_1: 0,
                a2_2: 0,
                a3_1: 0,
                a3_2: 0,
                a4_1: 0,
                a4_2: 0,
                a6_1: 0,
                a6_2: 0,
                a7_1: 0,
                a7_2: 0,
                a8_1: 0,
                a8_2: 0,
                a9_1: 0,
                a9_2: 0,
                a12_1: null,
                a12_2: null,
                a13_1: 0,
                a13_2: 0,
                a14_1: 0,
                a14_2: 0,
                a15_1: 0,
                a15_2: 0,
                a16_1: 0,
                a16_2: 0,
                a17_1: 0,
                a17_2: 0,
                a19_1: 0,
                a19_2: 0,
                a20_1: 0,
                a20_2: 0,
                a21_1: 0,
                a21_2: 0,
                a22_1: 0,
                a22_2: 0,
                a25_1: null,
                a25_2: null,
                a26_1: 0,
                a26_2: 0,
                a27_1: 0,
                a27_2: 0,
                a28_1: 0,
                a28_2: 0,
                a30_1: 0,
                a30_2: 0,
                a31_1: 0,
                a31_2: 0,
                a32_1: 0,
                a32_2: 0,
                a35_1: 0,
                a35_2: 0,
                a37_1: 0,
                a37_2: 0,
                cYear: 2016,
                id: 5
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableflowC"]),
            a5_1(){
                let rst = 0;
                for(let i=2;i<=4;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a5_2(){
                let rst = 0;
                for(let i=2;i<=4;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a10_1(){
                let rst = 0;
                for(let i=6;i<=9;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a10_2(){
                let rst = 0;
                for(let i=6;i<=9;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a11_1(){
                return (this.a5_1 * Math.pow(10,this.fixed) - this.a10_1 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a11_2(){
                return (this.a5_2 * Math.pow(10,this.fixed) - this.a10_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a18_1(){
                let rst = 0;
                for(let i=13;i<=17;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a18_2(){
                let rst = 0;
                for(let i=13;i<=17;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a23_1(){
                let rst = 0;
                for(let i=19;i<=22;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a23_2(){
                let rst = 0;
                for(let i=19;i<=22;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a24_1(){
                return (this.a18_1 * Math.pow(10,this.fixed) - this.a23_1 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a24_2(){
                return (this.a18_2 * Math.pow(10,this.fixed) - this.a23_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a29_1(){
                let rst = 0;
                for(let i=26;i<=28;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a29_2(){
                let rst = 0;
                for(let i=26;i<=28;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a33_1(){
                let rst = 0;
                for(let i=30;i<=32;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a33_2(){
                let rst = 0;
                for(let i=30;i<=32;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a34_1(){
                return (this.a29_1 * Math.pow(10,this.fixed) - this.a33_1 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a34_2(){
                return (this.a29_2 * Math.pow(10,this.fixed) - this.a33_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_1(){
                return (this.a11_1 * Math.pow(10,this.fixed) + this.a24_1 * Math.pow(10,this.fixed) + this.a34_1 * Math.pow(10,this.fixed) + this.a35_1 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a36_2(){
                return (this.a11_2 * Math.pow(10,this.fixed) + this.a24_2 * Math.pow(10,this.fixed) + this.a34_2 * Math.pow(10,this.fixed) + this.a35_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a38_1(){
                let rst = 0;
                for(let i=36;i<=37;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a38_2(){
                let rst = 0;
                for(let i=36;i<=37;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableflowC(newVal) {
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
                    "uid":100,
                    "year":2016,
                    "userId":10086,
                    id: this.id
                };
                for(let i=1;i<=38;i++){
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
                store.dispatch("editflowC", {
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
            store.dispatch("getTableflowC",{
                data:{
                    "uid":100,
                    "year":2016,
                    "userId":10086
                },
                always:()=>{
                    loading.close();
                }
            });
            
        }
    }
</script>

<style lang="scss" scoped>
    .excel37{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>