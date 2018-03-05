<template>
    <div class="excel excel23">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width: 60px"/>
                <col style="width: 120px"/>
                <col style="width: 18%"/>
                <col style="width: 18%"/>
                <col style="width: 18%"/>
                <col style="width: 18%"/>
                <tbody>
                    <tr>
                        <td colspan="6" class="ta-c">高新技术企业优惠情况及明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">行次</td>
                        <td class="blue ta-c" colspan="5">基本信息</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue" colspan="2">高新技术企业证书编号</td>
                        <td class="green"><input v-model="a1_1"></td>
                        <td class="blue">高新技术企业证书取得时间</td>
                        <td class="green"><el-date-picker v-model="a1_2" type="date" placeholder="选择日期" :default-value="new Date()"></el-date-picker></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue" colspan="2">产品（服务）属于《国家重点支持的高新技术领域》规定的范围（填写具体范围名称）</td>
                        <td class="green"><input v-model="a2_1"></td>
                        <td class="blue">是否发生重大安全、质量事故</td>
                        <td class="green">
                            <el-radio class="radio" v-model="a2_2" :label="0">是</el-radio>
                            <el-radio class="radio" v-model="a2_2" :label="1">否</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue" colspan="2">是否有环境等违法、违规行为，受到有关部门处罚的</td>
                        <td class="green">
                            <el-radio class="radio" v-model="a3_1" :label="0">是</el-radio>
                            <el-radio class="radio" v-model="a3_1" :label="1">否</el-radio>
                        </td>
                        <td class="blue">是否发生偷骗税行为</td>
                        <td class="green">
                            <el-radio class="radio" v-model="a3_2" :label="0">是</el-radio>
                            <el-radio class="radio" v-model="a3_2" :label="1">否</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c" colspan="5">关键指标情况</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue ta-c" rowspan="5">收入指标</td>
                        <td class="blue" colspan="3">一、本年高新技术产品（服务）收入（6+7）</td>
                        <td><number-display :value="a5"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue" colspan="3">其中：产品（服务）收入</td>
                        <td class="green"><number-input v-model="a6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue" colspan="3">技术性收入</td>
                        <td class="green"><number-input v-model="a7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue" colspan="3">二、本年企业总收入</td>
                        <td class="green"><number-input v-model="a8" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue" colspan="3">三、本年高新技术产品（服务）收入占企业总收入的比例（5÷8）</td>
                        <td>{{a9}}</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue ta-c" rowspan="5">人员指标</td>
                        <td class="blue" colspan="3">四、本年具有大学专科以上学历的科技人员数</td>
                        <td class="green"><number-input v-model="a10" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue" colspan="3">五、本年研发人员数</td>
                        <td class="green"><number-input v-model="a11" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue" colspan="3">六、本年职工总数</td>
                        <td class="green"><number-input v-model="a12" :fixed="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue" colspan="3">七、本年具有大学专科以上学历的科技人员占企业当年职工总数的比例（10÷12）</td>
                        <td>{{a13}}</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">14</td>
                        <td class="blue" colspan="3">八、本年研发人员占企业当年职工总数的比例（11÷12）</td>
                        <td>{{a14}}</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">15</td>
                        <td class="blue ta-c" rowspan="14">研究开发费用指标</td>
                        <td class="blue" colspan="3">九、本年归集的高新研发费用金额（16+25）</td>
                        <td><number-display :value="a15"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">16</td>
                        <td class="blue" colspan="3">（一）内部研究开发投入（17+18+19+20+21+22+24）</td>
                        <td><number-display :value="a16"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">17</td>
                        <td class="blue" colspan="3">1.人员人工</td>
                        <td class="green"><number-input v-model="a17" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">18</td>
                        <td class="blue" colspan="3">2.直接投入</td>
                        <td class="green"><number-input v-model="a18" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">19</td>
                        <td class="blue" colspan="3">3.折旧费用与长期费用摊销</td>
                        <td class="green"><number-input v-model="a19" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">20</td>
                        <td class="blue" colspan="3">4.设计费用</td>
                        <td class="green"><number-input v-model="a20" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">21</td>
                        <td class="blue" colspan="3">5.装备调试费</td>
                        <td class="green"><number-input v-model="a21" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">22</td>
                        <td class="blue" colspan="3">6.无形资产摊销</td>
                        <td class="green"><number-input v-model="a22" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">23</td>
                        <td class="blue" colspan="3">7.其他费用</td>
                        <td class="green"><number-input v-model="a23" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">24</td>
                        <td class="blue" colspan="3">其中：可计入研发费用的其他费用</td>
                        <td class="green"><number-input v-model="a24" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">25</td>
                        <td class="blue" colspan="3">（二）委托外部研究开发费用（26+27）</td>
                        <td><number-display :value="a25"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">26</td>
                        <td class="blue" colspan="3">1.境内的外部研发费</td>
                        <td class="green"><number-input v-model="a26" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">27</td>
                        <td class="blue" colspan="3">2.境外的外部研发费</td>
                        <td class="green"><number-input v-model="a27" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">28</td>
                        <td class="blue" colspan="3">十、本年研发费用占销售（营业）收入比例</td>
                        <td class="green"><number-input v-model="a28_" :fixed="fixed" :filter="toPercent"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">29</td>
                        <td class="blue" colspan="4">减免税金额</td>
                        <td class="green"><number-display :value="a29"></number-display></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button v-if="false" type="primary" @click="refresh">刷新</el-button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import store from '../store'
    import NumberInput from '../components/NumberInput'
    import NumberDisplay from '../components/NumberDisplay'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel23',
        data() {
            return {
                fixed:2,
                id:0,
                a1_1: "",
                a1_2: "",
                a2_1: "",
                a2_2: 1,
                a3_1: 1,
                a3_2: 1,
                a4:0,
                a6:0,
                a7:0,
                a8:0,
                a10:0,
                a11:0,
                a12:0,
                a17:0,
                a18:0,
                a19:0,
                a20:0,
                a21:0,
                a22:0,
                a23:0,
                a24:0,
                a26:0,
                a27:0,
                a29:0,
                a28_:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA107041"]),
            a5(){
                let rst = 0;
                for(let i=6;i<=7;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a9(){
                return this.toPercent(this.a5 / this.a8);
            },
            a13(){
                return this.toPercent(this.a10 / this.a12);
            },
            a14(){
                return this.toPercent(this.a11 / this.a12);
            },
            a15(){
                let rst = 0;
                for(let i of [16,25]){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a16(){
                let rst = 0;
                for(let i of [17,18,19,20,21,22,24]){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a25(){
                let rst = 0;
                for(let i of [26,27]){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a28(){
                return this.toPercent(this.a28_,2);
            }
        },
        watch: {
            getTableA107041(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                    this.a28_ = parseFloat(newVal.a28) || 0;
                }
            }
        },
        methods:{
            toPercent(num, fixed = 2) {
                if(typeof num != "number"){
                    num = Number(num);
                }
                if(num === Infinity){
                    return "";
                }
                if(isNaN(num)){
                    num = 0;
                }

                return (num*100).toFixed(fixed) + '%';
            },
            save(){
                let postData = {
                    "id":this.id
                };
                for(let i=1;i<=29;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                    for(let j = 1;j<=2;j++){
                        let q = `a${i}_${j}`
                        postData[q]=this[q];
                    }
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA107041", {
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
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableA107041", {
                    data: {
                        "uid": this.uid,
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
                    urlParam:"a107041",
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