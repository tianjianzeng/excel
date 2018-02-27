<template>
    <div class="excel excel07">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width: 60px"></col>
                <col style="width: 75%"></col>
                <col style="width: 10%"></col>
                <col style="width: 10%"></col>
                <tbody>
                    <tr>
                        <td colspan="4" class="ta-c">视同销售和房地产开发企业特定业务纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="2" style="width: 5%">行次</td>
                        <td class="blue" rowspan="2" style="width: 75%">项目</td>
                        <td class="blue" style="width: 10%">税收金额</td>
                        <td class="blue" style="width: 10%">纳税调整金额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">一、视同销售（营业）收入（2+3+4+5+6+7+8+9+10）</td>
                        <td><number-display :value="a1_1"></number-display></td>
                        <td><number-display :value="a1_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">（一）非货币性资产交换视同销售收入</td>
                        <td class="green"><number-input v-model="a2_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">（二）用于市场推广或销售视同销售收入</td>
                        <td class="green"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a3_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">（三）用于交际应酬视同销售收入</td>
                        <td class="green"><number-input v-model="a4_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">（四）用于职工奖励或福利视同销售收入</td>
                        <td class="green"><number-input v-model="a5_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a5_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">（五）用于股息分配视同销售收入</td>
                        <td class="green"><number-input v-model="a6_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a6_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">（六）用于对外捐赠视同销售收入</td>
                        <td class="green"><number-input v-model="a7_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a7_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">（七）用于对外投资项目视同销售收入</td>
                        <td class="green"><number-input v-model="a8_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a8_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">（八）提供劳务视同销售收入</td>
                        <td class="green"><number-input v-model="a9_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a9_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">（九）其他</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a10_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">二、视同销售（营业）成本（12+13+14+15+16+17+18+19+20）</td>
                        <td><number-display :value="a11_1"></number-display></td>
                        <td><number-display :value="a11_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">（一）非货币性资产交换视同销售成本</td>
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a12_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">（二）用于市场推广或销售视同销售成本</td>
                        <td class="green"><number-input v-model="a13_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a13_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">（三）用于交际应酬视同销售成本</td>
                        <td class="green"><number-input v-model="a14_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a14_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">（四）用于职工奖励或福利视同销售成本</td>
                        <td class="green"><number-input v-model="a15_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a15_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">16</td>
                        <td class="blue">（五）用于股息分配视同销售成本</td>
                        <td class="green"><number-input v-model="a16_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a16_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">17</td>
                        <td class="blue">（六）用于对外捐赠视同销售成本</td>
                        <td class="green"><number-input v-model="a17_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a17_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">18</td>
                        <td class="blue">（七）用于对外投资项目视同销售成本</td>
                        <td class="green"><number-input v-model="a18_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a18_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">19</td>
                        <td class="blue">（八）提供劳务视同销售成本</td>
                        <td class="green"><number-input v-model="a19_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a19_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">20</td>
                        <td class="blue">（九）其他</td>
                        <td class="green"><number-input v-model="a20_1" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a20_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">21</td>
                        <td class="blue">三、房地产开发企业特定业务计算的纳税调整额（22-26）</td>
                        <td><number-display :value="a21_1"></number-display></td>
                        <td><number-display :value="a21_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">22</td>
                        <td class="blue">（一）房地产企业销售未完工开发产品特定业务计算的纳税调整额（24-25）</td>
                        <td><number-display :value="a22_1"></number-display></td>
                        <td><number-display :value="a22_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">23</td>
                        <td class="blue">1.销售未完工产品的收入</td>
                        <td><number-display :value="a23_1"></number-display></td>
                        <td class="blue">*</td>
                    </tr>
                    <tr>
                        <td class="blue">24</td>
                        <td class="blue">2.销售未完工产品预计毛利额</td>
                        <td><number-display :value="a24_1"></number-display></td>
                        <td><number-display :value="a24_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">25</td>
                        <td class="blue">3.实际发生的营业税金及附加、土地增值税</td>
                        <td><number-display :value="a25_1"></number-display></td>
                        <td><number-display :value="a25_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">26</td>
                        <td class="blue">（二）房地产企业销售的未完工产品转完工产品特定业务计算的纳税调整额（28-29）</td>
                        <td><number-display :value="a26_1"></number-display></td>
                        <td><number-display :value="a26_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">27</td>
                        <td class="blue">1.销售未完工产品转完工产品确认的销售收入</td>
                        <td><number-display :value="a27_1"></number-display></td>
                        <td class="blue">*</td>
                    </tr>
                    <tr>
                        <td class="blue">28</td>
                        <td class="blue">2.转回的销售未完工产品预计毛利额</td>
                        <td><number-display :value="a28_1"></number-display></td>
                        <td><number-display :value="a28_2"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">29</td>
                        <td class="blue">3.转回实际发生的营业税金及附加、土地增值税</td>
                        <td><number-display :value="a29_1"></number-display></td>
                        <td><number-display :value="a29_2"></number-display></td>
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
        name: 'excel07',
        data() {
            return {
                fixed:2,
                year:0,
                uid:0,
                userId:0,
                id:0,
                a2_1:0,
                a3_1:0,
                a4_1:0,
                a5_1:0,
                a6_1:0,
                a7_1:0,
                a8_1:0,
                a9_1:0,
                a10_1:0,
                a12_1:0,
                a13_1:0,
                a14_1:0,
                a15_1:0,
                a16_1:0,
                a17_1:0,
                a18_1:0,
                a19_1:0,
                a20_1:0,
                a21_1:0,
                a22_1:0,
                a23_1:0,
                a24_1:0,
                a25_1:0,
                a26_1:0,
                a27_1:0,
                a28_1:0,
                a29_1:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA105010"]),
            a1_1(){
                let rst = 0;
                for(let i=2;i<=10;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a1_2(){
                return this.a1_1;
            },
            a2_2(){
                return this.a2_1;
            },
            a3_2(){
                return this.a3_1;
            },
            a4_2(){
                return this.a4_1;
            },
            a5_2(){
                return this.a5_1;
            },
            a6_2(){
                return this.a6_1;
            },
            a7_2(){
                return this.a7_1;
            },
            a8_2(){
                return this.a8_1;
            },
            a9_2(){
                return this.a9_1;
            },
            a10_2(){
                return this.a10_1;
            },
            a11_1(){
                let rst = 0;
                for(let i=12;i<=20;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a11_2(){
                return Math.abs(this.a11_1);
            },
            a12_2(){
                return Math.abs(this.a12_1);
            },
            a13_2(){
                return Math.abs(this.a13_1);
            },
            a14_2(){
                return Math.abs(this.a14_1);
            },
            a15_2(){
                return Math.abs(this.a15_1);
            },
            a16_2(){
                return Math.abs(this.a16_1);
            },
            a17_2(){
                return Math.abs(this.a17_1);
            },
            a18_2(){
                return Math.abs(this.a18_1);
            },
            a19_2(){
                return Math.abs(this.a19_1);
            },
            a20_2(){
                return this.a20_1;
            },
            a21_2(){
                return this.a21_1;
            },
            a22_2(){
                return this.a22_1;
            },
            a24_2(){
                return this.a24_1;
            },
            a25_2(){
                return this.a25_1;
            },
            a26_2(){
                return this.a26_1;
            },
            a28_2(){
                return this.a28_1;
            },
            a29_2(){
                return this.a29_1;
            }
        },
        watch: {
            getTableA105010(newVal) {
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
                    id:this.id
                };
                for(let i=1;i<=29;i++){
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
                store.dispatch("editA105010", {
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
                store.dispatch("getTableA105010",{
                    data:{
                        "uid": this.uid,
                        "year": this.year,
                        "userId":this.userId
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
                    urlParam:"a105010",
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