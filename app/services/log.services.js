const logger = require('../models/log.model');
const local_log = require('../../log');


exports.log_save = async function(lv, err,where) {
    try {
        let log = new logger({
            "where": where,
            "name":err.name,
            "content": err.message,
            "level": lv
        })
        await log.save()
    } catch (error) {
        local_log.error(err);
        local_log.error(error);
    }
}

