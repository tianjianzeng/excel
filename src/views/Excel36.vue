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
                        <td class="green"><number-display :value="a1_1"></number-display></td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">减：营业成本</td>
                        <td class="green"><number-display :value="a2_1"></number-display></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue" >营业税金及附加</td>
                        <td class="green"><number-display :value="a3_1"></number-display></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">  销售费用</td>
                        <td class="green"><number-display :value="a4_1"></number-display></td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 管理费用</td>
                        <td class="green"><number-display :value="a5_1"></number-display></td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">财务费用</td>
                        <td class="green"><number-display :value="a6_1"></number-display></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">资产减值损失</td>
                        <td class="green"><number-display :value="a7_1"></number-display></td>
                        <td class="green"><number-input v-model="a7_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">加：公允价值变动收益（损失以“-”号填列）</td>
                        <td class="green"><number-display :value="a8_1"></number-display></td>
                        <td class="green"><number-input v-model="a8_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">投资收益</td>
                        <td class="green"><number-display :value="a9_1"></number-display></td>
                        <td class="green"><number-input v-model="a9_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：对联营企业和合营企业的投资收益</td>
                        <td class="green"><number-display :value="a10_1"></number-display></td>
                        <td class="green"><number-input v-model="a10_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">二、营业利润（亏损以“-”号填列）</td>
                        <td><number-display :value="a11_1"></number-display></td>
                        <td><number-display :value="a12_1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">加：营业外收入</td>
                        <td class="green"><number-display :value="a12_1"></number-display></td>
                        <td class="green"><number-input v-model="a12_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue">其中：非流动资产处置利得</td>
                        <td class="green"><number-display :value="a13_1"></number-display></td>
                        <td class="green"><number-input v-model="a13_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">减：营业外支出</td>
                        <td class="green"><number-display :value="a14_1"></number-display></td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">其中：非流动资产处置损失</td>
                        <td class="green"><number-display :value="a15_1"></number-display></td>
                        <td class="green"><number-input v-model="a15_2" :max="a15_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">三、利润总额（亏损总额以“-”号填列）</td>
                        <td><number-display :value="a16_1"></number-display></td>
                        <td><number-display :value="a16_2"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue">减：所得税费用</td>
                        <td class="green"><number-display :value="a17_1"></number-display></td>
                        <td class="green"><number-input v-model="a17_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">四、净利润（净亏损以“-”号填列）</td>
                        <td><number-display :value="a18_1"></number-display></td>
                        <td><number-display :value="a18_2"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue">五、其他综合收益的税后净额</td>
                        <td><number-display :value="a19_1"></number-display></td>
                        <td><number-display :value="a19_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">（一）以后不能重分类进损益的其他综合收益</td>
                        <td><number-display :value="a20_1"></number-display></td>
                        <td><number-display :value="a20_2"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue">1.重新计量设定收益计划净负债或净资产的变动</td>
                        <td class="green"><number-display :value="a21_1"></number-display></td>
                        <td class="green"><number-input v-model="a21_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">2.权益法下在被投资单位不能重分类进损益的其他综合收益中享有的份额</td>
                        <td class="green"><number-display :value="a22_1"></number-display></td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">（二）以后将重分类进损益的其他综合收益</td>
                        <td><number-display :value="a23_1"></number-display></td>
                        <td><number-display :value="a23_2"></number-display></td>
                    </tr>      
                    <tr>
                        <td class="blue">1.权益法下在被投资单位以后将重分类进损益的其他综合收益中享有的份额</td>
                        <td class="green"><number-display :value="a24_1"></number-display></td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>   
                     <tr>
                        <td class="blue">2.可供出售金融资产公允价值变动损益</td>
                        <td class="green"><number-display :value="a25_1"></number-display></td>
                        <td class="green"><number-input v-model="a25_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">3.将有至到期投资重分类可供出售金融资产损益</td>
                        <td class="green"><number-display :value="a26_1"></number-display></td>
                        <td class="green"><number-input v-model="a26_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">4.现金流经套期损益的有效部分</td>
                        <td class="green"><number-display :value="a27_1"></number-display></td>
                        <td class="green"><number-input v-model="a27_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>  
                     <tr>
                        <td class="blue">5.外币财务报表折算差额</td>
                        <td class="green"><number-display :value="a28_1"></number-display></td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">六、综合收益总额</td>
                        <td><number-display :value="a29_1"></number-display></td>
                        <td><number-display :value="a29_2"></number-display></td>
                    </tr> 
                     <tr>
                        <td class="blue" colspan="3">七、每股收益：</td>
                    </tr> 
                    <tr>
                        <td class="blue">（一）基本每股收益</td>
                        <td class="green"><number-display :value="a31_1"></number-display></td>
                        <td class="green"><number-input v-model="a31_2" :fixed="fixed" :editable="getFirst"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">（二）稀释每股收益</td>
                        <td><number-display :value="a32_1"></number-display></td>
                        <td><number-input v-model="a32_2" :fixed="fixed" :editable="getFirst"></number-input></td>
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
        name: 'excel36',
        data() {
            return {
                fixed:2,
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
                a12_1: 0,
                a12_2: 0,
                a13_1: 0,
                a13_2: 0,
                a14_1: 0,
                a14_2: 0,
                a15_1: 0,
                a15_2: 0,
                a16_1: 0,
                a17_1: 0,
                a17_2: 0,
                a18_1: 0,
                a19_1: 0,
                a20_1: 0,
                a21_1: 0,
                a21_2: 0,
                a22_1: 0,
                a22_2: 0,
                a23_1: 0,
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
                a30_1: null,
                a30_2: null,
                a31_1: 0,
                a31_2: 0,
                a32_1: 0,
                a32_2: 0,
                c_year: 2016,
                id: 4
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAproC","getFirst"]),
            a11_2(){
                //本列1行-2行-3行-4行-5行-6行-7行+8行+9行
                let rst = this.a1_2 * Math.pow(10,this.fixed);
                for(let i=2;i<=7;i++){
                    this[`a${i}_2`] && (rst -= this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                for(let i=8;i<=9;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a16_2(){
                //本列11行+12行-14行
                let rst = this.a14_2 * Math.pow(10,this.fixed) * -1;
                for(let i=11;i<=12;i++){
                    this[`a${i}_2`] && (rst -= this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            //本列16行-17行	18
            // 本列20行+23行	19
            // 本列21行+22行	20
            a18_2(){
                return (this.a16_2 * Math.pow(10,this.fixed) - this.a17_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a19_2(){
                return (this.a20_2 * Math.pow(10,this.fixed) + this.a23_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a20_2(){
                return (this.a21_2 * Math.pow(10,this.fixed) + this.a22_2 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a23_2(){
                //本列24行+25行+26行+27行+28行
                let rst = 0;
                for(let i=24;i<=28;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a29_2(){
                //本列24行+25行+26行+27行+28行
                let rst = 0;
                for(let i=18;i<=19;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            }
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
                store.dispatch("getFirst",{
                    data:{
                        "uid": 1,
                        "year": new Date().getFullYear()
                    }
                });
                store.dispatch("getTableAproC",{
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
                    urlParam:"aproc",
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