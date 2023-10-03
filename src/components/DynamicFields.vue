<template>
  <Vueform
    class="col-md-4 m-auto"
    @submit="handleSubmit"
    ref="form$"
    :prepare="prepareSubmit"
  >
    <GroupElement>
      <SelectElement
        :submit="false"
        :limit="10"
        :search="true"
        name="affiliate_programs"
        :items="fetchAffiliatePrograms"
        value-prop="id"
        labelProp="name"
        track-by="name"
        label="Selling points"
        :hideSelected="false"
        noOptionsText="No options"
        noResultsText="No results"
        :close-on-select="false"
        placeholder="Placeholder"
      >
        <template v-slot:option="{ option }">
          <div
            @click="
              notifyComponent('selling_points', {
                short_name: option['short_name']
              })
            "
            class="w-100"
          >
            {{ option.name }}
          </div>
        </template>
      </SelectElement>
      <TagsElement
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
    return {};
  },
  props: {
    msg: String
  },
  mixins: [fetchItemsMixin],
  methods: {
    notifyComponent(path, value) {
      if (value) {
        this.fetchItems("", path, value);
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
