'use strict';

/**
 * common-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::common-block.common-block');
