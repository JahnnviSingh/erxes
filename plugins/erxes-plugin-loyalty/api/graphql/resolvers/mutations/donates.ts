export default [
  {
    name: 'donatesAdd',
    handler: async (_root, doc, { models, user }) => {
      return models.Donates.createDonate(models, { ...doc, userId: user._id });
    }
  },
  {
    name: 'donatesRemove',
    handler: async (_root, doc, { models }) => {
      return models.Donates.removeDonates(models, doc._ids);
    }
  },
  {
    name: 'cpDonatesAdd',
    handler: async (_root, doc, { models }) => {
      return models.Donates.createDonate(models, { ...doc });
    }
  },
  {
    name: 'cpDonatesRemove',
    handler: async (_root, doc, { models }) => {
      return models.Donates.removeDonates(models, doc._ids);
    }
  },
];