<template>
    <div class="excel excel33">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
              <tbody>
                   <tr>
                        <td colspan="4">利润表</td>
                   </tr>
                    <tr>
                        <td colspan="4">（适用执行企业会计制度的公司）</td>
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
                        <td class="blue" style="width:30%">本月数</td>
                        <td class="blue" style="width:30%">本年累计数</td>
                    </tr>
                    <tr>
                        <td class="blue">一、主营业务收入</td>
                        <td class="blue">1</td>
                        <td class="green">{{a1_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 减：主营业务成本</td>
                        <td class="blue">4</td>
                        <td class="green">{{a4_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue"> 主营业务税金及附加</td>
                        <td class="blue">5</td>
                        <td class="green">{{a5_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">二、主营业务利润（亏损以“－”号填列）</td>
                        <td class="blue">10</td>
                        <td>{{a10_1|formatCurrency}}</td>
                        <td>{{a10_2|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">加：其他业务利润（亏损以“－”号填列）</td>
                        <td class="blue">11</td>
                        <td class="green">{{a11_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">减：营业费用</td>
                        <td class="blue">14</td>
                        <td class="green">{{a14_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">管理费用</td>
                        <td class="blue">15</td>
                        <td class="green">{{a15_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">财务费用</td>
                        <td class="blue">16</td>
                        <td class="green">{{a16_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a16_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">三、营业利润（亏损以“－”号填列）</td>
                        <td class="blue">18</td>
                        <td>{{a18_1|formatCurrency}}</td>
                        <td>{{a18_2|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">加：投资收益（损失以“－”填列）</td>
                        <td class="blue">19</td>
                        <td class="green">{{a19_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a19_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">补贴收入</td>
                        <td class="blue">22</td>
                        <td class="green">{{a22_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a22_2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">营业外收入</td>
                        <td class="blue">23</td>
                        <td class="green">{{a23_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a23_2" :fixed="fixed"></number-input></td>
                    </tr>
                     <tr>
                        <td class="blue"> 减：营业外支出</td>
                        <td class="blue">25</td>
                        <td class="green">{{a25_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a25_2" :fixed="fixed"></number-input></td>
                    </tr>  
                    <tr>
                        <td class="blue">四、利润总额（亏损总额以“－”号填列）</td>
                        <td class="blue">27</td>
                        <td>{{a27_1|formatCurrency}}</td>
                        <td>{{a27_2|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">减：所得税</td>
                        <td class="blue">28</td>
                        <td class="green">{{a28_1|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a28_2" :fixed="fixed"></number-input></td>
                    </tr> 
                    <tr>
                        <td class="blue">五、净利润（净亏损以“－”号填列）</td>
                        <td class="blue">30</td>
                        <td>{{a30_1|formatCurrency}}</td>
                        <td>{{a30_2|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue" colspan="4">补充资料：</td>
                    </tr> 
                    <tr>
                        <td class="blue" colspan="2">项目</td>
                        <td class="blue">本年累计数</td>
                        <td class="blue">上年实际数</td>
                    </tr>  
                    <tr>
                        <td class="blue" colspan="2">1．出售、处置部门或被投资单位所得收益</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue" colspan="2">2．自然灾害发生的损失</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue" colspan="2">3．会计政策变更增加(或减少)利润总额</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>   
                     <tr>
                        <td class="blue" colspan="2">4．会计估计变更增加(或减少)利润总额</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>  
                    <tr>
                        <td class="blue" colspan="2">5．债务重组损失</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
                    </tr>      
                    <tr>
                        <td class="blue" colspan="2">6．其他</td>
                        <td class="green">{{0|formatCurrency}}</td>
                        <td class="green">{{0|formatCurrency}}</td>
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
        name: 'excel33',
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
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableAproB"]),
        },
        watch: {
            getTableAproB(newVal) {
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
                store.dispatch("editAproB", {
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
                store.dispatch("getTableAproB",{
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
                    urlParam:"aprob",
                    always:()=>{
                        this.load();
                    }
                })
            }
        },
        mounted() {
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableAproB",{
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
</style>