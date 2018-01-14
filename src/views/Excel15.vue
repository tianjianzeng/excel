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
                        <td><number-display :value="a1_4"></number-display></td>
                        <td class="green"><number-input v-model="a1_5" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_6" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a1_8" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a1_9"></number-display></td>
                        <td class="green"><number-input v-model="a1_10" :fixed="fixed" :editable="a6_2>0" :min="0" :max="Math.abs(a5_4)"></number-input></td>
                        <td class="blue">*</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">前四年度</td>
                        <td class="blue">{{a2_1}}</td>
                        <td class="green"><number-input v-model="a2_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_3" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_4"></number-display></td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a2_6" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a2_8" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a2_9"></number-display></td>
                        <td class="green"><number-input v-model="a2_10" :fixed="fixed" :editable="a6_2>0" :min="0" :max="Math.abs(a5_4)"></number-input></td>
                        <td><number-display :value="a2_11"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">前三年度</td>
                        <td class="blue">{{a3_1}}</td>
                        <td class="green"><number-input v-model="a3_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_3" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a3_4"></number-display></td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a3_7" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a3_8" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a3_9"></number-display></td>
                        <td class="green"><number-input v-model="a3_10" :fixed="fixed" :editable="a6_2>0" :min="0" :max="Math.abs(a5_4)"></number-input></td>
                        <td><number-display :value="a3_11"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">前二年度</td>
                        <td class="blue">{{a4_1}}</td>
                        <td class="green"><number-input v-model="a4_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a4_3" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_4"></number-display></td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a4_8" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a4_9"></number-display></td>
                        <td class="green"><number-input v-model="a4_10" :fixed="fixed" :editable="a6_2>0" :min="0" :max="Math.abs(a5_4)"></number-input></td>
                        <td><number-display :value="a4_11"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">前一年度</td>
                        <td class="blue">{{a5_1}}</td>
                        <td class="green"><number-input v-model="a5_2" :fixed="fixed"></number-input></td>
                        <td class="green"><number-input v-model="a5_3" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a5_4"></number-display></td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-input v-model="a5_10" :fixed="fixed" :editable="a6_2>0" :min="0" :max="Math.abs(a5_4)"></number-input></td>
                        <td><number-display :value="a5_11"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">本年度</td>
                        <td class="blue">{{a6_1}}</td>
                        <td><number-display :value="a6_2"></number-display></td>
                        <td class="green"><number-input v-model="a6_3" :fixed="fixed"></number-input></td>
                        <td><number-display :value="a6_4"></number-display></td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="blue">*</td>
                        <td class="green"><number-display v-model="a6_10" :fixed="fixed" ></number-display></td>
                        <td><number-display :value="a6_11"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue" colspan="11">可结转以后年度弥补的亏损额合计</td>
                        <td><number-display :value="a7"></number-display></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-button type="primary" @click="save">保存</el-button><el-button type="primary" @click="refresh">刷新</el-button>
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
                 return rst * 1.0 / Math.pow(10,this.fixed);
             },
             a2_9(){
                 let rst = 0;
                 for(var i=5;i<=8;i++){
                     rst+= this[`a2_${i}`] * Math.pow(10,this.fixed);
                 }
                 return rst * 1.0 / Math.pow(10,this.fixed);
             },
             a3_9(){
                 let rst = 0;
                 for(var i=5;i<=8;i++){
                     rst+= this[`a3_${i}`] * Math.pow(10,this.fixed);
                 }
                 return rst * 1.0 / Math.pow(10,this.fixed);
             },
             a4_9(){
                 let rst = 0;
                 for(var i=5;i<=8;i++){
                     rst+= this[`a4_${i}`] * Math.pow(10,this.fixed);
                 }
                 return rst * 1.0 / Math.pow(10,this.fixed);
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
//①如果6行3列＞0且6行2列＜0，则6行3列要＜6行2列的绝对值，校验不通过的出现提示：若第3列＞0且第2列＜0，第3列＜第2列的绝对值	//本年度合并、分立转入（转出）可弥补的亏损额应小于纳税调整后所得											
// ②如果6行2列＞0，则10列（1行至5行）＜＝4列（1行至5行）的绝对值；如果6行2列＜＝0，则10列（1行至5行）都＝0，校验不通过的出现提示：第6行第2列<0，则第10列1-6行应=0												

                if(this.a6_3>0 && this.a6_2<0){
                    if(this.a6_3>=Math.abs(this.a6_2)){
                        window.root && window.root.$emit("bizError",'校验不通过');
                        return;
                    }
                }
                for(let i = 1; i<=5; i++){
                    if(this[`a${i}_3`]>=0 && this[`a${i}_2`]<0){
                        if(this[`a${i}_3`]>=Math.abs(this[`a${i}_2`])){
                            window.root && window.root.$emit("bizError",'校验不通过');
                            return;
                        }
                    }
                }
                if(this.a6_2>0){
                    for(let i = 1; i<=5; i++){
                        if(this[`a${i}_10`]>Math.abs(this[`a${i}_4`])){
                            window.root && window.root.$emit("bizError",'校验不通过', '验证', {
                                confirmButtonText: '确定'
                            });
                            return;
                        }
                    }
                }else if(this.a6_2==0){
                    for(let i = 1; i<=5; i++){
                        if(this[`a${i}_10`]!=0){
                            window.root && window.root.$emit("bizError",'校验不通过');
                            return;
                        }
                    }
                }else{
                    for(let i = 1; i<=6; i++){
                        if(this[`a${i}_10`]!=0){
                            window.root && window.root.$emit("bizError",'校验不通过');
                            return;
                        }
                    }
                }
                let postData = {
                    "uid": this.uid,
                    "c_year": this.year,
                    "userId": this.userId
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
                store.dispatch("getTableA106000",{
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
                    urlParam:"a106000",
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