<template>
    <div class="excel excel18">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="60px"/>
                <col width="5%"/>
                <col width="120px"/>
                <col width="120px"/>
                <col width="120px"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="210px"/>
                <tbody>
                    <tr>
                        <td colspan="13" class="ta-c">综合利用资源生产产品取得的收入优惠明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="3">行次</td>
                        <td class="blue ta-c" rowspan="2">生产的产品名称</td>
                        <td class="blue ta-c" colspan="4">资源综合利用认定证书基本情况</td>
                        <td class="blue ta-c" rowspan="2">属于《资源综合利用企业所得税优惠目录》类别</td>
                        <td class="blue ta-c" rowspan="2">综合利用的资源</td>
                        <td class="blue ta-c" rowspan="2">综合利用的资源占生产产品材料的比例</td>
                        <td class="blue ta-c" rowspan="2">《资源综合利用企业所得税优惠目录》规定的标准</td>
                        <td class="blue ta-c" rowspan="2">符合条件的综合利用资源生产产品取得的收入总额</td>
                        <td class="blue ta-c" rowspan="2" colspan="2">综合利用资源减计收入</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">《资源综合利用认定证书》取得时间</td>
                        <td class="blue ta-c" colspan="2">《资源综合利用认定证书》有效期</td>
                        <td class="blue ta-c" style="border-right: 1px solid #dfe6ec;">《资源综合利用认定证书》编号</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue ta-c">2</td>
                        <td class="blue ta-c" colspan="2">3</td>
                        <td class="blue ta-c">4</td>
                        <td class="blue ta-c">5</td>
                        <td class="blue ta-c">6</td>
                        <td class="blue ta-c">7</td>
                        <td class="blue ta-c">8</td>
                        <td class="blue ta-c">9</td>
                        <td class="blue ta-c">10（9×10%）</td>
                        <td>
                            <el-button v-if="0===list.length" type="primary" @click="add">添加</el-button>
                        </td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue ta-c">{{(index+1).toString().padStart(3,"0")}}</td>
                        <td class="green"><input v-model="item.a1"></td>
                        <td class="green"><el-date-picker v-model="item.a2" type="date" placeholder="选择日期"></el-date-picker></td>
                        <td class="green"><el-date-picker v-model="item.a3s" type="date" placeholder="选择日期"></el-date-picker></td>
                        <td class="green"><el-date-picker v-model="item.a3e" type="date" placeholder="选择日期"></el-date-picker></td>
                        <td class="green"><input v-model="item.a4"></td>
                        <td class="green"><input v-model="item.a5"></td>
                        <td class="green"><input v-model="item.a6"></td>
                        <td class="green"><number-input v-model="item.a7_" :fixed="8" :filter="toPercent"></number-input></td>
                        <td class="green"><number-input v-model="item.a8_" :fixed="8" :filter="toPercent"></number-input></td>
                        <td class="green"><number-input v-model="item.a9" :fixed="fixed"></number-input></td>
                        <td><number-display :value="0"></number-display></td>
                        <td>
                            <el-button v-if="item.saved && index===list.length-1" type="primary" @click="add">添加</el-button>
                            <el-button type="primary" @click="del(item)">删除</el-button>
                            <el-button v-if="!item.saved" type="primary" @click="sav(item)">保存</el-button>
                            <el-button v-if="item.saved" type="primary" @click="edt(item)">修改</el-button>
                        </td>
                    </tr><tr>
                        <td class="blue"></td>
                        <td class="blue">合计</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td colspan="2"><number-display :value="total.a10"></number-display></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button v-if="false" type="primary" @click="refresh">刷新</el-button>
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
        name: 'excel18',
        data() {
            return {
                fixed:2,
                total:{},
                list:[]
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA107012"])
        },
        watch: {
            getTableA107012(newVal) {
                if(newVal!=null){
                    this.list = newVal.subList && JSON.parse(JSON.stringify(newVal.subList));
                    this.total = newVal.total && JSON.parse(JSON.stringify(newVal.total));
                }
            },
            list:{
                handler(newVal){
                    newVal.forEach(item=>{
                        if(item.saved === undefined){
                            item.saved = true;
                        }
                        item.a10 = item.a9 * 0.1;
                        item.a7_ = parseFloat(item.a8) || 0;
                        item.a8_ = parseFloat(item.a8) || 0;
                    });
                },
                deep: true
            }
        },
        methods:{
             toPercent(num, fixed = 4) {
                fixed = 4;
                if(typeof num != "number"){
                    num = Number(num);
                    if( isNaN(num)){
                        num = 0;
                    }
                }
                return (num*100).toFixed(fixed) + '%';
            },
            add(){
                this.list.push({
                    saved:false,
                    a1:"",
                    a2:"2017-03-01",
                    a3s:"2017-03-01",
                    a3e:"2017-04-01",
                    a4:"",
                    a5:"",
                    a6:"",
                    a7:"0",
                    a8:"0",
                    a9:0
                });
            },
            del(item){
                if(!item.saved){
                    let i = this.list.indexOf(item);
                    this.list.splice(i,1);
                }else{
                    //调用删除接口
                    const loading = this.$loading({
                        lock: true,
                        text: '加载中',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    store.dispatch("delA107012",{
                        urlParam: item.id,
                        callback:(rst)=>{
                            if(rst.status==0){
                                this.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                                let i = this.list.indexOf(item);
                                this.list.splice(i,1);
                            }
                        },
                        always:()=>{
                            loading.close();
                        }
                    });
                }
            },
            edt(item){
                //调用编辑接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA107012", {
                    data:{
                        uid: this.total.uid,
                        mon: this.total.mon,
                        cYear: this.total.cYear,
                        a1: item.a1,
                        a2: item.a2,
                        a3s: item.a3s,
                        a3e: item.a3e,
                        a4: item.a4,
                        a5: item.a5,
                        a6: item.a6,
                        a7: this.toPercent(item.a7_),
                        a8: this.toPercent(item.a8_),
                        a9: item.a9,
                        addid: 1,
                        id: item.id      
                    },
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
            sav(item){
                //保存接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("addA107012",{
                    data:{
                        uid: this.total.uid,
                        mon: this.total.mon,
                        cYear: this.total.cYear,
                        a1: item.a1,
                        a2: item.a2,
                        a3s: item.a3s,
                        a3e: item.a3e,
                        a4: item.a4,
                        a5: item.a5,
                        a6: item.a6,
                        a7: this.toPercent(item.a7_),
                        a8: this.toPercent(item.a8_),
                        a9: item.a9.toString(),
                        userId: 1                   
                    },
                    callback:(rst)=>{
                        if(rst.status==0){
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            item.saved = true;
                        }
                    },
                    always:()=>{
                        loading.close();
                    }
                })
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
                store.dispatch("getTableA107012",{
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
                    urlParam:"a107012",
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