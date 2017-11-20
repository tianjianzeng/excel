<template>
    <div class="excel excel15">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="13">企业所得税弥补亏损明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue" rowspan="3">行次</td>
                        <td style="width:5%" class="blue" rowspan="3">项目</td>
                        <td style="width:10%" class="blue" rowspan="2">年度</td>
                        <td style="width:10%" class="blue" rowspan="2">纳税调整后所得</td>
                        <td style="width:10%" class="blue" rowspan="2">合并、分立转入（转出）可弥补的亏损额</td>
                        <td style="width:10%" class="blue" rowspan="2" >当年可弥补的亏损额</td>
                        <td style="width:10%" class="blue" colspan="5">以前年度亏损已弥补额</td>
                        <td style="width:10%" class="blue" rowspan="2">本年度实际弥补的以前年度亏损额</td>
                        <td style="width:10%" class="blue" rowspan="2">可结转以后年度弥补的亏损额</td>
                    </tr>
                    <tr>
                        <td class="blue">前四年度</td>
                        <td class="blue">前三年度</td>
                        <td class="blue">前二年度</td>
                        <td class="blue">前一年度</td>
                        <td class="blue">合计</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue">3</td>
                        <td class="blue">4</td>
                        <td class="blue">5</td>
                        <td class="blue">6</td>
                        <td class="blue">7</td>
                        <td class="blue">8</td>
                        <td class="blue">9</td>
                        <td class="blue">10</td>
                        <td class="blue">11</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">前五年度</td>
                        <td class="blue">{{a1_1}}</td>
                        <td class="green"><number-input v-model="a1_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_3" :fixed="fixed"></number-input></td>
                        <td>{{a1_4|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_6" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_8" :fixed="fixed"></number-input></td>
                        <td>{{a1_9|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a1_10" :fixed="fixed" :editable="a6_2>0" :min="0" :max="Math.abs(a5_4)"></number-input></td>
                        <td class="blue">*</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">前四年度</td>
                        <td class="blue">{{a2_1}}</td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_3" :fixed="fixed"></number-input></td>
                        <td>{{a2_4|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a2_6" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_8" :fixed="fixed"></number-input></td>
                        <td>{{a2_9|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a2_10" :fixed="fixed"></number-input></td>
                        <td>{{a2_11|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">前三年度</td>
                        <td class="blue">{{a3_1}}</td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_3" :fixed="fixed"></number-input></td>
                        <td>{{a3_4|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a3_7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_8" :fixed="fixed"></number-input></td>
                        <td>{{a3_9|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a3_10" :fixed="fixed"></number-input></td>
                        <td>{{a3_11|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">前二年度</td>
                        <td class="blue">{{a4_1}}</td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_3" :fixed="fixed"></number-input></td>
                        <td>{{a4_4|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a4_8" :fixed="fixed"></number-input></td>
                        <td>{{a4_9|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a4_10" :fixed="fixed"></number-input></td>
                        <td>{{a4_11|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">前一年度</td>
                        <td class="blue">{{a4_1}}</td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_3" :fixed="fixed"></number-input></td>
                        <td>{{a5_4|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a5_10" :fixed="fixed"></number-input></td>
                        <td>{{a5_11|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">本年度</td>
                        <td class="blue">{{a6_1}}</td>
                        <td>{{a6_2|formatCurrency}}</td>
                        <td class="green"><number-input v-model="a6_3" :fixed="fixed"></number-input></td>
                        <td>{{a6_4|formatCurrency}}</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-display v-model="a6_10" :fixed="fixed" ></number-display></td>
                        <td>{{a6_11|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue" colspan="11">可结转以后年度弥补的亏损额合计</td>
                        <td>{{a7|formatCurrency}}</td>
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
        name: 'excel15',
        data() {
            return {
                fixed:2,
                id:0,
                isFirstYear:0,
                a1_1:0,
                a1_2:0,
                a1_3:0,
                a1_5:0,
                a1_6:0,
                a1_7:0,
                a1_8:0,
                a1_10:0,
                a1_11:0,
                a2_1:0,
                a2_2:0,
                a2_3:0,
                a2_5:0,
                a2_6:0,
                a2_7:0,
                a2_8:0,
                a2_10:0,
                a2_11:0,
                a3_1:0,
                a3_2:0,
                a3_3:0,
                a3_5:0,
                a3_6:0,
                a3_7:0,
                a3_8:0,
                a3_10:0,
                a3_11:0,
                a4_1:0,
                a4_2:0,
                a4_3:0,
                a4_5:0,
                a4_6:0,
                a4_7:0,
                a4_8:0,
                a4_10:0,
                a4_11:0,
                a5_1:0,
                a5_2:0,
                a5_3:0,
                a5_5:0,
                a5_6:0,
                a5_7:0,
                a5_8:0,
                a5_9:0,
                a5_10:0,
                a5_11:0,
                a6_1:0,
                a6_2:0,
                a6_3:0,
                a6_5:0,
                a6_6:0,
                a6_7:0,
                a6_8:0,
                a6_9:0,
                a6_10:0,
                a6_11:0,
                a7:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
             ...mapGetters(["getTableA106000"]),
             a1_4(){
                 if(this.a1_2 < 0){
                     return (this.a1_2 * Math.pow(10,this.fixed) + this.a1_3 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                 }
                 return this.a1_3;
             },
             a2_4(){
                 if(this.a1_2 < 0){
                     return (this.a2_2 * Math.pow(10,this.fixed) + this.a2_3 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                 }
                 return this.a2_3;
             },
             a3_4(){
                 if(this.a1_2 < 0){
                     return (this.a3_2 * Math.pow(10,this.fixed) + this.a3_3 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                 }
                 return this.a3_3;
             },
             a4_4(){
                 if(this.a1_2 < 0){
                     return (this.a4_2 * Math.pow(10,this.fixed) + this.a4_3 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                 }
                 return this.a4_3;
             },
             a5_4(){
                 if(this.a1_2 < 0){
                     return (this.a5_2 * Math.pow(10,this.fixed) + this.a5_3 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                 }
                 return this.a5_3;
             },
             a6_4(){
                 if(this.a1_2 < 0){
                     return (this.a6_2 * Math.pow(10,this.fixed) + this.a6_3 * Math.pow(10,this.fixed)) * 1.0 / Math.pow(10,this.fixed);
                 }
                 return this.a6_3;
             },
             a1_9(){
                 let rst = 0;
                 for(var i=5;i<=8;i++){
                     rst+= this[`a1_${i}`] * Math.pow(10,this.fixed);
                 }
                 return rst * 1.0 / Math.pow(10,fixed);
             },
             a2_9(){
                 let rst = 0;
                 for(var i=5;i<=8;i++){
                     rst+= this[`a2_${i}`] * Math.pow(10,this.fixed);
                 }
                 return rst * 1.0 / Math.pow(10,fixed);
             },
             a3_9(){
                 let rst = 0;
                 for(var i=5;i<=8;i++){
                     rst+= this[`a3_${i}`] * Math.pow(10,this.fixed);
                 }
                 return rst * 1.0 / Math.pow(10,fixed);
             },
             a4_9(){
                 let rst = 0;
                 for(var i=5;i<=8;i++){
                     rst+= this[`a4_${i}`] * Math.pow(10,this.fixed);
                 }
                 return rst * 1.0 / Math.pow(10,fixed);
             },
        },
        watch: {
            getTableA106000(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                }
                this.a1_10 = 0;
                this.a2_10 = 0;
                this.a3_10 = 0;
                this.a4_10 = 0;
                this.a5_10 = 0;
            },
        },
        methods:{
            save(){
                let postData = {
                    "uid":100,
                    "c_year":2016,
                    "userId":10086
                };
                for(let i=1;i<=7;i++){
                    for(let j=1;j<=11;j++){
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
                store.dispatch("editA106000", {
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
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            store.dispatch("getTableA106000",{
                data:{
                    "uid":100,
                    "year":2016,
                    "userId":10086
                },
                always:()=>{
                    loading.close();
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    .excel15{
        td{
            text-align: left;
            padding-left: 10px;
        }
        td[colspan="3"]{
            text-align: center;
        }
    }
</style>