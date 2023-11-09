const getSocials = () => {
  let socials = {};
  ["facebook_profile", "linkedin_profile", "twitter_profile"].forEach((social) => {
    socials[social] = {
      type: "text",
      label: social.replaceAll("_", " "),
      rules: "required",
      columns: 6,
    };
  });
  return socials;
};
export default {
  schema: {
    personal_information: {
      type: "group",
      label: "Personal information",
      schema: {
        name: {
          type: "text",
          label: "Name",
          rules: "required",
          columns: 6,
        },
        display_name: {
          type: "text",
          placeholder: "Display name",
          label: "Display name",
          rules: "required",
          columns: 6,
        },
      },
    },
    biography: {
      type: "tip_tap",
      label: "Biography",
    },
    country_id: {
      type: "select",
      label: "Country",
      items: "http://core.local.com/v0.1/globals/countries",
      "label-prop": "name",
      // "value-prop": "id",
      // "data-key": "result",
      // "track-by": "id",
      native: false,
    },
    socials: {
      type: "group",
      label: "Socials",
      schema: getSocials(),
    },
    expertise: {
      type: "tags",
      // items: ["lol", "lol2"],
      // props: {
      // create: true,
      "append-new-option": true,
      // },
    },
  },
};
