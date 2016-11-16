/* @flow */
"use strict";

export const MAX_UINT_32 = 4294967295;

/**
 * Returns a random integer between min (included) and max (excluded)
 * Using Math.round() will give you a non-uniform distribution!
 *
 * @param min   lower bound of the domain (inclusive)
 * @param max   upper bound of the domain (exclusive)
 * @returns {Number}    integer
 */
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Get values of object in array form
 *
 * @param obj
 */
export const valuesOf = obj => Object.keys(obj).map(k => obj[k]);
