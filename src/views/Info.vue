<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
        size="mini"
        highlight-current-row="true"
    >
      <el-table-column type="selection">

      </el-table-column>
      <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    formatter(row, column) {
      console.log(column)
      return row.address;
    }
  }
}
</script>

<style scoped>

</style>