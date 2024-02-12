import { Typography } from "@mui/material";

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(com|es|net)$/;
    return regex.test(email);
};
export function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + "..." : text;
};

