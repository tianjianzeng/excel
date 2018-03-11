<template>
    <div class="excel excel09">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width: 60px"/>
                <col width="6%"/>
                <col width="10%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <col width="6%"/>
                <tbody>
                    <tr>
                        <td colspan="16" class="ta-c">专项用途财政性资金纳税调整明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="4">行次</td>
                        <td class="blue ta-c" rowspan="4">项目</td>
                        <td class="blue ta-c" rowspan="3">取得年度</td>
                        <td class="blue ta-c" rowspan="3">财政性资金</td>
                        <td class="blue ta-c" colspan="2" rowspan="2">其中：符合不征税收入条件的财政性资金</td>
                        <td class="blue ta-c" colspan="5">以前年度支出情况</td>
                        <td class="blue ta-c" colspan="2">本年支出情况</td>
                        <td class="blue ta-c" colspan="3">本年结余情况</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="2">前五年度</td>
                        <td class="blue ta-c" rowspan="2">前四年度</td>
                        <td class="blue ta-c" rowspan="2">前三年度</td>
                        <td class="blue ta-c" rowspan="2">前二年度</td>
                        <td class="blue ta-c" rowspan="2">前一年度</td>
                        <td class="blue ta-c" rowspan="2">支出金额</td>
                        <td class="blue ta-c" rowspan="2">其中：费用化支出金额</td>
                        <td class="blue ta-c" rowspan="2">结余金额</td>
                        <td class="blue ta-c" rowspan="2">其中：上缴财政金额</td>
                        <td class="blue ta-c" rowspan="2">应计入本年应税收入金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">金额</td>
                        <td class="blue ta-c" style="border-right: 1px solid #dfe6ec;">其中：计入本年损益的金额</td>
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
                        <td class="blue ta-c">10</td>
                        <td class="blue ta-c">11</td>
                        <td class="blue ta-c">12</td>
                        <td class="blue ta-c">13</td>
                        <td class="blue ta-c">14</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue ta-c">{{item.rowNum}}</td>
                        <td class="blue ta-c"><span v-if="item.a1==null">合计（1+2+3+4+5+6）</span><span v-else>{{index|formatYear}}</span></td>
                        <td :class="{'green ta-c':item.a1!=null,'blue ta-c':item.a1==null}"><span v-if="item.a1==null">*</span><span>{{item.a1}}</span></td>
                        <td :class="{'green':index!=6}"><number-display v-if="index==6" :min="0" :value="item.a2"></number-display><number-input v-else v-model="item.a2" :fixed="fixed"></number-input></td>
                        <td :class="{'green':index!=6}"><number-display v-if="index==6" :min="0" :max="item.a2" :value="item.a3"></number-display><number-input v-else v-model="item.a3" :max="item.a2" :fixed="fixed"></number-input></td>
                        <td :class="{'green':index!=6}"><number-display v-if="index==6" :min="0" :max="item.a3" :value="item.a4"></number-display><number-input v-else v-model="item.a4" :max="item.a3" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a5!=null,'blue ta-c':item.a5==null}"><span v-if="item.a5==null">*</span><number-input v-else v-model="item.a5" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a6!=null,'blue ta-c':item.a6==null}"><span v-if="item.a6==null">*</span><number-input v-else v-model="item.a6" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a7!=null,'blue ta-c':item.a7==null}"><span v-if="item.a7==null">*</span><number-input v-else v-model="item.a7" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a8!=null,'blue ta-c':item.a8==null}"><span v-if="item.a8==null">*</span><number-input v-else v-model="item.a8" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a9!=null,'blue ta-c':item.a9==null}"><span v-if="item.a9==null">*</span><number-input v-else v-model="item.a9" :fixed="fixed"></number-input></td>
                        <td :class="{'green':index!=6}"><number-display v-if="index==6" :min="0" :max="item.a3" :value="item.a10"></number-display><number-input v-else v-model="item.a10" :max="item.a3" :fixed="fixed"></number-input></td>
                        <td :class="{'green':index!=6}"><number-display v-if="index==6" :min="0" :max="item.a10" :value="item.a11"></number-display><number-input v-else v-model="item.a11" :max="item.a10" :fixed="fixed"></number-input></td>
                        <td><number-display :value="item.a12"></number-display></td>
                        <td :class="{'green':index!=6}"><number-display v-if="index==6" :min="0" :max="item.a12" :value="item.a13"></number-display><number-input v-else v-model="item.a13" :max="item.a12" :fixed="fixed"></number-input></td>
                        <td :class="{'green':index!=6}"><number-display v-if="index==6" :min="0" :value="item.a14"></number-display><number-input v-else v-model="item.a14" :fixed="fixed"></number-input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button type="primary" v-if="false" @click="refresh">刷新</el-button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import store from '../store'
    import NumberInput from '../components/NumberInput'
    import NumberDisplay from '../components/NumberDisplay'
    import {formatCurrency,formatYear} from '../utils/filters'

    export default {
        name: 'excel09',
        data() {
            return {
                fixed:2,
                list:[],
                a2:0,
                a3:0,
                a4:0,
                a10:0,
                a11:0,
                a12:0,
                a13:0,
                a14:0
            }
        },
        filters:{formatCurrency,formatYear},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
            ...mapGetters(["getTableA105040"])
        },
        watch: {
            getTableA105040(newVal) {
                if(newVal!=null){
                    this.list = (newVal.rows && JSON.parse(JSON.stringify(newVal.rows)))||[];
                }
            },
            "list": {
                handler:function(val,oldval){  
                    var a2 = 0,
                        a3=0,
                        a4=0,
                        a10=0,
                        a11=0,
                        a12=0,
                        a13=0,
                        a14=0;
                    val.forEach((item,index)=>{
                        if(index==6){
                            return;
                        }
                        a2 += item.a2 * Math.pow(10, this.fixed);
                        a3 += item.a3 * Math.pow(10, this.fixed);
                        a4 += item.a4 * Math.pow(10, this.fixed);
                        a10 += item.a10 * Math.pow(10, this.fixed);
                        a11 += item.a11 * Math.pow(10, this.fixed);
                        a12 += item.a12 * Math.pow(10, this.fixed);
                        a13 += item.a13 * Math.pow(10, this.fixed);
                        a14 += item.a14 * Math.pow(10, this.fixed);
                        item.a12 = (item.a3 * Math.pow(10, this.fixed) - (item.a5||0) * Math.pow(10, this.fixed) - (item.a6||0) * Math.pow(10, this.fixed) - (item.a7||0) * Math.pow(10, this.fixed) - (item.a8||0) * Math.pow(10, this.fixed) - (item.a9||0) * Math.pow(10, this.fixed) - (item.a10||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                    });
                    val[6].a2 = a2 * 1.0 / Math.pow(10, this.fixed);
                    val[6].a3= a3 * 1.0 / Math.pow(10, this.fixed);
                    val[6].a4= a4 * 1.0 / Math.pow(10, this.fixed);
                    val[6].a10 = a10 * 1.0 / Math.pow(10, this.fixed),
                    val[6].a11 = a11 * 1.0 / Math.pow(10, this.fixed);
                    val[6].a12 = a12 * 1.0 / Math.pow(10, this.fixed);
                    val[6].a13 = a13 * 1.0 / Math.pow(10, this.fixed);
                    val[6].a14 = a14 * 1.0 / Math.pow(10, this.fixed);
                },  
                deep: true
            }
        },
        methods:{
            save(){
                let postData = {
                    "uid": this.uid,
                    "year": this.year,
                    "userId": this.userId,
                    "rows": this.list
                };
                
                for(var idx in this.list){
                    var it = this.list[idx];
                    if(idx<6){
                        if(it.a3>it.a2){
                            window.root && window.root.$emit("bizError",`${formatYear(it.a1)}第3列应小于等于第2列`);
                            return;
                        }
                        if(it.a4>it.a3){
                            window.root && window.root.$emit("bizError",`${formatYear(it.a1)}第4列应小于等于第3列`);
                            return;
                        }
                        if(it.a10>it.a3){
                            window.root && window.root.$emit("bizError",`${formatYear(it.a1)}第10列应小于等于第3列`);
                            return;
                        }
                        if(it.a11>it.a10){
                            window.root && window.root.$emit("bizError",`${formatYear(it.a1)}第11列应小于等于第10列`);
                            return;
                        }
                        if(it.a13>it.a12){
                            window.root && window.root.$emit("bizError",`${formatYear(it.a1)}第13列应小于等于第12列`);
                            return;
                        }
                    }else{
                        if(it.a2<0){
                            window.root && window.root.$emit("bizError",`合计第2列应大于等于零`);
                            return;
                        }
                        if(it.a3<0 || it.a3>it.a2){
                            window.root && window.root.$emit("bizError",`合计第3列应大于等于零小于等于第2列`);
                            return;
                        }
                        if(it.a4<0 || it.a4>it.a3){
                            window.root && window.root.$emit("bizError",`合计第4列应大于等于零小于等于第3列`);
                            return;
                        }
                        if(it.a10<0 || it.a10>it.a3){
                            window.root && window.root.$emit("bizError",`合计第10列应大于等于零小于等于第3列`);
                            return;
                        }
                        if(it.a11<0 || it.a4>it.a10){
                            window.root && window.root.$emit("bizError",`合计第11列应大于等于零小于等于第10列`);
                            return;
                        }
                        if(it.a13<0 || it.a13>it.a12){
                            window.root && window.root.$emit("bizError",`合计第13列应大于等于零小于等于第12列`);
                            return;
                        }
                        if(it.a14<0){
                            window.root && window.root.$emit("bizError",`合计第14列应大于等于零`);
                            return;
                        }
                    }
                }
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA105040", {
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
                store.dispatch("getTableA105040",{
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
                    urlParam:"a105040",
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