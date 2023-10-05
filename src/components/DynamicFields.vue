<template>
  <div>
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
          noOptionsText="No options"
          noResultsText="No results"
          placeholder="Placeholder"
          :object="true"
          @change="selectAffiliateProgram"
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
          :object="true"
          @change="selectSellingPoints"
        >
          <template v-slot:option="{ option }">
            {{ option.name }} - {{ option.short_name }}
          </template>
        </TagsElement>
        <TextElement
          ref="name"
          name="name"
          label="Name"
          type="text"
          @change="changeText"
          v-if="showTextElement"
        ></TextElement>
      </GroupElement>

      <ButtonElement name="submit" add-class="mt-2" submits>
        Submit
      </ButtonElement>
    </Vueform>
  </div>
</template>

<script>
import { fetchItemsMixin } from "../mixins/fetchItemsMixin";

export default {
  name: "HelloWorld",
  data() {
    return {
      selectedAffiliateProgram: null,
      selectedSellingPoints: [],
      disabledFields: [],
      name: ""
    };
  },
  props: {
    msg: String
  },
  created() {
    this.disabledFields = ["selling_points"];
  },

  mixins: [fetchItemsMixin],
  computed: {
    showTextElement() {
      return (
        this.selectedAffiliateProgram &&
        Object.keys(this.selectedAffiliateProgram).length &&
        this.selectedSellingPoints.find(item => item.name == "Bingo")
      );
    }
  },
  methods: {
    changeText(value) {
      this.name = value;
      console.log("changeText", this.$refs.name.data, value);
    },
    selectAffiliateProgram(value) {
      this.selectedAffiliateProgram = value;
      this.notifyComponent("selling_points", value);
    },
    selectSellingPoints(value) {
      console.log("selectSellingPoints", value);
      this.selectedSellingPoints = value;
    },
    notifyComponent(path, value) {
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
