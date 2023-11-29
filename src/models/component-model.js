// import axios from "axios";

// const getCountries = async searchQuery => {
//   console.log("searchQuery", searchQuery);
//   const response = await axios.get(
//     "http://core.local.com/v0.1/globals/countries"
//     // { params: { search: searchQuery } }
//   );
//   console.log("response", response);
//   return response.data;
// };

const getSocials = () => {
  let socials = {};
  ["facebook_profile", "linkedin_profile", "twitter_profile"].forEach(
    social => {
      socials[social] = {
        type: "text",
        label: social.replaceAll("_", " "),
        rules: "required",
        columns: 6
      };
    }
  );
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
          columns: 6
        },
        display_name: {
          type: "text",
          placeholder: "Display name",
          label: "Display name",
          rules: "required",
          columns: 6
        }
      }
    },
    biography: {
      type: "tip_tap",
      label: "Biography"
    },
    country_id: {
      type: "select",
      label: "Country",
      items: "http://core.local.com/v0.1/globals/countries",
      // items: getCountries(),
      search: true,
      object: true,
      "label-prop": "name",
      "value-prop": "id",
      "data-key": "result",
      "track-by": "id"
    },
    socials: {
      type: "group",
      label: "Socials",
      schema: getSocials()
    },
    expertise: {
      type: "tags",
      items: ["lol", "lol2"],
      label: "Expertise",
      search: true,
      create: true,
      "append-new-option": true
    }
  }
};
