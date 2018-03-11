<template>
    <div class="excel excel19">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col style="width:60px" />
                <col style="width:75%"/>
                <col style="width:20%"/>
                <tbody>
                    <tr>
                        <td colspan="3" class="ta-c">金融、保险等机构取得的涉农利息、保费收入优惠明细表</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">行次</td>
                        <td class="blue ta-c">项目</td>
                        <td class="blue ta-c">金额</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">1</td>
                        <td class="blue">一、金融机构农户小额贷款的利息收入</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">2</td>
                        <td class="blue ti-2">（一）金融机构取得农户小额贷款利息收入总额</td>
                        <td class="green"><number-input v-model="a2" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">3</td>
                        <td class="blue ti-2">（二）金融机构取得农户小额贷款利息减计收入（2×10%）</td>
                        <td><number-display :value="a3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">4</td>
                        <td class="blue">二、保险公司为种植业、养殖业提供保险业务取得的保费收入</td>
                        <td class="blue ta-c">*</td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">5</td>
                        <td class="blue ti-2">（一）保险公司为种植业、养殖业提供保险业务取得的保费收入总额（6+7-8）</td>
                        <td><number-display :value="a5" :min="0"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">6</td>
                        <td class="blue ti-4">1.原保费收入</td>
                        <td class="green"><number-input v-model="a6" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">7</td>
                        <td class="blue ti-4">2.分保费收入</td>
                        <td class="green"><number-input v-model="a7" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">8</td>
                        <td class="blue ti-4">3.分出保费收入</td>
                        <td class="green"><number-input v-model="a8" :min="0" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">9</td>
                        <td class="blue ti-2">（二）保险公司为种植业、养殖业提供保险业务取得的保费减计收入（5×10%）</td>
                        <td><number-display :value="a9"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">10</td>
                        <td class="blue">三、其他符合条件的机构农户小额贷款的利息收入</td>
                        <td class="blue ta-c">*</td>
                    </tr>      
                    <tr>
                        <td class="blue ta-c">11</td>
                        <td class="blue ti-2">（一）其他符合条件的机构取得农户小额贷款利息收入总额</td>
                        <td class="green"><number-input v-model="a11" :fixed="fixed"></number-input></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">12</td>
                        <td class="blue ti-2">（二）其他符合条件的机构取得农户小额贷款利息减计收入（11×10%）</td>
                        <td><number-display :value="a12"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue ta-c">13</td>
                        <td class="blue">合计（3+9+12）</td>
                        <td><number-display :value="a13"></number-display></td>
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
        name: 'excel19',
        data() {
            return {
                fixed:2,
                id:0,
                "a1":0,
                "a2":20,
                "a4":0,
                "a6":60,
                "a7":70,
                "a8":80,
                "a10":0,
                "a11":110
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput,
            NumberDisplay
        },
        computed: {
             ...mapGetters(["getTableA107013"]),
             a3() {
                 return (((this.a2 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed)) * 0.1
             },
             a5() {
                 return ((this.a6 || 0) * Math.pow(10,this.fixed) + (this.a7 || 0) * Math.pow(10,this.fixed) - (this.a8 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed);
             },
             a9() {
                 return (((this.a5 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed)) * 0.1
             },
             a12() {
                 return (((this.a11 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed)) * 0.1
             },
             a13() {
                 return ((this.a3 || 0) * Math.pow(10,this.fixed) + (this.a9 || 0) * Math.pow(10,this.fixed) + (this.a12 || 0) * Math.pow(10,this.fixed)) * 1.0/ Math.pow(10,this.fixed)
             }
        },
        watch: {
            getTableA107013(newVal) {
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
                if(this.a5<0){
                    window.root && window.root.$emit("bizError",'第5行应大于等于0');
                    return;
                }
                if(this.a8<0){
                    window.root && window.root.$emit("bizError",'第8行应大于等于0');
                    return;
                }
                let postData = {
                    "uid": this.uid,
                    "year": this.year,
                    "id": this.id
                };
                for(let i=1;i<=13;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA107013", {
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
                this.mon = this.$route.query.mon;
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("getTableA107013",{
                    data:{
                        "uid":this.uid,
                        "year":this.year,
                        "mon":this.mon,
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
                    urlParam:"a107013",
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