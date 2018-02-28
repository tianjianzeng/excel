<template>
    <div class="excel excel13">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width:5%" />
                <col style="width:75%"/>
                <col style="width:20%"/>
                <tbody>
                    <tr>
                        <td colspan="3">政策性搬迁纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue ta-c">行次</td>
                        <td style="width:75%" class="blue ta-c">项目</td>
                        <td style="width:20%" class="blue ta-c">金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">一、搬迁收入(2+8)</td>
                        <td><number-display :value="a1" :min="0"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">（一）搬迁补偿收入（3+4+5+6+7）</td>
                        <td><number-display :value="a2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">1.对被征用资产价值的补偿</td>
                        <td class="green"><number-input v-model="a3" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">2.因搬迁、安置而给予的补偿</td>
                        <td class="green"><number-input v-model="a4" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">3.对停产停业形成的损失而给予的补偿</td>
                        <td class="green"><number-input v-model="a5" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">4.资产搬迁过程中遭到毁损而取得的保险赔款</td>
                        <td class="green"><number-input v-model="a6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">5.其他补偿收入</td>
                        <td class="green"><number-input v-model="a7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">（二）搬迁资产处置收入</td>
                        <td class="green"><number-input v-model="a8" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">二、搬迁支出(10+16)</td>
                        <td><number-display :value="a9" :min="0"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">（一）搬迁费用支出(11+12+13+14+15)</td>
                        <td><number-display :value="a10"></number-display></td>
                    </tr>      
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">1.安置职工实际发生的费用</td>
                        <td class="green"><number-input v-model="a11" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">2.停工期间支付给职工的工资及福利费</td>
                        <td class="green"><number-input v-model="a12" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">3.临时存放搬迁资产而发生的费用</td>
                        <td class="green"><number-input v-model="a13" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">4.各类资产搬迁安装费用</td>
                        <td class="green"><number-input v-model="a14" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">5.其他与搬迁相关的费用</td>
                        <td class="green"><number-input v-model="a15" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue">（二）搬迁资产处置支出</td>
                        <td class="green"><number-input v-model="a16" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue">三、搬迁所得或损失（1-9）</td>
                        <td><number-display :value="a17"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue">四、应计入本年应纳税所得额的搬迁所得或损失（19+20+21）</td>
                        <td><number-display :value="a18"></number-display></td>
                    </tr>  
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue">其中：搬迁所得</td>
                        <td class="green"><number-input v-model="a19" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue">搬迁损失一次性扣除</td>
                        <td class="green"><number-input v-model="a20" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue">搬迁损失分期扣除</td>
                        <td class="green"><number-input v-model="a21" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue">五、计入当期损益的搬迁收益或损失</td>
                        <td class="green"><number-input v-model="a22" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue">六、以前年度搬迁损失当期扣除金额</td>
                        <td class="green"><number-input v-model="a23" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue">七、纳税调整金额（18-22-23）</td>
                        <td><number-display :value="a24"></number-display></td>
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
    import NumberDisplay from '../components/NumberDisplay'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel13',
        data() {
            return {
                fixed:2,
                id:0,
                "a3":0,
                "a4":0,
                "a5":0,
                "a6":0,
                "a7":0,
                "a8":0,
                "a11":0,
                "a12":0,
                "a13":0,
                "a14":0,
                "a15":0,
                "a16":0,
                "a19":0,
                "a20":0,
                "a21":0,
                "a22":0,
                "a23":0,
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA105110"]),
            a1() {
               return ((this.a2 || 0) * Math.pow(10,this.fixed) + (this.a8 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2() {
                let rst = 0;
                for(let i=3;i<=7;i++){
                    this[`a${i}`] && (rst += this[`a${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a9() {
                return ((this.a10 || 0) * Math.pow(10,this.fixed) + (this.a16 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a10() {
               let rst = 0;
                for(let i=11;i<=15;i++){
                    this[`a${i}`] && (rst += this[`a${i}`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a17() {
                return ((this.a1 || 0) * Math.pow(10,this.fixed) - (this.a9 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a18() {
                return ((this.a19 || 0) * Math.pow(10,this.fixed) + (this.a20 || 0) * Math.pow(10,this.fixed) + (this.a21 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a24() {
                return ((this.a18 || 0) * Math.pow(10,this.fixed) - (this.a22 || 0) * Math.pow(10,this.fixed) - (this.a23 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
        },
        watch: {
            getTableA105110(newVal) {
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
                if(this.a1<0){
                    window.root && window.root.$emit("bizError",'一、搬迁收入不能小于0');
                    return;
                }
                if(this.a9<0){
                    window.root && window.root.$emit("bizError",'二、搬迁支出不能小于0');
                    return;
                }
               let postData = {
                    "uid": this.uid,
                    "year": this.year,
                    "userId": this.userId,
                    "id": this.id
                };
                for(let i=1;i<=24;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA105110", {
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
                store.dispatch("getTableA105110",{
                    data:{
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
                    urlParam:"a105110",
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
    .excel13{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>