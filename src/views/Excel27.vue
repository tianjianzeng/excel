<template>
    <div class="excel excel27">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="60px"/>
                <col width="120px"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
                <col width="5%"/>
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
                        <td colspan="20" class="ta-c">境外所得纳税调整后所得明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c" rowspan="3">行次</td>
                        <td class="blue ta-c" rowspan="2">国家（地区）</td>
                        <td class="blue ta-c" colspan="8">境外税后所得</td>
                        <td class="blue ta-c" colspan="4">境外所得可抵免的所得税额</td>
                        <td class="blue ta-c" rowspan="2">境外税前所得</td>
                        <td class="blue ta-c" rowspan="2">境外分支机构收入与支出纳税调整额</td>
                        <td class="blue ta-c" rowspan="2">境外分支机构调整分摊扣除的有关成本费用</td>
                        <td class="blue ta-c" rowspan="2">境外所得对应调整的相关成本费用支出</td>
                        <td class="blue ta-c" rowspan="2" colspan="2">境外所得纳税调整后所得</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">分支机构机构营业利润所得</td>
                        <td class="blue ta-c">股息、红利等权益性投资所得</td>
                        <td class="blue ta-c">利息所得</td>
                        <td class="blue ta-c">租金所得</td>
                        <td class="blue ta-c">特许权使用费所得</td>
                        <td class="blue ta-c">财产转让所得</td>
                        <td class="blue ta-c">其他所得</td>
                        <td class="blue ta-c">小计</td>
                        <td class="blue ta-c">直接缴纳的所得税额</td>
                        <td class="blue ta-c">间接负担的所得税额</td>
                        <td class="blue ta-c">享受税收饶让抵免税额</td>
                        <td class="blue ta-c" style="border-right: 1px solid #dfe6ec;">小计</td>
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
                        <td class="blue ta-c">9（2+3+4+5+6+7+8）</td>
                        <td class="blue ta-c">10</td>
                        <td class="blue ta-c">11</td>
                        <td class="blue ta-c">12</td>
                        <td class="blue ta-c">13（10+11+12）</td>
                        <td class="blue ta-c">14（9+10+11）</td>
                        <td class="blue ta-c">15</td>
                        <td class="blue ta-c">16</td>
                        <td class="blue ta-c">17</td>
                        <td class="blue ta-c">18（14+15-16-17）</td>
                        <td><el-button v-if="0===list.length" type="primary" @click="add()">添加</el-button></td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">001</td>
                        <td class="green">
                            <el-select v-model="item.a1" placeholder="请选择">
                                <el-option
                                v-for="item in getCResult108010"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </td>
                        <td class="green"><number-input v-model="item.a2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a3" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a4" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a6" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a8" :fixed="fixed"></number-input></td>
                        <td><number-display :value="item.a9"></number-display></td>
                        <td class="green"><number-input v-model="item.a10" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a11" :fixed="fixed" :min="0"></number-input></td>
                        <td class="green"><number-input v-model="item.a12" :fixed="fixed" :min="0"></number-input></td>
                        <td><number-display :value="item.a13"></number-display></td>
                        <td><number-display :value="item.a14"></number-display></td>
                        <td class="green"><number-input v-model="item.a15" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a16" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a17" :fixed="fixed"></number-input></td>
                        <td><number-display :value="item.a18"></number-display></td>
                        <td>
                            <el-button v-if="item.saved && index===list.length-1" type="primary" @click="add(item)">添加</el-button>
                            <el-button type="primary" @click="del(item)">删除</el-button>
                            <el-button v-if="!item.saved" type="primary" @click="sav(item)">保存</el-button>
                            <el-button v-if="item.saved" type="primary" @click="edt(item)">修改</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td class="blue"></td>
                        <td class="blue">合计</td>
                        <td><number-display :value="total.a2"></number-display></td>
                        <td><number-display :value="total.a3"></number-display></td>
                        <td><number-display :value="total.a4"></number-display></td>
                        <td><number-display :value="total.a5"></number-display></td>
                        <td><number-display :value="total.a6"></number-display></td>
                        <td><number-display :value="total.a7"></number-display></td>
                        <td><number-display :value="total.a8"></number-display></td>
                        <td><number-display :value="total.a9"></number-display></td>
                        <td><number-display :value="total.a10"></number-display></td>
                        <td><number-display :value="total.a11"></number-display></td>
                        <td><number-display :value="total.a12"></number-display></td>
                        <td><number-display :value="total.a13"></number-display></td>
                        <td><number-display :value="total.a14"></number-display></td>
                        <td><number-display :value="total.a15"></number-display></td>
                        <td><number-display :value="total.a16"></number-display></td>
                        <td><number-display :value="total.a17"></number-display></td>
                        <td><number-display :value="total.a18"></number-display></td>
                        <td></td>
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
        name: 'excel27',
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
            ...mapGetters(["getTableA108010","getCResult108010"])
        },
        watch: {
            getTableA108010(newVal) {
                if(newVal!=null){
                    this.list = JSON.parse(JSON.stringify(newVal.list));
                    this.total = JSON.parse(JSON.stringify(newVal.total));
                }
            },
            'list':{  
                handler:function(val,oldval){  
                    var a2=0;
                    var a3=0;
                    var a4=0;
                    var a5=0;
                    var a6=0;
                    var a7=0;
                    var a8=0;
                    var a9=0;
                    var a10=0;
                    var a11=0;
                    var a12=0;
                    var a13=0;
                    var a14=0;
                    var a15=0;
                    var a16=0;
                    var a17=0;
                    var a18=0;
                    val.forEach(item=>{
                        if(item.saved === undefined){
                            item.saved = true;
                        }
                        a2 += item.a2 *  Math.pow(10, this.fixed);
                        a3 += item.a3 *  Math.pow(10, this.fixed);
                        a4 += item.a4 *  Math.pow(10, this.fixed);
                        a5 += item.a5 *  Math.pow(10, this.fixed);
                        a6 += item.a6 *  Math.pow(10, this.fixed);
                        a7 += item.a7 *  Math.pow(10, this.fixed);
                        a8 += item.a8 *  Math.pow(10, this.fixed);
                        let rst = 0;
                        for(var i=2;i<=8;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a9 = rst * 1.0 / Math.pow(10, this.fixed);
                        a9 += item.a9 *  Math.pow(10, this.fixed);
                        a10 += item.a10 *  Math.pow(10, this.fixed);
                        a11 += item.a11 *  Math.pow(10, this.fixed);
                        a12 += item.a12 *  Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=10;i<=12;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a13 = rst * 1.0 / Math.pow(10, this.fixed);
                        a13 += item.a13 *  Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=9;i<=11;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a14 = rst * 1.0 / Math.pow(10, this.fixed);
                        a14 += item.a14 *  Math.pow(10, this.fixed);
                        a15 += item.a15 *  Math.pow(10, this.fixed);
                        a16 += item.a16 *  Math.pow(10, this.fixed);
                        a17 += item.a17 *  Math.pow(10, this.fixed);
                        rst = 0;
                        for(var i=14;i<=15;i++){
                            rst += item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        for(var i=16;i<=17;i++){
                            rst -= item[`a${i}`] * Math.pow(10, this.fixed);
                        }
                        item.a18 = rst * 1.0 / Math.pow(10, this.fixed);
                        a18 += item.a18 *  Math.pow(10, this.fixed);
                    });
                    this.total.a2 = a2 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a3 = a3 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a4 = a4 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a5 = a5 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a6 = a6 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a7 = a7 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a8 = a8 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a9 = a9 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a10 = a10 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a11 = a11 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a12 = a12 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a13 = a13 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a14 = a14 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a15 = a15 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a16 = a16 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a17 = a17 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                    this.total.a18 = a18 * 1.0 / Math.pow(10, this.fixed) *  Math.pow(10, this.fixed) /  Math.pow(10, this.fixed);
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },
        },
        methods:{
            add(){
                this.list.push({
                    saved:false,
                    a1:null,
                    a2:0,
                    a3:0,
                    a4:0,
                    a5:0,
                    a6:0,
                    a7:0,
                    a8:0,
                    a9:0,
                    a10:0,
                    a11:0,
                    a12:0,
                    a13:0,
                    a14:0,
                    a15:0,
                    a16:0,
                    a17:0,
                    a18:0
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
                    store.dispatch("delA108010",{
                        data:{
                            "uid": this.uid,
                            "id": item.id
                        },
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
                if(item.a16+item.a17<0){
                    window.root && window.root.$emit("bizError",'16+17列总和不能小于0');
                    return;
                }
                //调用编辑接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA108010",{
                    data:{
                        id: item.id,
                        a1:item.a1,
                        a2:item.a2,
                        a3:item.a3,
                        a4:item.a4,
                        a5:item.a5,
                        a6:item.a6,
                        a7:item.a7,
                        a8:item.a8,
                        a9:item.a9,
                        a10:item.a10,
                        a11:item.a11,
                        a12:item.a12,
                        a13:item.a13,
                        a14:item.a14,
                        a15:item.a15,
                        a16:item.a16,
                        a17:item.a17,
                        a18:item.a18
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
                if(item.a16+item.a17<0){
                    window.root && window.root.$emit("bizError",'16+17列总和不能小于0', '验证', {
                        confirmButtonText: '确定'
                    });
                    return;
                }
                //保存接口
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("addA108010",{
                    data:{
                        uid: this.uid,
                        mon: this.mon,
                        cYear: this.year,
                        userId: this.userId,
                        a1:item.a1,
                        a2:item.a2,
                        a3:item.a3,
                        a4:item.a4,
                        a5:item.a5,
                        a6:item.a6,
                        a7:item.a7,
                        a8:item.a8,
                        a9:item.a9,
                        a10:item.a10,
                        a11:item.a11,
                        a12:item.a12,
                        a13:item.a13,
                        a14:item.a14,
                        a15:item.a15,
                        a16:item.a16,
                        a17:item.a17,
                        a18:item.a18
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
                store.dispatch("getCResult108010");
                store.dispatch("getTableA108010",{
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
                    urlParam:"a108010",
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