<template>
    <div class="excel excel16">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width:60px" />
                <col style="width:20%"/>
                <col style="width:60%"/>
                <col style="width:15%"/>
                <tbody>
                    <tr>
                        <td colspan="4" class="ta-c">免税、减计收入及加计扣除优惠明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">行次</td>
                        <td class="blue ta-c" colspan="2">项目</td>
                        <td class="blue ta-c">金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue" colspan="2">一、免税收入（2+3+4+5）</td>
                        <td><number-display :value="a1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue ti-2" colspan="2">（一）国债利息收入</td>
                        <td class="green"><number-input v-model="a2" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue ti-2" colspan="2">（二）符合条件的居民企业之间的股息、红利等权益性投资收益（填写A107011）</td>
                        <td><number-display :value="a3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue ti-2" colspan="2">（三）符合条件的非营利组织的收入</td>
                        <td class="green"><number-input v-model="a4" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue ti-2" colspan="2">（四）其他专项优惠（6+7+8+9+10+11+12+13+14）</td>
                        <td><number-display :value="a5"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue ti-4" colspan="2">1.中国清洁发展机制基金取得的收入</td>
                        <td class="green"><number-input v-model="a6" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue ti-4" colspan="2">2.证券投资基金从证券市场取得的收入</td>
                        <td class="green"><number-input v-model="a7" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue ti-4" colspan="2">3.证券投资基金投资者获得的分配收入</td>
                        <td class="green"><number-input v-model="a8" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue ti-4" colspan="2">4.证券投资基金管理人运用基金买卖股票、债券的差价收入</td>
                        <td class="green"><number-input v-model="a9" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue ti-4" colspan="2">5.取得的地方政府债券利息所得或收入</td>
                        <td class="green"><number-input v-model="a10" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue ti-4" colspan="2">6.受灾地区企业取得的救灾和灾后恢复重建款项等收入</td>
                        <td class="green"><number-input v-model="a11" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue ti-4" colspan="2">7.中国期货保证金监控中心有限责任公司取得的银行存款利息等收入</td>
                        <td class="green"><number-input v-model="a12" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue ti-4" colspan="2">8.中国保险保障基金有限责任公司取得的保险保障基金等收入</td>
                        <td class="green"><number-input v-model="a13" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">14</td>
                        <td class="blue ti-4">9.其他</td>
                        <td class="green">
                            <el-select v-model="a14_1" placeholder="请选择">
                                <el-option
                                    v-for="it in selListA107040"
                                    :key="it.id"
                                    :label="it.name"
                                    :value="it.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td class="green"><number-input v-model="a14_2" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">15</td>
                        <td class="blue" colspan="2">二、减计收入（16+17）</td>
                        <td><number-display :value="a15"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">16</td>
                        <td class="blue ti-2" colspan="2">（一）综合利用资源生产产品取得的收入（填写A107012）</td>
                        <td><number-display :value="a16"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">17</td>
                        <td class="blue ti-2" colspan="2">（二）其他专项优惠（18+19+20）</td>
                        <td><number-display :value="a17"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">18</td>
                        <td class="blue ti-4" colspan="2">1.金融、保险等机构取得的涉农利息、保费收入（填写A107013）</td>
                        <td><number-display :value="a18"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">19</td>
                        <td class="blue ti-4" colspan="2">2.取得的中国铁路建设债券利息收入</td>
                        <td class="green"><number-input v-model="a19" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">20</td>
                        <td class="blue ti-4" colspan="2">3.其他</td>
                        <td class="green"><number-input v-model="a20" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">21</td>
                        <td class="blue" colspan="2">三、加计扣除（22+23+26）</td>
                        <td><number-display :value="a21"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">22</td>
                        <td class="blue ti-2" colspan="2">（一）开发新技术、新产品、新工艺发生的研究开发费用加计扣除（填写A107014）</td>
                        <td><number-display :value="a22"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">23</td>
                        <td class="blue ti-2" colspan="2">（二）安置残疾人员及国家鼓励安置的其他就业人员所支付的工资加计扣除（24+25）</td>
                        <td><number-display :value="a23"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">24</td>
                        <td class="blue ti-4" colspan="2">1.支付残疾人员工资加计扣除</td>
                        <td class="green"><number-input v-model="a24" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">25</td>
                        <td class="blue ti-4" colspan="2">2.国家鼓励的其他就业人员工资加计扣除</td>
                        <td class="green"><number-input v-model="a25" :fixed="fixed" :min="0"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">26</td>
                        <td class="blue ti-2" colspan="2">（三）其他专项优惠</td>
                        <td><number-display :value="a26"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">27</td>
                        <td class="blue" colspan="2">合计（1+15+21）</td>
                        <td><number-display :value="a27"></number-display></td>
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
        name: 'excel16',
        data() {
            return {
                fixed:2,
                options:[{
                    id: "0004129999",
                    label:"0004129999 科技企业孵化器收入免征企业所得税，国家大学科技园收入免征企业所得税 其他"
                },{
                    id: "0004129999",
                    label:"0004129999 证券投资基金从证券市场中取得的收入暂不征收企业所得税 其他"
                },{
                    id: "0004129999",
                    label:"0004129999 证券投资基金管理人运用基金买卖股票、债券的差价收入暂不征收企业所得税 其他"
                },{
                    id: "0004129999",
                    label:"0004129999 其他 其他"
                },{
                    id: "0004129925",
                    label:"0004129925 中央电视台的广告费和有线电视费收入免征企业所得税 《财政部国家税务总局关于中央电视台广告费和有线电视费收入企业所得税政策问题的通知》财税（2016）80号"
                }],
                id:0,
                year:0,
                a2:0,
                a3:0,
                a4:0,
                a6:0,
                a7:0,
                a8:0,
                a9:0,
                a10:0,
                a11:0,
                a12:0,
                a13:0,
                a14_1:0,
                a14_2:0,
                a16:0,
                a18:0,
                a19:0,
                a20:0,
                a22:0,
                a24:0,
                a25:0,
                a26:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["selListA107040","getTableA107010"]),
            a1() {
                let rst = 0;
                for(let i=2;i<=5;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a5(){
                let rst = 0;
                for(let i=6;i<=13;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                rst += this[`a14_2`] * Math.pow(10,this.fixed);
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a15(){
                let rst = 0;
                for(let i=16;i<=17;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a17(){
                let rst = 0;
                for(let i=18;i<=20;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a21(){
                let rst = 0;
                for(let i=22;i<=23;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                rst += this[`a26`] * Math.pow(10,this.fixed);
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a23(){
                let rst = 0;
                for(let i=24;i<=25;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a27(){
                let rst = 0;
                rst += this.a1 * Math.pow(10,this.fixed);
                rst += this.a15 * Math.pow(10,this.fixed);
                rst += this.a21 * Math.pow(10,this.fixed);
                return rst * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableA107010(newVal) {
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
                    "year": this.year,
                    "userId": this.userId,
                    "a14_1": this.a14_1,
                    "a14_2": this.a14_2
                };
                for(let i=1;i<=27;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA107010", {
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
                store.dispatch("selListA107040");
                store.dispatch("getTableA107010",{
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
                    urlParam:"a107010",
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

<style lang="scss">
</style>