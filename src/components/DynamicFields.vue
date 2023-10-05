<template>
  <Vueform
    class="col-md-4 m-auto"
    @submit="handleSubmit"
    ref="form$"
    :prepare="prepareSubmit"
  >
    <GroupElement>
      <SelectElement
        :can-clear="true"
        ref="affiliate_programs"
        :submit="false"
        :limit="10"
        :search="true"
        name="affiliate_programs"
        :items="fetchAffiliatePrograms"
        value-prop="id"
        labelProp="name"
        label="Affiliate programs"
        :hideSelected="false"
        noOptionsText="No options"
        noResultsText="No results"
        placeholder="Placeholder"
        :object="true"
        @change="notifyComponent('selling_points', $event)"
      >
      </SelectElement>
      <TagsElement
        ref="selling_points"
        :submit="false"
        :limit="10"
        :search="true"
        name="selling_points"
        :items="fetchSellingPoints"
        value-prop="id"
        labelProp="name"
        track-by="name"
        label="Selling points"
        :hideSelected="false"
        noOptionsText="No options"
        noResultsText="No results"
        :close-on-select="false"
        placeholder="Placeholder"
        :disabled="disabledFields.indexOf('selling_points') !== -1"
      >
        <template v-slot:option="{ option }">
          {{ option.name }} - {{ option.short_name }}
        </template>
      </TagsElement>
    </GroupElement>

    <ButtonElement name="submit" add-class="mt-2" submits>
      Submit
    </ButtonElement>
  </Vueform>
</template>

<script>
import { fetchItemsMixin } from "../mixins/fetchItemsMixin";

export default {
  name: "HelloWorld",
  data() {
    return {
      disabledFields: [],
      selectedAffiliateProgram: ""
    };
  },
  props: {
    msg: String
  },
  created() {
    this.disabledFields = ["selling_points"];
  },
  mixins: [fetchItemsMixin],
  methods: {
    notifyComponent(path, value) {
      console.log(path, value);

      if (value) {
        this.fetchItems("", path, value);
        this.enableField(path);
      } else {
        this.disableField(path);
      }
    },
    enableField(path) {
      const index = this.disabledFields.indexOf(path);
      if (index !== -1) {
        this.disabledFields.splice(index, 1);
      }
    },
    disableField(path) {
      console.log("disableField", path);
      const index = this.disabledFields.indexOf(path);
      if (index === -1) {
        this.disabledFields.push(path);
        this.$refs[path].clear();
      }
    },
    handleSubmit() {
      console.log("handleSubmit", this.$refs.form$.data);
    },
    fetchAffiliatePrograms(searchQuery) {
      return this.fetchItems(searchQuery, "affiliate_programs");
    },
    fetchSellingPoints(searchQuery) {
      return this.fetchItems(searchQuery, "selling_points");
    },
    prepareSubmit(value) {
      console.log("prepare submit", value);
    }
  }
};
</script>
