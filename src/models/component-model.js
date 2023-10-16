export default {
  getForm() {
    return [
      {
        canClear: true,
        ref: "affiliate_programs",
        submit: false,
        limit: 10,
        search: true,
        name: "affiliate_programs",
        items: "fetchAffiliatePrograms",
        valueProp: "id",
        labelProp: "name",
        label: "Affiliate programs",
        noOptionsText: "No options",
        noResultsText: "No results",
        placeholder: "Placeholder",
        type: "SelectElement"
      },
      {
        ref: "selling_points",
        submit: false,
        limit: 10,
        search: true,
        name: "selling_points",
        valueProp: "id",
        labelProp: "name",
        trackBy: "name",
        label: "Selling points",
        hideSelected: false,
        noOptionsText: "No options",
        noResultsText: "No results",
        closeOnSelect: false,
        placeholder: "Placeholder",
        disabledBy: "affiliate_programs",
        type: "TagsElement"
      },
      {
        ref: "name",
        name: "name",
        label: "Name",
        type: "TextElement",
        conditions: [
          ["affiliate_programs", "!=", null] && ["selling_points", "==", 5]
        ]
      }
    ];
  },
  getConfig() {
    return {
      url: "sites/authors",
      name: "Author",
      pagination: true
    };
  },
  getStructure() {
    return {
      list: this.getForm(),
      config: this.getConfig()
    };
  }
};
