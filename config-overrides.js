// config-overrides.js
module.exports = function override (config, env) {
    config.resolve.fallback = {
        "querystring": false
    }

    console.log('overridden', config)
    return config
}