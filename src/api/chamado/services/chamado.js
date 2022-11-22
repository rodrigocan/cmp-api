'use strict';

/**
 * chamado service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chamado.chamado');
