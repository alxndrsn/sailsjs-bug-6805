const fn = function() {};

module.exports = {
  fn: async function (inputs, exits) {
    await sails.getDatastore()
      .transaction(async db => {
        fn(true, true);
      });

    return exits.success();
  },
};
