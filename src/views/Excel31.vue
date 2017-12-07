<template>
    <div class="excel excel31">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="4">A现金流量表_年报</td>
                   </tr>
                    <tr>
                        <td colspan="4">（适用执行小企业会计准则的企业）</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>单位：元</td>
                    </tr>
                    <tr>
                        <td class="blue" style="width:30%">项目</td>
                        <td class="blue" style="width:10%">行次</td>
                        <td class="blue" style="width:30%">本年累计金额</td>
                        <td class="blue" style="width:30%">上年金额</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="4">一、经营活动产生的现金流量：</td>
                    </tr>
                    <tr>
                        <td class="blue">销售从产品、商品、提供劳务收到的现金</td>
                        <td class="blue">1</td>
                        <td class="green"><number-input v-model="a1_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">收到的其他与经营活动有关的现金</td>
                        <td class="blue">2</td>
                        <td class="green"><number-input v-model="a2_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">购买原材料、商品、接受劳务支付的现金</td>
                        <td class="blue">3</td>
                        <td class="green"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">支付的职工薪酬</td>
                        <td class="blue">4</td>
                        <td class="green"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">支付的税费</td>
                        <td class="blue">5</td>
                        <td class="green"><number-input v-model="a5_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">支付的其他与经营活动有关的现金</td>
                        <td class="blue">6</td>
                        <td class="green"><number-input v-model="a6_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">经营活动产生的现金流量净额</td>
                        <td class="blue">7</td>
                        <td>{{a7_1|formatCurrency}}</td>
                        <td>{{a7_2|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="4">支付的其他与经营活动有关的现金</td>
                    </tr>
                    <tr>
                        <td class="blue">收回短期投资、长期债券投资和长期股权投资收到的现金</td>
                        <td class="blue">8</td>
                        <td class="green"><number-input v-model="a8_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">取得投资收益收到的现金</td>
                        <td class="blue">9</td>
                        <td class="green"><number-input v-model="a9_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">处置固定资产、无形资产和其他非流动资产收回的现金净额</td>
                        <td class="blue">10</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">短期投资、长期债券投资和长期股权投资支付的现金</td>
                        <td class="blue">11</td>
                        <td class="green"><number-input v-model="a11_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">构建固定资产、无形资产和其他非流动资产支付的现金</td>
                        <td class="blue">12</td>
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">投资活动产生的现金流量净额</td>
                        <td class="blue">13</td>
                        <td>{{a13_1|formatCurrency}}</td>
                        <td>{{a13_2|formatCurrency}}</td>
                    </tr>
                    <tr>
                         <td class="blue" colspan="4">三、筹资活动产生的现金流量：</td>
                    </tr> 
                    <tr>
                        <td class="blue">取得借款收到的现金</td>
                        <td class="blue">14</td>
                        <td class="green"><number-input v-model="a14_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">吸收投资者投资收到的现金</td>
                        <td class="blue">15</td>
                        <td class="green"><number-input v-model="a15_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">偿还借款本金支付的现金</td>
                        <td class="blue">16</td>
                        <td class="green"><number-input v-model="a16_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">偿还借款利息支付的现金</td>
                        <td class="blue">17</td>
                        <td class="green"><number-input v-model="a17_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a17_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">分配利润支付的现金</td>
                        <td class="blue">18</td>
                        <td class="green"><number-input v-model="a18_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">筹资活动产生的现金流量净额</td>
                        <td class="blue">19</td>
                        <td>{{a19_1|formatCurrency}}</td>
                        <td>{{a19_2|formatCurrency}}</td>
                    </tr>   
                     <tr>
                        <td class="blue">四、现金净增加额</td>
                        <td class="blue">20</td>
                        <td>{{a20_1|formatCurrency}}</td>
                        <td>{{a20_2|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue">加：期初现金余额</td>
                        <td class="blue">21</td>
                        <td class="green"><number-input v-model="a21_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a21_2" :fixed="fixed"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">五、期末现金余额</td>
                        <td class="blue">22</td>
                        <td>{{a22_1|formatCurrency}}</td>
                        <td>{{a22_2|formatCurrency}}</td>
                    </tr>       
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button type="primary" @click="refresh">刷新</el-button>
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
        name: 'excel31',
        data() {
            return {
                fixed:2,
                id:0,
                "a1_1":11,
                "a1_2":12,
                "a2_1":21,
                "a2_2":22,
                "a3_1":31,
                "a3_2":32,
                "a4_1":41,
                "a4_2":42,
                "a5_1":51,
                "a5_2":52,
                "a6_1":61,
                "a6_2":62,
                "a8_1":81,
                "a8_2":82,
                "a9_1":91,
                "a9_2":92,
                "a10_1":101,
                "a10_2":102,
                "a11_1":111,
                "a11_2":112,
                "a12_1":121,
                "a12_2":122,
                "a14_1":141,
                "a14_2":142,
                "a15_1":151,
                "a15_2":152,
                "a16_1":161,
                "a16_2":162,
                "a17_1":171,
                "a17_2":172,
                "a18_1":181,
                "a18_2":182,
                "a21_1":211,
                "a21_2":212,
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableflowA"]),
            a7_1() {
                return ((this.a1_1 || 0) * Math.pow(10,this.fixed) + (this.a2_1 || 0) * Math.pow(10,this.fixed) - (this.a3_1 || 0) * Math.pow(10,this.fixed) - (this.a4_1 || 0) * Math.pow(10,this.fixed) - (this.a5_1 || 0) * Math.pow(10,this.fixed) - (this.a6_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a7_2() {
                return ((this.a1_2 || 0) * Math.pow(10,this.fixed) + (this.a2_2 || 0) * Math.pow(10,this.fixed) - (this.a3_2 || 0) * Math.pow(10,this.fixed) - (this.a4_2 || 0) * Math.pow(10,this.fixed) - (this.a5_2 || 0) * Math.pow(10,this.fixed) - (this.a6_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a13_1() {
                return ((this.a8_1 || 0) * Math.pow(10,this.fixed) + (this.a9_1 || 0) * Math.pow(10,this.fixed) + (this.a10_1 || 0) * Math.pow(10,this.fixed) - (this.a11_1 || 0) * Math.pow(10,this.fixed) + (this.a12_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a13_2() {
                return ((this.a8_2 || 0) * Math.pow(10,this.fixed) + (this.a9_2 || 0) * Math.pow(10,this.fixed) + (this.a10_2 || 0) * Math.pow(10,this.fixed) - (this.a11_2 || 0) * Math.pow(10,this.fixed) + (this.a12_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a19_1() {
                return ((this.a14_1 || 0) * Math.pow(10,this.fixed) + (this.a15_1 || 0) * Math.pow(10,this.fixed) - (this.a16_1 || 0) * Math.pow(10,this.fixed) - (this.a11_1 || 0) * Math.pow(10,this.fixed) - (this.a17_1 || 0) * Math.pow(10,this.fixed) - (this.a18_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a19_2() {
                return ((this.a14_2 || 0) * Math.pow(10,this.fixed) + (this.a15_2 || 0) * Math.pow(10,this.fixed) - (this.a16_2 || 0) * Math.pow(10,this.fixed) - (this.a11_1 || 0) * Math.pow(10,this.fixed) - (this.a17_2 || 0) * Math.pow(10,this.fixed) - (this.a18_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a20_1() {
                return ((this.a7_1 || 0) * Math.pow(10,this.fixed) + (this.a13_1 || 0) * Math.pow(10,this.fixed) + (this.a119_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a20_2() {
                return ((this.a7_2 || 0) * Math.pow(10,this.fixed) + (this.a13_2 || 0) * Math.pow(10,this.fixed) + (this.a119_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a22_1() {
                return ((this.a20_1 || 0) * Math.pow(10,this.fixed) + (this.a21_1 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a22_2() {
                return ((this.a20_2 || 0) * Math.pow(10,this.fixed) + (this.a21_2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            }

        },
        watch: {
            getTableflowA(newVal) {
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
                    "mon": this.mon,
                    "year": this.year,
                    "userId": this.userId,
                    "id":this.id
                };
                for(let i=1;i<=22;i++){
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
                store.dispatch("editflowA", {
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
                store.dispatch("getTableflowA",{
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
                    urlParam:"flowA",
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