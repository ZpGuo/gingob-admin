<template>
  <el-card class="box-card setting-form" shadow="hover">
    <div slot="header" class="setting-form-header clearfix">
      <span class="setting-header-title">其它配置</span>
      <span class="setting-header-subtitle">公众号</span>
    </div>

      <el-form ref="form" :model="form" label-width="150px">
        <div class="setting-form-body">
            暂无
        </div>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {}
}
</script>
