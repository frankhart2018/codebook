import React from "react";
import Button from "@mui/material/Button";

interface LinkButtonProps {
    codePath: string;
}

const LinkButton = (props: LinkButtonProps): JSX.Element => {
    const codePath = props.codePath;

    const onClickHandler = () => {
        console.log(codePath);
    }

    return (
        <Button variant="contained" onClick={onClickHandler}>Reveal Code</Button>
    );
};

export default LinkButton;