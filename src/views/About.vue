<template>
  <div class="about">
    <el-row>
        <el-col :span="12">
          <el-input placeholder="请输入准驾类型" v-model="search_input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="3" :push="9">
          <el-button type="primary" round>新增</el-button>
        </el-col>
    </el-row>
    <el-table
      :data="linceces"
      style="width: 100%">
      <el-table-column
        prop="type"
        label="准驾类型"
        width="180"
        :span="3">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="180"
        :span="12">
      </el-table-column>
      <el-table-column
        prop="create_date"
        label="添加时间"
        :span="6">
      </el-table-column>
      <el-table-column
        prop="edit"
        label="编辑"
        :span="3">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DrivingLicence",
  data() {
    return {
      search_input: "",
      linceces: [{
        type: "A1",
        description: "大型客车和A3、B1、B2",
        create_date: "2019-06-06"
      }, {
        type: "A2",
        description: "牵引车和B1、B2",
        create_date: "2019-08-08"
      }]
    }
  },
  methods: {
    edit(row) {
      alert(row.type);
    },
    delete() {
      console.log("delete");
    }
  }
}
</script>
