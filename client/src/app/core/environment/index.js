import { config as baseConfig } './environment';

let currentConfig = baseConfig;

if (process.env.NODE_ENV) {
    // noop currently - this will decide what config to use
}

export const config = currentConfig;

