module.exports = {
  routes: [
    {
      method: "GET",
      path: "/orders/customOrder",
      handler: "api::order.order.customOrderController", // or 'plugin::plugin-name.controllerName.functionName' for a plugin-specific controller
      // config: {
      //   policies: [
      //     // point to a registered policy
      //     'policy-name',

      //     // point to a registered policy with some custom configuration
      //     { name: 'policy-name', config: {} },

      //     // pass a policy implementation directly
      //     (policyContext, config, { strapi }) => {
      //       return true;
      //     },
      //   ]
      // },
    },
  ],
};
