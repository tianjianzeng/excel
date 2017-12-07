<template>
    <div class="excel excel30">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="4">利润表</td>
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
                        <td class="blue">一、营业收入</td>
                        <td class="blue">1</td>
                        <td class="green">{{a1_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">减：营业成本</td>
                        <td class="blue">2</td>
                        <td class="green">{{a2_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">营业税金及附加</td>
                        <td class="blue">3</td>
                        <td class="green">{{a3_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：消费税</td>
                        <td class="blue">4</td>
                        <td class="green">{{a4_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">营业税</td>
                        <td class="blue">5</td>
                        <td class="green">{{a5_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">城市维护建设税</td>
                        <td class="blue">6</td>
                        <td class="green">{{a6_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">资源税</td>
                        <td class="blue">7</td>
                        <td class="green">{{a7_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">土地增值税</td>
                        <td class="blue">8</td>
                        <td class="green">{{a8_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">城镇土地使用税、房产税、车船税、印花税</td>
                        <td class="blue">9</td>
                        <td class="green">{{a9_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">教育费附加、矿产资源补偿费、排污费</td>
                        <td class="blue">10</td>
                        <td class="green">{{a10_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">销售费用</td>
                        <td class="blue">11</td>
                        <td class="green">{{a11_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：商品维修费</td>
                        <td class="blue">12</td>
                        <td class="green">{{a12_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">广告费和业务宣传费</td>
                        <td class="blue">13</td>
                        <td class="green">{{a13_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">管理费用</td>
                        <td class="blue">14</td>
                        <td class="green">{{a14_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：开办费</td>
                        <td class="blue">15</td>
                        <td class="green">{{a15_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">业务招待费</td>
                        <td class="blue">16</td>
                        <td class="green">{{a16_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a16_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">研究费用</td>
                        <td class="blue">17</td>
                        <td class="green">{{a17_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a17_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">财务费用</td>
                        <td class="blue">18</td>
                        <td class="green">{{a18_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a18_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">其中：利息费用（收入以“-”号填列）</td>
                        <td class="blue">19</td>
                        <td class="green">{{a19_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a19_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 加：投资收益（亏损以“-”号填列）</td>
                        <td class="blue">20</td>
                        <td class="green">{{a20_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a20_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 二、营业利润（亏损以“-”号填列）</td>
                        <td class="blue">21</td>
                        <td>{{a21_1|formatCurrency}}</td>
                        <td><number-input v-model="a21_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue"> 加：营业外收入</td>
                        <td class="blue">22</td>
                        <td class="green">{{a22_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 其中：政府补助</td>
                        <td class="blue">23</td>
                        <td class="green">{{a23_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a23_2" :fixed="fixed"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">减：营业外支出</td>
                        <td class="blue">24</td>
                        <td class="green">{{a24_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">其中：坏账损失</td>
                        <td class="blue">25</td>
                        <td class="green">{{a25_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a25_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">无法收回的长期债券投资损失</td>
                        <td class="blue">26</td>
                        <td class="green">{{a26_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a26_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue"> 无法收回的长期股权投资损失</td>
                        <td class="blue">27</td>
                        <td class="green">{{a27_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a27_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">自然灾害等不可抗力因素造成的损失</td>
                        <td class="blue">28</td>
                        <td class="green">{{a28_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue"> 税收滞纳金</td>
                        <td class="blue">29</td>
                        <td class="green">{{a29_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a29_2" :fixed="fixed"></number-input></td>
                    </tr> 
                     <tr>
                        <td class="blue">三、利润总额（亏损总额以“-”号填列）</td>
                        <td class="blue">30</td>
                        <td>{{a30_1|formatCurrency}}</td>
                        <td><number-input v-model="a30_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">减：所得税费用</td>
                        <td class="blue">31</td>
                        <td class="green">{{a31_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a31_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">四、净利润（净亏损以“-”号填列）</td>
                        <td class="blue">32</td>
                        <td>{{a32_1|formatCurrency}}</td>
                        <td><number-input v-model="a32_2" :fixed="fixed"></number-input></td>
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
        name: 'excel30',
        data() {
            return {
                fixed:2,
                id:0,
                a1_1:0,
                a1_2:0,
                a2_1:0,
                a2_2:0,
                a3_1:0,
                a3_2:0,
                a4_1:0,
                a4_2:0,
                a5_1:0,
                a5_2:0,
                a6_1:0,
                a6_2:0,
                a7_1:0,
                a7_2:0,
                a8_1:0,
                a8_2:0,
                a9_1:0,
                a9_2:0,
                a10_1:0,
                a10_2:0,
                a11_1:0,
                a11_2:0,
                a12_1:0,
                a12_2:0,
                a13_1:0,
                a13_2:0,
                a14_1:0,
                a14_2:0,
                a15_1:0,
                a15_2:0,
                a16_1:0,
                a16_2:0,
                a17_1:0,
                a17_2:0,
                a18_1:0,
                a18_2:0,
                a19_1:0,
                a19_2:0,
                a20_1:0,
                a20_2:0,
                a21_1:0,
                a21_2:0,
                a22_1:0,
                a22_2:0,
                a23_1:0,
                a23_2:0,
                a24_1:0,
                a24_2:0,
                a25_1:0,
                a25_2:0,
                a26_1:0,
                a26_2:0,
                a27_1:0,
                a27_2:0,
                a28_1:0,
                a28_2:0,
                a29_1:0,
                a29_2:0,
                a30_1:0,
                a30_2:0,
                a31_1:0,
                a31_2:0,
                a32_1:0,
                a32_2:0,
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAproA"]),
        },
        watch: {
            getTableAproA(newVal) {
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
                    "c_year": this.year,
                    "userId": this.userId
                };
                for(let i=1;i<=32;i++){
                    let p = `a${i}_2`
                    postData[p]=this[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editAproA", {
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
                store.dispatch("getTableAproA",{
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
                    urlParam:"aproa",
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