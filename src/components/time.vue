<template>
    <div class="allTime">
        <div class="time">
            <el-date-picker
            v-model="valueStart"
            type="date"
            placeholder="选择开始日期">
            </el-date-picker>
        </div>
        <div class="time time2">
            <el-date-picker
                v-model="valueEnd"
                type="date"
                placeholder="选择结束日期">
            </el-date-picker>
        </div>
    </div>
</template>

<script>
   import 'element-ui/lib/theme-chalk/index.css'
   export default {
    data() {
      return {
        valueStart: '',
        valueEnd: ''
      };
    }
  };
</script>
<style lang="less" scoped>
    .allTime{
        position: fixed;
        top:0;
        left:1%;
        width:98%;
        display: flex;
        justify-content: center;
        text-align: center;
        background:#fff;
        .time{
           flex:1;
           margin-top:1%;
        }
        .time2{
            margin-left:1%;
        }
        .el-date-editor.el-input{
            width:100%;
        }
    }

</style>