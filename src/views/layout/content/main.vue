<template>
    <div class ="header">
    <el-row>
        <el-col :span="4">
            
            <span v-if="isCollapse"   class="iconfont icon-left-indent" @click="changeOpen"></span>
            <span v-else class="iconfont icon-right-indent" @click="changeOpen"></span>
        </el-col>
        <el-col :span="20">
        <div class="right">       
            <span>{{ nowTime }} |</span>
            <span>欢迎:xxx</span>    
            <span class="iconfont icon-tuichu"></span>
        </div>
        </el-col>
    </el-row>
    </div>

    <router-view></router-view>
</template>

<script>    
    import dayjs from 'dayjs'

    export default{
    data(){
        nowTime :''
    },
    props:['isCollapse'],
    methods:{
        changeOpen(){
        this.$emit('changeCollapse')
        }
    },
    created(){
         this.nowTime = dayjs(new Date()).format('YYYY年MM月DD天 hh:mm:ss') 
    }
}
    
</script>
<style>
.header{
    height:50px;
    background-color: pink;
    line-height:50px;
    .iconfont{
        font-size: 20px;
    }
}


.right{
    text-align: right;
    padding-right: 20px;
    font-size: 15px;
}
</style>