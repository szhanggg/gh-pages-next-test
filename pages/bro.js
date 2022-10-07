import React from "react";

const Bro = ({ data }) => {
    return <div>{data}</div>;
};

export async function getServerSideProps() {
    const res = await fetch("http://159.223.177.167:3000/test/test");
    const data = await res.text();

    return {
        props: {
            data,
        },
    };
}

export default Bro;
