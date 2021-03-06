import styled from "styled-components";
import { motion } from "framer-motion";

export const H1 = styled(motion.h1)`
    color: #da5c5c;
    margin-bottom: 15px;
    border: 1px solid #da5c5c;
    padding: 10px;
    width: 100%;
    text-align: center;
`;

export const CardContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 90vw;
    margin: auto;

    button {
        color: #fff;
        font-size: 16px;
        background: #da5c5c;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #263238;
        width: 100%;
    }
    a {
        font-size: 16;
        font-weight: bold;
        color: #263238;
        text-decoration: none;
        align-items: center;
    }
`;

export const Button = styled(motion.button)`
    color: #fff;
    font-size: 16px;
    background: #da5c5c;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
`;
export const Tip = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: left;
    p {
        color: #ff3333;
        margin-bottom: 15px;
        padding: 10px;
        width: 100%;
    }
`;
