<template>
    <div class="excel excel25">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="5%"></col>
                <col width="10%"></col>
                <col width="5%"></col>
                <col width="10%"></col>
                <col width="10%"></col>
                <col width="10%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="10%"></col>
                <col width="10%"></col>
                <tbody>
                    <tr>
                        <td colspan="14">税额抵免优惠明细表</td>
                    </tr>
                    <tr>
                        <td class="blue" rowspan="3">行次</td>
                        <td class="blue" rowspan="3">项目</td>
                        <td class="blue" rowspan="2">年度</td>
                        <td class="blue" rowspan="2">本年抵免前应纳税额</td>
                        <td class="blue" rowspan="2">本年允许抵免的专用设备投资额</td>
                        <td class="blue" rowspan="2">本年可抵免税额</td>
                        <td class="blue" colspan="6">以前年度已抵免额</td>
                        <td class="blue" rowspan="2">本年实际抵免的各年度税额</td>
                        <td class="blue" rowspan="2">可结转以后年度抵免的税额</td>
                    </tr>
                    <tr>
                        <td class="blue">前五年度</td>
                        <td class="blue">前四年度</td>
                        <td class="blue">前三年度</td>
                        <td class="blue">前二年度</td>
                        <td class="blue">前一年度</td>
                        <td class="blue">小计</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                        <td class="blue">4=3*10%</td>
                        <td class="blue">5</td>
                        <td class="blue">6</td>
                        <td class="blue">7</td>
                        <td class="blue">8</td>
                        <td class="blue">9</td>
                        <td class="blue">10（5+6+7+8+9）</td>
                        <td class="blue">11</td>
                        <td class="blue">12（4-10-11）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">{{item.rowNum}}</td>
                        <td class="blue">{{item.a1|formatYear}}</td>
                        <td class="green">{{item.a1}}</td>
                        <td class="green"><number-input v-model="item.a2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="item.a3" :fixed="fixed"></number-input></td>
                        <td>{{item.a4|formatCurrency}}</td>
                        <td :class="{'green':item.a5!=null,'blue':item.a5==null}"><span v-if="item.a5==null">*</span><number-input v-else v-model="item.a5" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a6!=null,'blue':item.a6==null}"><span v-if="item.a6==null">*</span><number-input v-else v-model="item.a6" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a7!=null,'blue':item.a7==null}"><span v-if="item.a7==null">*</span><number-input v-else v-model="item.a7" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a8!=null,'blue':item.a8==null}"><span v-if="item.a8==null">*</span><number-input v-else v-model="item.a8" :fixed="fixed"></number-input></td>
                        <td :class="{'green':item.a9!=null,'blue':item.a9==null}"><span v-if="item.a9==null">*</span><number-input v-else v-model="item.a9" :fixed="fixed"></number-input></td>
                        <td :class="{'blue':!item.a10}"><span v-if="!item.a10">*</span><span v-else>{{item.a10|formatCurrency}}</span></td>
                        <td>{{item.a11|formatCurrency}}</td>
                        <td :class="{'blue':(index==0)}"><span v-if="index==0">*</span><span v-else>{{item.a12|formatCurrency}}</span></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue" colspan="11">本年实际抵免税额合计</td>
                        <td>{{a7Check|formatCurrency}}</td>
                        <td class="blue">*</td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue" colspan="12">可结转以后年度抵免的税额合计</td>
                        <td>{{a8|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue" rowspan="3">专用设备投资情况</td>
                        <td class="blue" colspan="8">本年允许抵免的环境保护专用设备投资额</td>
                        <td class="green" colspan="4"><number-input v-model="a9" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue" colspan="8">本年允许抵免节能节水的专用设备投资额</td>
                        <td class="green" colspan="4"><number-input v-model="a10" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue" colspan="8">本年允许抵免的安全生产专用设备投资额</td>
                        <td class="green" colspan="4"><number-input v-model="a11" :fixed="fixed"></number-input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" :disabled="a7<a7Check" @click="save">保存</el-button><el-button type="primary" @click="refresh">刷新</el-button>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import store from '../store'
    import NumberInput from '../components/NumberInput'
    import {formatCurrency,formatYear} from '../utils/filters'

    export default {
        name: 'excel25',
        data() {
            return {
                fixed:2,
                id:0,
                list:[],
                a7Check:0,
                a7:0,
                a8:0,
                a9:0,
                a10:0,
                a11:0
            }
        },
        filters:{formatCurrency,formatYear},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA107050"])
        },
        watch: {
            getTableA107050(newVal){
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                    this.list = JSON.parse(JSON.stringify(newVal.rows));
                }
            },
            list:{
                handler(val){
                    var a7=0,
                        a8=0;
                        
                    val[0].a11 = Math.min(val[5].a2, val[0].a4-val[0].a10);
                    val[1].a11 = Math.min(val[5].a2-val[0].a11, val[1].a4-val[1].a10);
                    val[2].a11 = Math.min(val[5].a2-val[1].a11, val[2].a4-val[2].a10);
                    val[3].a11 = Math.min(val[5].a2-val[2].a11, val[3].a4-val[3].a10);
                    val[4].a11 = Math.min(val[5].a2-val[3].a11, val[4].a4-val[4].a10);
                    val[5].a11 = Math.min(val[5].a2-val[4].a11, val[5].a4);
                    val.forEach((item,index)=>{
                        item.a4 = item.a3 * 0.1;
                        item.a10 = ((item.a5||0) * Math.pow(10, this.fixed) + (item.a6||0) * Math.pow(10, this.fixed) + (item.a7||0) * Math.pow(10, this.fixed) + (item.a8||0) * Math.pow(10, this.fixed) + (item.a9||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                        if(index!=0){
                            item.a12 = ((item.a4) * Math.pow(10, this.fixed) - (item.a10||0) * Math.pow(10, this.fixed) - (item.a11||0) * Math.pow(10, this.fixed)) * 1.0 / Math.pow(10, this.fixed);
                            a8 += item.a12;
                        }
                        a7 += item.a11;
                    });
                    this.a7Check = a7;
                    this.a8 = a8;
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
                    "id":this.id
                };
                for(let i=1;i<=11;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                postData.rows = this.list;
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA107050", {
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
                store.dispatch("getTableA107050", {
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
                    urlParam:"a107050",
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