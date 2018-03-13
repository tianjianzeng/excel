<template>
    <div class="excel excel06">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width: 60px"/>
                <col style="width: 35%"/>
                <col style="width: 10%"/>
                <col style="width: 10%"/>
                <col style="width: 10%"/>
                <col style="width: 10%"/>
                <col style="width: 10%"/>
                <col style="width: 10%"/>
                <tbody>
                    <tr>
                        <td colspan="8" class="ta-c">期间费用明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="2" style="width: 5%">行次</td>
                        <td class="blue ta-c" rowspan="2" style="width: 35%">项目</td>
                        <td class="blue ta-c" style="width: 10%">销售费用</td>
                        <td class="blue ta-c" style="width: 10%">其中：境外支付</td>
                        <td class="blue ta-c" style="width: 10%">管理费用</td>
                        <td class="blue ta-c" style="width: 10%">其中：境外支付</td>
                        <td class="blue ta-c" style="width: 10%">财务费用</td>
                        <td class="blue ta-c" style="width: 10%">其中：境外支付</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3</td>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c">5</td>
                        <td class="blue ta-c">6</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue">一、职工薪酬</td>
                        <td class="green"><number-display :value="a1_1"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a1_3"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue">二、劳务费</td>
                        <td class="green"><number-display :value="a2_1"></number-display></td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-display :value="a2_3"></number-display></td>
                        <td class="green"><number-input v-model="a2_4" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue">三、咨询顾问费</td>
                        <td class="green"><number-input v-model="a3_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_4" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue">四、业务招待费</td>
                        <td class="green"><number-display :value="a4_1"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a4_3"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue">五、广告费和业务宣传费</td>
                        <td class="green"><number-display :value="a5_1"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-input v-model="a5_3" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue">六、佣金和手续费</td>
                        <td class="green"><number-display :value="a6_1"></number-display></td>
                        <td class="green"><number-input v-model="a6_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a6_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-display :value="a6_5" :fixed="fixed"></number-display></td>
                        <td class="green"><number-input v-model="a6_6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue">七、资产折旧摊销费</td>
                        <td class="green"><number-display :value="a7_1"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a7_3"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue">八、财产损耗、盘亏及毁损损失</td>
                        <td class="green"><number-input v-model="a8_1" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-input v-model="a8_3" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue">九、办公费</td>
                        <td class="green"><number-display :value="a9_1"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a9_3"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue">十、董事会费</td>
                        <td class="green"><number-input v-model="a10_1" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-input v-model="a10_3" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue">十一、租赁费</td>
                        <td class="green"><number-input v-model="a11_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a11_4" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue">十二、诉讼费</td>
                        <td class="green"><number-input v-model="a12_1" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-input v-model="a12_3" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue">十三、差旅费</td>
                        <td class="green"><number-display :value="a13_1"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a13_3"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">14</td>
                        <td class="blue">十四、保险费</td>
                        <td class="green"><number-input v-model="a14_1" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-input v-model="a14_3" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">15</td>
                        <td class="blue">十五、运输、仓储费</td>
                        <td class="green"><number-display :value="a15_1"></number-display></td>
                        <td class="green"><number-input v-model="a15_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a15_4" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">16</td>
                        <td class="blue">十六、修理费</td>
                        <td class="green"><number-input v-model="a16_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a16_4" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">17</td>
                        <td class="blue">十七、包装费</td>
                        <td class="green"><number-input v-model="a17_1" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-input v-model="a17_3" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">18</td>
                        <td class="blue">十八、技术转让费</td>
                        <td class="green"><number-input v-model="a18_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a18_4" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">19</td>
                        <td class="blue">十九、研究费用</td>
                        <td class="green"><number-input v-model="a19_1" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a19_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-display :value="a19_3"></number-display></td>
                        <td class="green"><number-input v-model="a19_4" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">20</td>
                        <td class="blue">二十、各项税费</td>
                        <td class="green"><number-input v-model="a20_1" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a20_3"></number-display></td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">21</td>
                        <td class="blue">二十一、利息收支</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a21_5"></number-display></td>
                        <td class="green"><number-input v-model="a21_6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">22</td>
                        <td class="blue">二十二、汇兑差额</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-display :value="a22_5"></number-display></td>
                        <td class="green"><number-input v-model="a22_6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">23</td>
                        <td class="blue">二十三、现金折扣</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="blue ta-c">*</td>
                        <td class="green"><number-input v-model="a23_5" :fixed="fixed"></number-input></td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">24</td>
                        <td class="blue">二十四、其他</td>
                        <td class="green"><number-display :value="a24_1"></number-display></td>
                        <td class="green"><number-input v-model="a24_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-display :value="a24_3"></number-display></td>
                        <td class="green"><number-input v-model="a24_4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a24_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a24_6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">25</td>
                        <td class="blue">合计(1+2+3+…24)</td>
                        <td><number-display :value="a25_1"></number-display></td>
                        <td><number-display :value="a25_2"></number-display></td>
                        <td><number-display :value="a25_3"></number-display></td>
                        <td><number-display :value="a25_4"></number-display></td>
                        <td><number-display :value="a25_5"></number-display></td>
                        <td><number-display :value="a25_6"></number-display></td>
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
    import NumberDisplay from '../components/NumberDisplay'
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel06',
        data() {
            return {
                fixed:2,
                year:0,
                uid:0,
                userId:0,
                a1_1:0,
                a1_3:0,
                a2_1:0,
                a2_2:0,
                a2_3:0,
                a2_4:0,
                a3_1:0,
                a3_2:0,
                a3_3:0,
                a3_4:0,
                a4_1:0,
                a4_3:0,
                a5_1:0,
                a5_3:0,
                a6_1:0,
                a6_2:0,
                a6_3:0,
                a6_4:0,
                a6_5:0,
                a6_6:0,
                a7_1:0,
                a7_3:0,
                a8_1:0,
                a8_3:0,
                a9_1:0,
                a9_3:0,
                a10_1:0,
                a10_3:0,
                a11_1:0,
                a11_2:0,
                a11_3:0,
                a11_4:0,
                a12_1:0,
                a12_3:0,
                a13_1:0,
                a13_3:0,
                a14_1:0,
                a14_3:0,
                a15_1:0,
                a15_2:0,
                a15_3:0,
                a15_4:0,
                a16_1:0,
                a16_2:0,
                a16_3:0,
                a16_4:0,
                a17_1:0,
                a17_3:0,
                a18_1:0,
                a18_2:0,
                a18_3:0,
                a18_4:0,
                a19_1:0,
                a19_2:0,
                a19_3:0,
                a19_4:0,
                a20_1:0,
                a20_3:0,
                a21_5:0,
                a21_6:0,
                a22_5:0,
                a22_6:0,
                a23_5:0,
                a24_1:0,
                a24_2:0,
                a24_3:0,
                a24_4:0,
                a24_5:0,
                a24_6:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA104000"]),
            a25_1(){
                let rst = 0;
                for(let i=1;i<=24;i++){
                    this[`a${i}_1`] && (rst += this[`a${i}_1`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a25_2(){
                let rst = 0;
                for(let i=1;i<=24;i++){
                    this[`a${i}_2`] && (rst += this[`a${i}_2`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a25_3(){
                let rst = 0;
                for(let i=1;i<=24;i++){
                    this[`a${i}_3`] && (rst += this[`a${i}_3`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a25_4(){
                let rst = 0;
                for(let i=1;i<=24;i++){
                    this[`a${i}_4`] && (rst += this[`a${i}_4`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a25_5(){
                let rst = 0;
                for(let i=1;i<=24;i++){
                    this[`a${i}_5`] && (rst += this[`a${i}_5`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            },
            a25_6(){
                let rst = 0;
                for(let i=1;i<=24;i++){
                    this[`a${i}_6`] && (rst += this[`a${i}_6`] * Math.pow(10,this.fixed))
                }
                return rst * 1.0/ Math.pow(10,this.fixed);
            }
        },
        watch: {
            getTableA104000(newVal) {
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
                    "uid":this.uid,
                    "year":this.year,
                    "userId":this.userId
                };
                for(let i=1;i<=25;i++){
                    for(let j=1;j<=6;j++){
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
                store.dispatch("editA104000", {
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
                store.dispatch("getTableA104000",{
                    data:{
                        "uid":this.uid,
                        "year":this.year,
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
                    urlParam:"a104000",
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