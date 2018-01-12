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
                        <td class="green"><number-display :value="a1"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">2</td>
                        <td class="blue">   税收规定的抵扣率</td>
                        <td>{{a2}}</td>
                    </tr>
                    <tr>
                        <td class="blue">3</td>
                        <td class="blue">   本年新增的可抵扣的股权投资额（1行×2行）%）</td>
                        <td><number-display :value="a3"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">4</td>
                        <td class="blue">以前年度结转的尚未抵扣的股权投资余额</td>
                        <td class="green"><number-display :value="a4"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">5</td>
                        <td class="blue">本年可抵扣的股权投资额（3行+4行）</td>
                        <td><number-display :value="a5"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">6</td>
                        <td class="blue">本年可用于抵扣的应纳税所得额</td>
                        <td class="green"><number-display :value="a6"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">7</td>
                        <td class="blue">本年实际抵扣应纳税所得额（5行≤6行，本行=5行；5行＞6行，本行=6行）</td>
                        <td><number-display :value="a7"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">8</td>
                        <td class="blue">本年实际抵扣应纳税所得额（5行≤6行，本行=5行；5行＞6行，本行=6行）</td>
                        <td><number-display :value="a8"></number-display></td>
                    </tr>
                    <tr>
                        <td colspan="3">二、通过有限合伙制创业投资企业投资未上市中小高新企业按一定比例抵扣分得的应纳税所得额</td>
                    </tr>
                    <tr>
                        <td class="blue">9</td>
                        <td class="blue">本年从有限合伙创投企业应分得的应纳税所得额</td>
                        <td class="green"><number-display :value="a9"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">10</td>
                        <td class="blue">本年新增的可抵扣投资额</td>
                        <td class="green"><number-display :value="a10"></number-display></td>
                    </tr>      
                    <tr>
                        <td class="blue">11</td>
                        <td class="blue">以前年度结转的可抵扣投资额余额</td>
                        <td class="green"><number-display :value="a11"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">12</td>
                        <td class="blue">本年可抵扣投资额（10行+11行）</td>
                        <td><number-display :value="a12"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">13</td>
                        <td class="blue">本年实际抵扣应分得的应纳税所得额（9行≤12行，本行=9行；9行＞12行，本行=12行）</td>
                        <td><number-display :value="a13"></number-display></td>
                    </tr>
                    <tr>
                        <td class="blue">14</td>
                        <td class="blue">结转以后年度抵扣的投资额余额（9行≤12行，本行=12行-9行；9行＞12行，本行=0）</td>
                        <td><number-display :value="a14"></number-display></td>
                    </tr>
                    <tr>
                        <td colspan="3">三、抵扣应纳税所得额合计</td>
                    </tr>
                    <tr>
                        <td class="blue">15</td>
                        <td class="blue">合计（7行+13行）</td>
                        <td><number-display :value="a15"></number-display></td>
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
                if(this.a15<0){
                    window.root && window.root.$emit("bizError",'第15行应大于等于0');
                    return;
                }
                let postData = {
                    "uid": this.uid,
                    "cyear": this.year,
                    "editId": this.userId,
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
                store.dispatch("getTableA107030",{
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
                    urlParam:"a107030",
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