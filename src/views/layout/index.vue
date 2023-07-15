<template>
    <div class ='Menu' >
        <Menu :isCollapse="isCollapse">
        </Menu>
    </div>
    <div class="content" :class="{isClose:isCollapse}">
        <content :isCollapse="isCollapse" @changeCollapse="changeCollapse">
        </content>
    </div>
</template>
<script setup>
    import Menu from './menu/menu.vue'
    import content from './content/main.vue'
    import {ref} from 'vue'
    
    const isCollapse = ref(false)
    
    const changeCollapse =()=>{
        isCollapse.value = !isCollapse.value
        console.log(isCollapse.value)
    }

</script>

<style scoped>
    .Menu{
   
        background-color: #545c64;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
    }
    .content{
        padding-left: 200px;
        
    }
    .isClose{
        padding-left:64px ;
    }
</style>