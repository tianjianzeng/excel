<template>
    <div class="excel excel36">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="3">利润表</td>
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
                        <td class="blue">一、营业收入</td>
                        <td class="green">{{a1_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">减：营业成本</td>
                        <td class="green">{{a2_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue" >营业税金及附加</td>
                        <td class="green">{{a3_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">  销售费用</td>
                        <td class="green">{{a4_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 管理费用</td>
                        <td class="green">{{a5_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">财务费用</td>
                        <td class="green">{{a6_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">资产减值损失</td>
                        <td class="green">{{a7_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">加：公允价值变动收益（损失以“-”号填列）</td>
                        <td class="green">{{a8_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">投资收益/td>
                        <td class="green">{{a9_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：对联营企业和合营企业的投资收益</td>
                        <td class="green">{{a10_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">二、营业利润（亏损以“-”号填列）</td>
                        <td>{{a11_1|formatCurrency}}</td>
                        <td><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">加：营业外收入</td>
                        <td class="green">{{a12_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">其中：非流动资产处置利得</td>
                        <td class="green">{{a13_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">减：营业外支出</td>
                        <td class="green">{{a14_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：非流动资产处置损失</td>
                        <td class="green">{{a15_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">三、利润总额（亏损总额以“-”号填列）</td>
                        <td>{{a16_1|formatCurrency}}</td>
                        <td><number-input v-model="a16_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">减：所得税费用</td>
                        <td class="green">{{a17_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a17_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">四、净利润（净亏损以“-”号填列）</td>
                        <td>{{a18_1|formatCurrency}}</td>
                        <td><number-input v-model="a18_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">五、其他综合收益的税后净额</td>
                        <td>{{a19_1|formatCurrency}}</td>
                        <td><number-input v-model="a19_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">（一）以后不能重分类进损益的其他综合收益</td>
                        <td>{{a20_1|formatCurrency}}</td>
                        <td><number-input v-model="a20_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">1.重新计量设定收益计划净负债或净资产的变动</td>
                        <td class="green">{{a21_1|formatCurrency}}</td>
                        <td class="green">><number-input v-model="a21_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">2.权益法下在被投资单位不能重分类进损益的其他综合收益中享有的份额</td>
                        <td class="green">{{a22_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">（二）以后将重分类进损益的其他综合收益</td>
                        <td>{{a23_1|formatCurrency}}</td>
                        <td><number-input v-model="a23_2" :fixed="fixed"></number-input></td>
                    </tr>      
                    <tr>
                        <td class="blue">1.权益法下在被投资单位以后将重分类进损益的其他综合收益中享有的份额</td>
                        <td class="green">{{a24_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">2.可供出售金融资产公允价值变动损益</td>
                        <td class="green">{{a25_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a25_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">3.将有至到期投资重分类可供出售金融资产损益</td>
                        <td class="green">{{a26_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a26_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">4.现金流经套期损益的有效部分</td>
                        <td class="green">{{a27_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a27_2" :fixed="fixed"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">5.外币财务报表折算差额</td>
                        <td class="green">{{a28_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">六、综合收益总额</td>
                        <td>{{a29_1|formatCurrency}}</td>
                        <td><number-input v-model="a29_2" :fixed="fixed"></number-input></td>
                    </tr> 
                     <tr>
                        <td class="blue" colspan="3">七、每股收益：</td>
                    </tr> 
                    <tr>
                        <td class="blue">（一）基本每股收益</td>
                        <td class="green">{{a31_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a31_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">（二）稀释每股收益</td>
                        <td>{{a32_1|formatCurrency}}</td>
                        <td><number-input v-model="a32_2" :fixed="fixed"></number-input></td>
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
        name: 'excel36',
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
                a12_1: 0,
                a12_2: 0,
                a14_1: 0,
                a14_2: 0,
                a15_1: 0,
                a15_2: 0,
                a16_1: 0,
                a16_2: 0,
                a18_1: 0,
                a18_2: 0,
                a19_1: 0,
                a19_2: 0,
                a20_1: 0,
                a20_2: 0,
                a21_1: 0,
                a21_2: 0,
                a22_1: 0,
                a22_2: 0,
                a23_1: 0,
                a23_2: 0,
                a24_1: 0,
                a24_2: 0,
                a25_1: 0,
                a25_2: 0,
                a26_1: 0,
                a26_2: 0,
                a27_1: 0,
                a27_2: 0,
                a28_1: 0,
                a28_2: 0,
                a29_1: 0,
                a29_2: 0,
                a30_1: 0,
                a30_2: 0,
                a31_1: 0,
                a31_2: 0,
                a32_1: 0,
                a32_2: 0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAproC"]),
        },
        watch: {
            getTableAproC(newVal) {
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
                    "uid": 1,
                    "mon": 12,
                    "c_year": 2016,
                    "userId":104
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
                store.dispatch("editAproC", {
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
            store.dispatch("getTableAproC",{
                data:{
                    "uid": 2,
                    "mon": 12,
                    "year": 2016,
                    "userId":104
                },
                always:()=>{
                    loading.close();
                }
            }); 
        }
    }
</script>

<style lang="scss" scoped>
    .excel36{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>