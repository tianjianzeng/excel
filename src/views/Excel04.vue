<template>
    <div class="excel excel04">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width: 60px"/>
                <col style="width: 75%"/>
                <col style="width: 20%"/>
                <tbody>
                    <tr>
                        <td colspan="3" class="ta-c">一般企业收入明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" style="width: 5%">行次</td>
                        <td class="blue ta-c" style="width: 75%">项目</td>
                        <td class="blue ta-c" style="width: 20%">金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue">一、营业收入（2+9）</td>
                        <td><number-display :value="a1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue ti-2">（一）主营业务收入（3+5+6+7+8）</td>
                        <td><number-display :value="a2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue ti-4">1.销售商品收入</td>
                        <td class="green"><number-display :value="a3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue ti-6">其中：非货币性资产交换收入</td>
                        <td class="green"><number-input v-model="a4" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue ti-4">2.提供劳务收入</td>
                        <td class="green"><number-display :value="a5"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue ti-4">3.建造合同收入</td>
                        <td class="green"><number-input v-model="a6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue ti-4">4.让渡资产使用权收入</td>
                        <td class="green"><number-input v-model="a7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue ti-4">5.其他</td>
                        <td class="green"><number-input v-model="a8" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue ti-2">（二）其他业务收入（10+12+13+14+15）</td>
                        <td><number-display :value="a9"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue ti-4">1.销售材料收入</td>
                        <td class="green"><number-input v-model="a10" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue ti-6">其中：非货币性资产交换收入</td>
                        <td class="green"><number-input v-model="a11" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue ti-4">2.出租固定资产收入</td>
                        <td class="green"><number-input v-model="a12" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue ti-4">3.出租无形资产收入</td>
                        <td class="green"><number-input v-model="a13" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">14</td>
                        <td class="blue ti-4">4.出租包装物和商品收入</td>
                        <td class="green"><number-input v-model="a14" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">15</td>
                        <td class="blue ti-4">5.其他</td>
                        <td class="green"><number-display :value="a15"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">16</td>
                        <td class="blue">二、营业外收入（17+18+19+20+21+22+23+24+25+26）</td>
                        <td><number-display :value="a16"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">17</td>
                        <td class="blue ti-2">（一）非流动资产处置利得</td>
                        <td class="green"><number-display :value="a17"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">18</td>
                        <td class="blue ti-2">（二）非货币性资产交换利得</td>
                        <td class="green"><number-input v-model="a18" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">19</td>
                        <td class="blue ti-2">（三）债务重组利得</td>
                        <td class="green"><number-input v-model="a19" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">20</td>
                        <td class="blue ti-2">（四）政府补助利得</td>
                        <td class="green"><number-input v-model="a20" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">21</td>
                        <td class="blue ti-2">（五）盘盈利得</td>
                        <td class="green"><number-input v-model="a21" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">22</td>
                        <td class="blue ti-2">（六）捐赠利得</td>
                        <td class="green"><number-input v-model="a22" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">23</td>
                        <td class="blue ti-2">（七）罚没利得</td>
                        <td class="green"><number-input v-model="a23" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">24</td>
                        <td class="blue ti-2">（八）确实无法偿付的应付款项</td>
                        <td class="green"><number-input v-model="a24" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">25</td>
                        <td class="blue ti-2">（九）汇兑收益</td>
                        <td title="该项目仅为执行小企业准则企业填表"><number-input v-model="a25" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">26</td>
                        <td class="blue ti-2">（十）其他</td>
                        <td class="green"><number-display :value="a26"></number-display></td>
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
        name: 'excel04',
        data() {
            return {
                fixed:2,
                year:0,
                uid:0,
                userId:0,
                a3:0,
                a4:0,
                a5:0,
                a6:0,
                a7:0,
                a8:0,
                a10:0,
                a11:0,
                a12:0,
                a13:0,
                a14:0,
                a15:0,
                a17:0,
                a18:0,
                a19:0,
                a20:0,
                a21:0,
                a22:0,
                a23:0,
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
            ...mapGetters(["getTableA101010"]),
            a1() {
                return ((this.a2 || 0) * Math.pow(10,this.fixed) + (this.a9 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
            },
            a2() {
                let rst = 0;
                for(let i=3;i<=8;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a9() {
                let rst = 0;
                for(let i=10;i<=15;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a16() {
                let rst = 0;
                for(let i=17;i<=26;i++){
                    rst += this[`a${i}`] * Math.pow(10,this.fixed);
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableA101010(newVal) {
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
                    "year":this.year,
                    "userId":this.userId
                };
                for(let i=1;i<=26;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA101010", {
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
                store.dispatch("getTableA101010",{
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
                    urlParam:"a101010",
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