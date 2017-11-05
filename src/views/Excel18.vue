<template>
    <div class="excel excel18">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="5%"></col>
                <col width="210px"></col>
                <tbody>
                    <tr>
                        <td colspan="13">综合利用资源生产产品取得的收入优惠明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%" class="blue"rowspan="3">行次</td>
                        <td class="blue" rowspan="2">生产的产品名称</td>
                        <td class="blue" colspan="4">资源综合利用认定证书基本情况</td>
                        <td class="blue" rowspan="2">属于《资源综合利用企业所得税优惠目录》类别</td>
                        <td class="blue" rowspan="2">综合利用的资源</td>
                        <td class="blue" rowspan="2">综合利用的资源占生产产品材料的比例</td>
                        <td class="blue" rowspan="2">《资源综合利用企业所得税优惠目录》规定的标准</td>
                        <td class="blue" rowspan="2">符合条件的综合利用资源生产产品取得的收入总额</td>
                        <td class="blue" rowspan="2" colspan="2">综合利用资源减计收入</td>
                    </tr>
                    <tr>
                        <td class="blue">《资源综合利用认定证书》取得时间</td>
                        <td class="blue" colspan="2">《资源综合利用认定证书》有效期</td>
                        <td class="blue" style="border-right: 1px solid #dfe6ec;">《资源综合利用认定证书》编号</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">2</td>
                        <td class="blue" colspan="2">3</td>
                        <td class="blue">4</td>
                        <td class="blue">5</td>
                        <td class="blue">6</td>
                        <td class="blue">7</td>
                        <td class="blue">8</td>
                        <td class="blue">9</td>
                        <td class="blue" colspan="2">10（9×10%）</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td class="blue">001</td>
                        <td class="green"><input></td>
                        <td class="green"><el-date-picker v-model="value8" type="date" placeholder="选择日期"></el-date-picker></td>
                        <td class="green"><el-date-picker v-model="value8" type="date" placeholder="选择日期"></el-date-picker></td>
                        <td class="green"><el-date-picker v-model="value8" type="date" placeholder="选择日期"></el-date-picker></td>
                        <td class="green"><input></td>
                        <td class="green"><input></td>
                        <td class="green"><input></td>
                        <td class="green">*</td>
                        <td class="green">*</td>
                        <td class="green"><number-input v-model="a3_5" :fixed="fixed"></number-input></td>
                        <td>{{0|formatCurrency}}</td>
                        <td>
                            <!-- <el-button v-if="item.saved && index===list.length-1" type="primary" @click="add(item)">添加</el-button>
                            <el-button type="primary" @click="del(item)">删除</el-button>
                            <el-button v-if="!item.saved" type="primary" @click="sav(item)">保存</el-button>
                            <el-button v-if="item.saved" type="primary" @click="edt(item)">修改</el-button> -->
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
                        <td>{{0|formatCurrency}}</td>
                        <td></td>
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
    import {formatCurrency} from '../utils/filters'

    export default {
        name: 'excel18',
        data() {
            return {
                fixed:2,
                list:[]
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA107012"])
        },
        watch: {
            getTableA107012(newVal) {
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
                if(this.invalid>0){
                    this.$alert('请修改不和规范的字段后再进行保存', '验证', {
                        confirmButtonText: '确定'
                    });
                    return;
                }
                let postData = {
                    "uid":100,
                    "year":2016,
                    "userId":10086,
                    "id":this.id
                };
                for(let i=1;i<=14;i++){
                    for(let j=1;j<=3;j++){
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
                store.dispatch("editA107012", {
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
            store.dispatch("getTableA107012",{
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

<style lang="scss">
</style>