import React from "react";

export const required = (value) => {
    if (value) return undefined;
    return "Empty message";
};

export const validMaxLength = (nSimbol) => (value) => {
    if (value.length > nSimbol) return `Length string more ${nSimbol} simbol`;
};
