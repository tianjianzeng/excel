<template>
    <div class="excel excel20">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width:60px" />
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <col style="width:5%"/>
                <tbody>
                    <tr>
                        <td colspan="20" class="ta-c">研发费用加计扣除优惠明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="3">行次</td>
                        <td class="blue ta-c" rowspan="2">研发项目</td>
                        <td class="blue ta-c" colspan="9">本年研发费用明细</td>
                        <td class="blue ta-c" rowspan="2">减:作为不征税收入处理的财政性资金用于研发的部分</td>
                        <td class="blue ta-c" rowspan="2">可加计扣除的研发费用合计</td>
                        <td class="blue ta-c" colspan="2">费用化部分</td>
                        <td class="blue ta-c" colspan="4">资本化部分</td>
                        <td class="blue ta-c" rowspan="2">本年研发费用加计扣除额合计</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">研发活动直接消耗的材料、燃料和动力费用</td>
                        <td class="blue ta-c">直接从事研发活动的本企业在职人员费用</td>
                        <td class="blue ta-c">专门用于研发活动的有关折旧费、租赁费、运行维护费</td>
                        <td class="blue ta-c">专门用于研发活动的有关无形资产摊销费</td>
                        <td class="blue ta-c">中间试验和产品试制的有关费用，样品、样机及一般测试手段购置费</td>
                        <td class="blue ta-c">研发成果论证、评审、验收、鉴定费用</td>
                        <td class="blue ta-c">勘探开发技术的现场试验费，新药研制的临床试验费</td>
                        <td class="blue ta-c">设计、制定、资料和翻译费用</td>
                        <td class="blue ta-c">年度研发费用合计</td>
                        <td class="blue ta-c">计入本年损益的金额</td>
                        <td class="blue ta-c">计入本年研发费用加计扣除额</td>
                        <td class="blue ta-c">本年形成无形资产的金额</td>
                        <td class="blue ta-c">本年形成无形资产加计摊销额</td>
                        <td class="blue ta-c">以前年度形成无形资产本年加计摊销额</td>
                        <td class="blue ta-c" style="border-right:1px solid #dfe6ec">无形资产本年加计摊销额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c">3</td>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c">5</td>
                        <td class="blue ta-c">6</td>
                        <td class="blue ta-c">7</td>
                        <td class="blue ta-c">8</td>
                        <td class="blue ta-c">9</td>
                        <td class="blue ta-c">10（2+3+4+5+6+7+8+9）</td>
                        <td class="blue ta-c">11</td>
                        <td class="blue ta-c">12（10-11）</td>
                        <td class="blue ta-c">13</td>
                        <td class="blue ta-c">14（13×50%）</td>
                        <td class="blue ta-c">15</td>
                        <td class="blue ta-c">16</td>
                        <td class="blue ta-c">17</td>
                        <td class="blue ta-c">18（16+17）</td>
                        <td class="blue ta-c">19（14+18）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue ta-c">{{(index+1).toString().padStart(3,"0")}}</td>
                        <td>{{item.a1}}</td>
                        <td><number-display :value="item.a2"></number-display></td>
                        <td><number-display :value="item.a3"></number-display></td>
                        <td><number-display :value="item.a4"></number-display></td>
                        <td><number-display :value="item.a5"></number-display></td>
                        <td><number-display :value="item.a6"></number-display></td>
                        <td><number-display :value="item.a7"></number-display></td>
                        <td><number-display :value="item.a8"></number-display></td>
                        <td><number-display :value="item.a9"></number-display></td>
                        <td><number-display :value="item.a10"></number-display></td>
                        <td><number-display :value="item.a11"></number-display></td>
                        <td><number-display :value="item.a12"></number-display></td>
                        <td><number-display :value="item.a13"></number-display></td>
                        <td><number-display :value="item.a14"></number-display></td>
                        <td><number-display :value="item.a15"></number-display></td>
                        <td><number-display :value="item.a16"></number-display></td>
                        <td><number-display :value="item.a17"></number-display></td>
                        <td><number-display :value="item.a18"></number-display></td>
                        <td><number-display :value="item.a19"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue"></td>
                        <td class="blue ta-c">合计</td>
                        <td ><number-display :value="total.a2"></number-display></td>
                        <td ><number-display :value="total.a3"></number-display></td>
                        <td ><number-display :value="total.a4"></number-display></td>
                        <td ><number-display :value="total.a5"></number-display></td>
                        <td ><number-display :value="total.a6"></number-display></td>
                        <td ><number-display :value="total.a7"></number-display></td>
                        <td ><number-display :value="total.a8"></number-display></td>
                        <td ><number-display :value="total.a9"></number-display></td>
                        <td ><number-display :value="total.a10"></number-display></td>
                        <td ><number-display :value="total.a11"></number-display></td>
                        <td ><number-display :value="total.a12"></number-display></td>
                        <td ><number-display :value="total.a13"></number-display></td>
                        <td ><number-display :value="total.a14"></number-display></td>
                        <td ><number-display :value="total.a15"></number-display></td>
                        <td ><number-display :value="total.a16"></number-display></td>
                        <td ><number-display :value="total.a17"></number-display></td>
                        <td ><number-display :value="total.a18"></number-display></td>
                        <td ><number-display :value="total.a19"></number-display></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="refresh">刷新</el-button>
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
        name: 'excel20',
        data() {
            return {
                fixed:2,
                list:[],
                total:{}
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA107014"])
        },
        watch:{
            getTableA107014(newVal){
                this.list = newVal.rows && JSON.parse(JSON.stringify(newVal.rows));
                this.total = newVal.total && JSON.parse(JSON.stringify(newVal.total));
            },
            list:{
                handler(newVal){
                    // newVal.forEach(item=>{
                    //     if(item.saved === undefined){
                    //         item.saved = true;
                    //     }
                    //     let rst = 0;
                    //     for(let i=2;i<=9;i++){
                    //         rst += item[`a${i}`] * Math.pow(10,this.fixed);
                    //     }
                    //     item.a10 = rst * 1.0/ Math.pow(10,this.fixed);
                    //     item.a12 = (item.a10 * Math.pow(10,this.fixed) - item.a11 * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
                    //     item.a14 = item.a13 * 0.5;
                    //     item.a18 = (item.a16 * Math.pow(10,this.fixed) + item.a17 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                    //     item.a19 = (item.a14 * Math.pow(10,this.fixed) + item.a18 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                    // });
                },
                deep:true
            }
        },
        methods:{
            save(){},
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
                store.dispatch("getTableA107014",{
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
                    urlParam:"a107014",
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