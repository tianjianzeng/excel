<template>
    <div class="excel excel21">
        <div class="table-wraper">
            <table cellspacing="0" cellpadding="0" border="0" >
                <tbody>
                    <tr>
                        <td colspan="3">抵扣应纳税所得额明细表</td>
                    </tr>
                    <tr>
                        <td style="width:5%"class="blue">行次</td>
                        <td style="width:75%" class="blue">项目</td>
                        <td style="width:20%" class="blue">金额</td>
                    </tr>
                    <tr>
                        <td colspan="3">一、创业投资企业直接投资于未上市中小高新企业按投资额一定比例抵扣应纳税所得额</td>
                    </tr>
                    <tr>
                        <td class="blue">1</td>
                        <td class="blue">本年新增的符合条件的股权投资额</td>
                        <td class="green">{{a1|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">   税收规定的抵扣率</td>
                        <td>{{a2}}</td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">   本年新增的可抵扣的股权投资额（1行×2行）%）</td>
                        <td>{{a3|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">以前年度结转的尚未抵扣的股权投资余额</td>
                        <td class="green">{{a4|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">本年可抵扣的股权投资额（3行+4行）</td>
                        <td>{{a5|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">本年可用于抵扣的应纳税所得额</td>
                        <td class="green">{{a6|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">本年实际抵扣应纳税所得额（5行≤6行，本行=5行；5行＞6行，本行=6行）</td>
                        <td>{{a7|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">本年实际抵扣应纳税所得额（5行≤6行，本行=5行；5行＞6行，本行=6行）</td>
                        <td>{{a8|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td colspan="3">二、通过有限合伙制创业投资企业投资未上市中小高新企业按一定比例抵扣分得的应纳税所得额</td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">本年从有限合伙创投企业应分得的应纳税所得额</td>
                        <td class="green">{{a9|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">本年新增的可抵扣投资额</td>
                        <td class="green">{{a10|formatCurrency}}</td>
                    </tr>      
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">以前年度结转的可抵扣投资额余额</td>
                        <td class="green">{{a11|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">本年可抵扣投资额（10行+11行）</td>
                        <td>{{a12|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">本年实际抵扣应分得的应纳税所得额（9行≤12行，本行=9行；9行＞12行，本行=12行）</td>
                        <td>{{a13|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">结转以后年度抵扣的投资额余额（9行≤12行，本行=12行-9行；9行＞12行，本行=0）</td>
                        <td>{{a14|formatCurrency}}</td>
                    </tr>
                    <tr>
                        <td colspan="3">三、抵扣应纳税所得额合计</td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">合计（7行+13行）</td>
                        <td>{{a15|formatCurrency}}</td>
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
        name: 'excel21',
        data() {
            return {
                fixed:2,
                id:0,
                a1:0,
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
                a15:0
            }
        },
        filters:{formatCurrency},
        components: {
            NumberInput
        },
        computed: {
            ...mapGetters(["getTableA107030"])
        },
        watch: {
            getTableA107030(newVal) {
                if(newVal!=null){
                    for(let i in newVal){
                        if(this.hasOwnProperty(i)){
                            this[i]=newVal[i];
                        }
                    }
                }
            }
        },
        methods:{
            save(){
                let postData = {
                    "uid":100,
                    "cyear":2016,
                    "editId":10086,
                    "id":this.id
                };
                for(let i=1;i<=15;i++){
                    let p = `a${i}`
                    postData[p]=this[p];
                }
                
                const loading = this.$loading({
                    lock: true,
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                store.dispatch("editA107030", {
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
            store.dispatch("getTableA107030", {
                data: {
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
</style>